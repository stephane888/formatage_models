<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_title_description",
 *   label = @Translation(" rc-web : title description"),
 *   category = @Translation("Formatage Models [entete]"),
 *   path = "layouts/sections",
 *   template = "formatage-models-title-description",
 *   library = "formatage_models/formatage-models-title-description",
 *   default_region = "description",
 *   regions = {
 *     "sub_title" = {
 *       "label" = @Translation("sub title "),
 *     },
 *     "title" = {
 *       "label" = @Translation("title")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     },
 *   }
 * )
 */
class FormatageModelsTitleDescription extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-title-description.png");
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
    // dump($build);
    return $build;
  }
  
  function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'load_libray' => true,
      'infos' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Texte information',
          'loader' => 'static'
        ],
        'fields' => [
          'title' => [
            'text' => [
              'value' => 'Qui somme nous',
              'label' => ' Titre '
            ]
          ],
          'sub_title' => [
            'text_html' => [
              'value' => " Nous sommes une equipe d'experts et de passionnés ",
              'label' => ' sous titre '
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => 'Description',
              'value' => "
                    Wb-Universe est une agence de marketing digital. Experts en référencement naturel et dans le domaine
                    du e-commerce, nous élaborons des stratégies puissantes pour augmenter vos ventes.
                "
            ]
          ]
        ]
      ]
    ];
  }
  
}
