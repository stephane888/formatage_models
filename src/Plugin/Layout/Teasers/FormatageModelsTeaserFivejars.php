<?php

namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_teaser_fivejars",
 *   label = @Translation(" teaser fivejars "),
 *   category = @Translation("Formatage Models : Teaser"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-teaser-fivejars",
 *   library = "formatage_models/formatage-models-teaser-fivejars",
 *   default_region = "titre",
 *   regions = {
 *     "icone" = {
 *       "label" = @Translation("icone/svg"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre"),
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     },
 *   }
 * )
 */
class FormatageModelsTeaserFivejars extends FormatageModelsTeasers {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/teasers/formatage-models-teaser-fivejars.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\Teasers\FormatageModelsTeasers::defaultConfiguration()
   */
  public function defaultConfiguration() {
    return [
      'css' => '',
      'derivate' => [
        'value' => 'clean',
        'options' => [
          'clean' => 'Clair',
          'dark' => 'Sombre'
        ]
      ]
    ] + parent::defaultConfiguration();
  }
  
}