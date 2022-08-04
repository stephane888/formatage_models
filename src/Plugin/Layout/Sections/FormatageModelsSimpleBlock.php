<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\Core\Form\FormStateInterface;
use Drupal\user\Entity\Role;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_simple_block",
 *   label = @Translation(" One column custom "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-simple-block",
 *   default_region = "main",
 *   regions = {
 *     "main" = {
 *       "label" = @Translation("Main"),
 *     },
 *     "image_bg" = {
 *       "label" = @Translation("Image bg")
 *     },
 *   }
 * )
 */
class FormatageModelsSimpleBlock extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-simple-block.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    // TODO Auto-generated method stub
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    
    return $build;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    
    $roles = [];
    foreach (Role::loadMultiple() as $role) {
      $roles[$role->id()] = $role->label();
    }
    $form['layoutrestrictions'] = [
      
      '#type' => 'details',
      '#title' => 'layout restrictions ...',
      '#open' => false,
      '#tree' => true
    ];
    $form['layoutrestrictions']['use_roles'] = [
      '#type' => 'checkbox',
      '#title' => 'use roles',
      '#default_value' => $this->configuration['layoutrestrictions']['use_roles']
    ];
    $form['layoutrestrictions']['roles'] = [
      '#type' => 'checkboxes',
      '#title' => 'selectionner les roles',
      '#options' => $roles,
      '#default_value' => $this->configuration['layoutrestrictions']['roles']
    ];
    
    return $form;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $this->configuration['layoutrestrictions'] = $form_state->getValue('layoutrestrictions');
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection::defaultConfiguration()
   */
  public function defaultConfiguration() {
    return [
      'css' => '',
      'region_tag_main' => 'div',
      'layoutrestrictions' => [
        'roles' => []
      ],
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => ' Contenu ',
          'loader' => 'static'
        ],
        'fields' => [
          'main' => [
            'text_html' => [
              'label' => 'Drescription',
              'value' => ""
            ]
          ],
          'image_bg' => [
            'img_bg' => [
              'label' => 'image',
              'fids' => []
            ]
          ]
        ]
      ]
    ] + parent::defaultConfiguration();
  }
  
}