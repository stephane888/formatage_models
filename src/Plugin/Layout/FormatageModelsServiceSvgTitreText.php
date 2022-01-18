<?php

namespace Drupal\formatage_models\Plugin\Layout;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Form\FormStateInterface;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_svg_titre_text",
 *   label = @Translation(" Affichage des items "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-service-svg-titre-text",
 *   library = "formatage_models/formatage-models-service-svg-titre-text",
 *   default_region = "items",
 *   regions = {
 *     "items" = {
 *       "label" = @Translation(" Items "),
 *     },
 *     "titre" = {
 *       "label" = @Translation(" Titre "),
 *     },
 *     "link" = {
 *       "label" = @Translation(" Link "),
 *     },
 *   }
 * )
 */
class FormatageModelsServiceSvgTitreText extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-service-svg-titre-text.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection::build()
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
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'sf_content' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu 1',
          'loader' => 'static'
        ],
        'fields' => [
          'titre' => [
            'text_html' => [
              'label' => ' titre ',
              'value' => " Pourquoi choisir monSite.com pour vos travaux ?"
            ]
          ],
          'link' => [
            'url' => [
              'label' => 'Lien',
              'value' => [
                'text' => "j'ai un projet",
                "link" => '#',
                "class" => 'btn btn-radius'
              ]
            ]
          ]
        ]
      ]
    ];
  }
  
}