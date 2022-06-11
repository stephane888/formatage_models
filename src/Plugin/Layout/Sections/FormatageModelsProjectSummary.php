<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_project_summary",
 *   label = @Translation(" Project Summary "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-project-summary",
 *   library = "formatage_models/formatage-models-project-summary",
 *   default_region = "prix",
 *   regions = {
 *     "prix" = {
 *       "label" = @Translation("Prix"),
 *     },
 *     "duree" = {
 *       "label" = @Translation("Duree")
 *     },
 *     "surface" = {
 *       "label" = @Translation("Surface")
 *     },
 *   }
 * )
 */
class FormatageModelsProjectSummary extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-project-summary.png");
  }
  
}