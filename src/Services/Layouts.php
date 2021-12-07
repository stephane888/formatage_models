<?php

namespace Drupal\formatage_models\Services;

use Drupal\Core\Form\FormStateInterface;
use Drupal\file\Entity\File;

class Layouts {
  protected $configuration = [];
  protected $regions = [];
  protected $BuilderConfigForm;
  
  function __construct(BuilderConfigForm $BuilderConfigForm) {
    $this->BuilderConfigForm = $BuilderConfigForm;
  }
  
  /**
   * permert d'ajouter un formulaire d'edition.
   *
   * @var array
   */
  protected $forms = [];
  
  /**
   *
   * @return string[]|boolean[]
   */
  function defaultConfiguration() {
    return [
      'css' => '',
      'load_libray' => false,
      'save_by_domain' => false
    ];
  }
  
  //
  function setConfig($configuration) {
    $this->configuration = $configuration;
    $currentDomain = self::getCurrentdomain();
    
    if (!empty($configuration['save_by_domain']) && !empty($configuration[$currentDomain])) {
      $this->configuration = $configuration[$currentDomain];
    }
  }
  
  //
  function setRegions($regions) {
    $this->regions = $regions;
  }
  
  /**
   * Construit le formaulaire de gestion de CSS.
   *
   * @param array $form
   */
  function buildClassCssRegion(array &$form) {
    foreach ($this->regions as $region => $label) {
      $form['css_class']['region_css_' . $region] = [
        '#type' => 'textfield',
        '#title' => 'Class css region : ' . $label['label'],
        '#default_value' => isset($this->configuration['region_css_' . $region]) ? $this->configuration['region_css_' . $region] : ''
      ];
    }
  }
  
  /**
   *
   * @param array $form
   */
  function buildConfigurationForm(array &$form) {
    $form["load_libray"] = [
      '#type' => 'checkbox',
      '#title' => "Charge les styles",
      '#default_value' => $this->configuration['load_libray']
    ];
    $form["save_by_domain"] = [
      '#type' => 'checkbox',
      '#title' => "Enregistre en fonction du domain",
      '#default_value' => $this->configuration['save_by_domain']
    ];
    
    $form['css_class'] = array(
      '#type' => 'details',
      '#title' => 'Class html',
      '#open' => false
    );
    $form['css_class']['css'] = [
      '#type' => 'textfield',
      '#title' => 'Class css du container parent',
      '#default_value' => $this->configuration['css']
    ];
    if (!empty($this->configuration['derivate']['options']))
      $form['css_class']['derivate'] = [
        '#type' => 'select',
        '#title' => 'Selectionner une derivée ',
        '#default_value' => $this->configuration['derivate']['value'],
        '#options' => $this->configuration['derivate']['options'],
        '#empty_option' => '- Select -'
      ];
    $this->buildClassCssRegion($form);
    $this->BuilderConfigForm->prepareBuildForms($this->configuration, $form);
  }
  
  /**
   *
   * @param array $fids
   * @return boolean
   */
  function saveFilePermanent(array $fids) {
    foreach ($fids as $fid) {
      if ($file = \Drupal\file\Entity\File::load($fid)) {
        // debugLog::kintDebugDrupal($file, 'saveFilePermanent2', null,
        // 'lesroisdelareno');
        $file->setPermanent();
        $file->save();
        $file_usage = \Drupal::service('file.usage');
        $file_usage->add($file, 'formatage_models', 'module', $fid);
        return true;
      }
    }
  }
  
  /**
   * Sauvegarde les données, peut tenir compte du domaine.
   *
   * @param array $configuration
   * @param FormStateInterface $form_state
   */
  function submitConfigurationForm(array &$configuration, FormStateInterface $form_state) {
    $currentDomain = self::getCurrentdomain();
    
    $SubConfiguration = $configuration;
    if (!empty($currentDomain) && !empty($configuration[$currentDomain])) {
      $SubConfiguration = $configuration[$currentDomain];
    }
    else {
      $SubConfiguration['save_by_domain'] = $form_state->getValue('save_by_domain');
    }
    $SubConfiguration['load_libray'] = $form_state->getValue('load_libray');
    
    $SubConfiguration['css'] = $form_state->getValue([
      'css_class',
      'css'
    ]);
    if (!empty($this->configuration['derivate']['options']))
      $SubConfiguration['derivate']['value'] = $form_state->getValue([
        'css_class',
        'derivate'
      ]);
    foreach ($this->regions as $region => $label) {
      $SubConfiguration['region_css_' . $region] = $form_state->getValue([
        'css_class',
        'region_css_' . $region
      ]);
    }
    //
    foreach ($SubConfiguration as $key => $field) {
      if (!empty($field['builder-form'])) {
        $SubConfiguration[$key]['info'] = array_merge($field['info'], $form_state->getValue($key)['info']);
        $SubConfiguration[$key]['fields'] = array_merge($field['fields'], $form_state->getValue($key)['fields']);
        // cette function n'est plus necessaire.
        $this->saveImage($SubConfiguration[$key]['fields']);
      }
    }
    
    if ($configuration['save_by_domain'] && !empty($currentDomain)) {
      $configuration[$currentDomain] = $SubConfiguration;
    }
    else {
      $configuration = $SubConfiguration;
    }
  }
  
  /**
   * cette function doit etre sur un autre module externe à ce dernier.
   *
   * @deprecated
   * @return string|number|NULL
   */
  public static function getCurrentdomain() {
    /** @var \Drupal\domain\Entity\Domain $active */
    $active = \Drupal::service('domain.negotiator')->getActiveDomain();
    if (empty($active)) {
      $active = \Drupal::entityTypeManager()->getStorage('domain')->loadDefaultDomain();
    }
    if (!empty($active))
      return $active->id();
  }
  
  /**
   *
   * @param array $fields
   */
  private function saveImage(array &$fields) {
    foreach ($fields as $field) {
      if (!empty($field['img_bg'])) {
        $this->ChangeStatusImage($field['img_bg']['fids']);
      }
    }
  }
  
  /**
   * Retourne le chemin absolue sans le domaine.
   *
   * @param array $fid
   * @param String $image_style
   * @return string|array
   */
  public function ChangeStatusImage($fid, $image_style = null) {
    if (!empty($fid[0])) {
      $file = File::load($fid[0]);
      if ($file) {
        // save image;
        $file->setPermanent();
        $file->save();
        // set usage;
        /** @var \Drupal\file\FileUsage\FileUsageInterface $file_usage */
        $file_usage = \Drupal::service('file.usage');
        $file_usage->add($file, 'formatage_models', 'layout', \Drupal::currentUser()->id());
      }
    }
  }
  
}