<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_sections_ac",
 *   label = @Translation(" Sections AC. "),
 *   category = @Translation(" Formatage Models "),
 *   path = "layouts/sections",
 *   template = "formatage-models-hero-ac",
 *   library = "formatage_models/formatage-models-hero-ac",
 *   default_region = " Title ",
 *   regions = {
 *     "subtitle" = {
 *       "label" = @Translation(" Subtitle "),
 *     },
 *     "title" = {
 *       "label" = @Translation(" Title "),
 *     },
 *     "description" = {
 *       "label" = @Translation(" Description "),
 *     },
 *     "button" = {
 *       "label" = @Translation(" Button "),
 *     },
 *     "image" = {
 *       "label" = @Translation(" Image "),
 *     }
 *   }
 * )
 */
class FormatageModelsServicesAC extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-hero-ac.png");
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
  
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'region_css_entete' => "col-md-6 ml-auto",
      'region_css_entete2' => "col-md-6",
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => ' Contenu 1 ',
          'loader' => 'static'
        ],
        'fields' => [
          'subtitle' => [
            'text' => [
              'label' => 'Sous titre',
              'value' => "L'agence Web qui vous offre une solution All-In-One !"
            ]
          ],
          'title' => [
            'text' => [
              'label' => " Titre ",
              'value' => " Habeuk Digital "
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => " Description ",
              'value' => " Nous croyons dans le pouvoir de l’intelligence et de la technologie pour optimiser vos performances "
            ]
          ],
          'button' => [
            'url' => [
              'label' => " Button ",
              'value' => [
                'text' => 'Contactez-nous',
                'class' => '',
                'link' => '#'
              ]
            ]
          ],
          'image' => [
            'img_bg' => [
              'label' => " Image ",
              'fids' => []
            ]
          ]
        ]
      ]
    ];
  }
  
}