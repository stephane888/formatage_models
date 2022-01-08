<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_expert_solution",
 *   label = @Translation(" Expert Solution "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-expert-solution",
 *   library = "formatage_models/formatage-models-expert-solution",
 *   default_region = "prix",
 *   regions = {
 *     "profile_image" = {
 *       "label" = @Translation("Profil image"),
 *     },
 *     "title" = {
 *       "label" = @Translation("title")
 *     },
 *     "profile_name" = {
 *       "label" = @Translation("Profile name")
 *     },
 *     "profile_function" = {
 *       "label" = @Translation("Profile fonction")
 *     },
 *     "button_action" = {
 *       "label" = @Translation("Button action")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     },
 *     "titre_avantage" = {
 *       "label" = @Translation("titre_avantage")
 *     },
 *     "avantages" = {
 *       "label" = @Translation("avantages")
 *     },
 *   }
 * )
 */
class FormatageModelsExpertSolution extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-expert-solution.png");
  }
  
}