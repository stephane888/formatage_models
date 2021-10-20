<?php

namespace Drupal\formatage_models\Plugin\Layout;

use Drupal\formatage_models\Plugin\Layout\Teasers\FormatageModelsTeasers;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_teaser",
 *   label = @Translation(" blog teaser "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-teaser",
 *   library = "formatage_models/formatage-models-teaser",
 *   default_region = "titre",
 *   regions = {
 *     "bgimage" = {
 *       "label" = @Translation("Bg Image"),
 *     },
 *     "date" = {
 *       "label" = @Translation("Date"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "url" = {
 *       "label" = @Translation("Url sur l'affichage")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     }
 *   }
 * )
 */
class FormatageModelsBlogTeaser extends FormatageModelsTeasers {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id,
      $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition,
        $styles_group_manager);
    $this->pluginDefinition->set('icon',
        drupal_get_path('module', 'formatage_models') .
        "/icones/teasers/formatage-models-teaser.png");
  }
  
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + ['css' => ''
    ];
  }
  
}