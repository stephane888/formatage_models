<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

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
 *     }
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
   * @see \Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection::defaultConfiguration()
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
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
              'value' => " votre conteni ici "
            ]
          ]
        ]
      ]
    ];
  }
  
}