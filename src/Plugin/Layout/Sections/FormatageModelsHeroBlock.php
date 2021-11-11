<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager; 

 /* A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_hero_block",
 *   label = @Translation(" hero block "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-hero-block",
 *   library = "formatage_models/formatage-models-hero-block",
 *   default_region = "main",
 *   regions = {
 *     "main" = {
 *       "label" = @Translation("Main"),
 *     }
 *   }
 * )
 */
class FormatageModelsHeroBlock extends FormatageModelsSection {
  
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
  
}