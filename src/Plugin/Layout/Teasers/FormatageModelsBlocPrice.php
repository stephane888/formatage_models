<?php

namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_bloc_price",
 *   label = @Translation(" Bloc price (rc-web) "),
 *   category = @Translation(" Formatage Models : Teaser "),
 *   path = "layouts/teasers",
 *   template = "formatage-bloc-price",
 *   library = "formatage_models/formatage-bloc-price",
 *   default_region = "titre",
 *   regions = {
 *     "titre" = {
 *       "label" = @Translation(" Titre ")
 *     },
 *     "listes" = {
 *       "label" = @Translation(" Listes ")
 *     },
 *     "lien" = {
 *       "label" = @Translation(" Lien ")
 *     },
 *     "price_info" = {
 *       "label" = @Translation(" price_info ")
 *     },
 *     "periode" = {
 *       "label" = @Translation(" periode ")
 *     }
 *   }
 * )
 */
class FormatageModelsBlocPrice extends FormatageModelsTeasers {

  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/teasers/formatage-bloc-price.png");
  }

  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels:build()
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
   * @see \Drupal\formatage_models\Plugin\Layout\Teasers\FormatageModelsTeasers::defaultConfiguration()
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'tmc' => [
        'builder-form' => true,
        'info' => [
          'title' => 'configuration du contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'titre' => [
            'text' => [
              'label' => 'titre',
              'value' => 'BOUTIQUE PROFESSIONNELLE SHOPIFY'
            ]
          ],
          'listes' => [
            'text_html' => [
              'label' => 'titre',
              'value' => []
            ]
          ],
          'lien' => [
            'url' => [
              'label' => 'Url',
              'value' => [
                'text' => ' Nous contacter ',
                'class' => 'btn btn-blue'
              ]
            ]
          ]
        ]
      ]
    ];
  }

}

