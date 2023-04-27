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
      // 'load_libray' => false, on desactive
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
    // $form["load_libray"] = [
    // '#type' => 'checkbox',
    // '#title' => "Charge les styles",
    // '#default_value' => $this->configuration['load_libray']
    // ];
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
    // formulaire pour les animations aos
    $form['aos_attributes'] = array(
      '#type' => 'details',
      '#title' => 'animations AOS',
      '#description' => 'permet de définir les animations aos pour chaque region',
      '#open' => false
    );
    $this->buildAosAttributesRegion($form);
    // permet de gerer le cover::before.
    $form['cover_section'] = array(
      '#type' => 'details',
      '#title' => 'Gerer le cover',
      '#open' => false
    );
    $this->buildFieldsCovers($form);
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
  
  /**
   *
   * @param array $form
   */
  function buildFieldsCovers(array &$form) {
    $form['cover_section']['active'] = [
      '#type' => 'checkbox',
      '#title' => 'Activé le cover ? ',
      '#default_value' => isset($this->configuration['cover_section']['active']) ? $this->configuration['cover_section']['active'] : '',
      '#return_value' => 'cover-bg-theme'
    ];
    $form['cover_section']['model'] = [
      '#type' => 'select',
      '#title' => 'Cover color',
      '#default_value' => isset($this->configuration['cover_section']['model']) ? $this->configuration['cover_section']['model'] : '',
      '#options' => [
        '' => 'theme background',
        'cover-light' => 'Light',
        'cover-dark' => 'Dark',
        'cover-primary' => 'Primary'
      ]
    ];
    $form['cover_section']['opacity'] = [
      '#type' => 'select',
      '#title' => 'Opacity value',
      '#default_value' => isset($this->configuration['cover_section']['opacity']) ? $this->configuration['cover_section']['opacity'] : '',
      '#options' => [
        '' => 'Aucun',
        'opacity-before-092' => '0.92',
        'opacity-before-088' => '0.88',
        'opacity-before-07' => '0.70',
        'opacity-before-055' => '0.55',
        'opacity-before-03' => '0.30',
        'opacity-before-015' => '0.15'
      ]
    ];
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
   * Construit le formulaire pour les animations AOS.
   *
   * @param array $form
   */
  function buildAosAttributesRegion(array &$form) {
    // dump($this->configuration['aos_attributes']);
    foreach ($this->regions as $region => $label) {
      
      $form['aos_attributes'][$region] = [
        '#type' => 'details',
        '#title' => $label['label'],
        '#open' => false
      ];
      $form['aos_attributes'][$region]['data_aos'] = [
        '#title' => 'type d\'animations',
        '#type' => 'select',
        '#default_value' => isset($this->configuration['aos_attributes'][$region]['data_aos']) ? $this->configuration['aos_attributes'][$region]['data_aos'] : '',
        '#description' => "Select the data-aos type",
        '#options' => [
          '' => 'Aucun',
          'fade' => 'fade',
          'fade-up' => 'fade-up',
          'fade-down' => 'fade-down',
          'fade-left' => 'fade-left',
          'fade-right' => 'fade-right',
          'fade-up-right' => 'fade-up-right',
          'fade-up-left' => 'fade-up-left',
          'fade-down-right' => 'fade-down-right',
          'fade-down-left' => 'fade-down-left',
          'flip-up' => 'flip-up',
          'flip-down' => 'flip-down',
          'flip-left' => 'flip-left',
          'flip-right' => 'flip-right',
          'slide-up' => 'slide-up',
          'slide-down' => 'slide-down',
          'slide-left' => 'slide-left',
          'slide-right' => 'slide-right',
          'zoom-in' => 'zoom-in',
          'zoom-in-up' => 'zoom-in-up',
          'zoom-in-down' => 'zoom-in-down',
          'zoom-in-left' => 'zoom-in-left',
          'zoom-in-right' => 'zoom-in-right',
          'zoom-out' => 'zoom-out',
          'zoom-out-up' => 'zoom-out-up',
          'zoom-out-down' => 'zoom-out-down',
          'zoom-out-left' => 'zoom-out-left',
          'zoom-out-right' => 'zoom-out-right'
        ]
      ];
      $form['aos_attributes'][$region]['data_aos_anchor_placement'] = [
        '#title' => 'data-aos-anchor-placement',
        '#type' => 'select',
        '#description' => 'select the anchor placement',
        '#default_value' => isset($this->configuration['aos_attributes'][$region]['data_aos_anchor_placement']) ? $this->configuration['aos_attributes'][$region]['data_aos_anchor_placement'] : '',
        '#options' => [
          '' => 'Aucun',
          'top-bottom' => 'top-bottom',
          'top-center' => 'top-center',
          'top-top' => 'top-top',
          'center-bottom' => 'center-bottom',
          'center-center' => 'center-center',
          'center-top' => 'center-top',
          'bottom-bottom' => 'bottom-bottom',
          'bottom-center' => 'bottom-center',
          'bottom-top' => 'bottom-top'
        ]
      ];
      $form['aos_attributes'][$region]['data_aos_duration'] = [
        '#title' => 'data-aos-duration',
        '#type' => 'number',
        '#min' => 100,
        '#max' => 3000,
        '#step' => 50,
        '#description' => 'define the animation duration from 100 to 3000, with step 50',
        '#default_value' => isset($this->configuration['aos_attributes'][$region]['data_aos_duration']) ? $this->configuration['aos_attributes'][$region]['data_aos_duration'] : ''
        // '#default_value' => '1000',
      ];
      $form['aos_attributes'][$region]['data_aos_ease'] = [
        '#title' => 'data-aos-ease',
        '#type' => 'select',
        '#description' => 'select the ease function type',
        '#default_value' => isset($this->configuration['aos_attributes'][$region]['data_aos_ease']) ? $this->configuration['aos_attributes'][$region]['data_aos_ease'] : '',
        '#options' => [
          '' => 'Aucun',
          'linear' => 'linear',
          'ease' => 'ease',
          'ease-in' => 'ease-in',
          'ease-out' => 'ease-out',
          'ease-in-out' => 'ease-in-out',
          'ease-in-back' => 'ease-in-back',
          'ease-out-back' => 'ease-out-back',
          'ease-in-out-back' => 'ease-in-out-back',
          'ease-in-sine' => 'ease-in-sine',
          'ease-out-sine' => 'ease-out-sine',
          'ease-in-out-sine' => 'ease-in-out-sine',
          'ease-in-quad' => 'ease-in-quad',
          'ease-out-quad' => 'ease-out-quad',
          'ease-in-out-quad' => 'ease-in-out-quad',
          'ease-in-cubic' => 'ease-in-cubic',
          'ease-out-cubic' => 'ease-out-cubic',
          'ease-in-out-cubic' => 'ease-in-out-cubic',
          'ease-in-quart' => 'ease-in-quart',
          'ease-out-quart' => 'ease-out-quart',
          'ease-in-out-quart' => 'ease-in-out-quart'
        ]
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
    // $configuration['load_libray'] = $form_state->getValue('load_libray');
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
    // save the animation configuration :
    foreach ($this->regions as $region) {
      $configuration['aos_attributes'] = $form_state->getValue([
        'aos_attributes'
      ]);
    }
    // Save html tag.
    foreach ($this->regions as $region => $label) {
      $configuration['region_tag_' . $region] = $form_state->getValue([
        'tag_html',
        'region_tag_' . $region
      ]);
    }
    // save cover_section
    $configuration['cover_section'] = $form_state->getValue([
      'cover_section'
    ]);
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