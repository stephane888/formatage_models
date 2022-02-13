<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\Core\Form\FormStateInterface;
use Stephane888\HtmlBootstrap\ThemeUtility;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_services_sliders",
 *   label = @Translation(" services_sliders "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-services-sliders",
 *   library = "formatage_models/formatage-models-services-sliders",
 *   default_region = "main",
 *   regions = {
 *     "main" = {
 *       "label" = @Translation("Main"),
 *     }
 *   }
 * )
 */
class FormatageModelsServicesSliders extends FormatageModelsSection {
  /**
   *
   * @var \Stephane888\HtmlBootstrap\ThemeUtility
   */
  protected $ThemeUtility;
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-expert-solution.png");
    $this->ThemeUtility = \Drupal::service('formatage_models.theme-utility');
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'titre' => '',
      'sub_title' => '',
      'bgimage' => []
    ];
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['titre'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Titre section'),
      '#default_value' => $this->configuration['titre']
    ];
    $form['sub_title'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Sous titre section'),
      '#default_value' => $this->configuration['sub_title']
    ];
    $form['bgimage'] = [
      '#type' => 'managed_file',
      '#title' => $this->t('Bg image'),
      '#default_value' => $this->configuration['bgimage']['fid'],
      '#upload_location' => 'public://layouts'
    ];
    
    return $form;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $fid = $form_state->getValue('bgimage');
    $this->configuration['titre'] = $form_state->getValue('titre');
    $this->configuration['sub_title'] = $form_state->getValue('sub_title');
    $this->configuration['bgimage'] = [
      'fid' => $form_state->getValue('bgimage'),
      'url' => (!empty($fid)) ? $this->ThemeUtility->getImageUrlByFid($fid[0]) : ''
    ];
    $this->Layouts->saveFilePermanent($form_state->getValue('bgimage'));
  }
  
}
