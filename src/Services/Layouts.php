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
   * Permert d'ajouter un formulaire d'edition.
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
      'load_clean_value' => false,
      'save_by_domain' => false
    ];
  }
  
  /**
   *
   * @param \Drupal\formatage_models\Services\Layouts $configuration
   */
  function setConfig($configuration) {
    $this->configuration = $configuration;
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
    $form["load_clean_value"] = [
      '#type' => 'checkbox',
      '#title' => "Clean html render",
      '#default_value' => $this->configuration['load_clean_value']
    ];
    if (\Drupal::moduleHandler()->moduleExists('wbumenudomain')) {
      $form["save_by_domain"] = [
        '#type' => 'checkbox',
        '#title' => "Enregistre en fonction du domain",
        '#default_value' => $this->configuration['save_by_domain']
      ];
    }
    //
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
    //
    $form['tag_html'] = array(
      '#type' => 'details',
      '#title' => 'Html tags',
      '#open' => false
    );
    $this->buildTagHtmlRegion($form);
    $this->BuilderConfigForm->prepareBuildForms($this->configuration, $form);
    // dump($this->configuration);
  }
  
  function buildTagHtmlRegion(array &$form) {
    foreach ($this->regions as $region => $label) {
      $form['tag_html']['region_tag_' . $region] = [
        '#type' => 'textfield',
        '#title' => 'Tag html region : ' . $label['label'],
        '#default_value' => isset($this->configuration['region_tag_' . $region]) ? $this->configuration['region_tag_' . $region] : ''
      ];
    }
  }
  
  /**
   *
   * @param array $fids
   * @return boolean
   */
  function saveFilePermanent(array $fids) {
    foreach ($fids as $fid) {
      if ($file = \Drupal\file\Entity\File::load($fid)) {
        
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
    $configuration['save_by_domain'] = $form_state->getValue('save_by_domain');
    $configuration['load_libray'] = $form_state->getValue('load_libray');
    $configuration['load_clean_value'] = $form_state->getValue('load_clean_value');
    // Save css.
    $configuration['css'] = $form_state->getValue([
      'css_class',
      'css'
    ]);
    if (!empty($this->configuration['derivate']['options']))
      $configuration['derivate']['value'] = $form_state->getValue([
        'css_class',
        'derivate'
      ]);
    foreach ($this->regions as $region => $label) {
      $configuration['region_css_' . $region] = $form_state->getValue([
        'css_class',
        'region_css_' . $region
      ]);
    }
    // Save html tag.
    foreach ($this->regions as $region => $label) {
      $configuration['region_tag_' . $region] = $form_state->getValue([
        'tag_html',
        'region_tag_' . $region
      ]);
    }
    
    //
    foreach ($configuration as $key => $field) {
      if (!empty($field['builder-form']) && !empty($field['fields'])) {
        $configuration[$key]['info'] = array_merge($field['info'], $form_state->getValue($key)['info']);
        $configuration[$key]['fields'] = array_merge($field['fields'], $form_state->getValue($key)['fields']);
        // if (empty($configuration[$key]['fields'])) {
        // // dump($key, $form_state->getValues());
        // // die();
        // }
        // .
        $this->saveImage($configuration[$key]['fields']);
      }
    }
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
   * Enregistre une image comme permanent;
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