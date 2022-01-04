<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_titre",
 *   label = @Translation(" Titre + sous titre section "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-titre",
 *   library = "formatage_models/formatage-models-titre",
 *   default_region = "main",
 *   regions = {
 *     "main" = {
 *       "label" = @Translation("Titre"),
 *     },
 *  	"sub_title" = {
 *       "label" = @Translation("sub_title"),
 *     }
 *   }
 * )
 */
class FormatageModelsTitre extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-titre.png");
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'load_libray' => true,
      'css' => 'text-center bg-dark text-white',
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'main' => [
            'text' => [
              'label' => 'Titre',
              'value' => "QUE VOULEZ VOUS FAIRE ?"
            ]
          ],
          'sub_title' => [
            'text_html' => [
              'label' => 'Sous titre',
              "value" => ""
            ]
          ]
        ]
      ]
    ];
  }
  
}