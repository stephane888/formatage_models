<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_lmsg_call_toaction",
 *   label = @Translation(" Call to action action home "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-lmsg-call-toaction",
 *   default_region = "titre",
 *   regions = {
 *     "titre" = {
 *       "label" = @Translation("titre"),
 *     },
 *     "description" = {
 *       "label" = @Translation("description"),
 *     },
 *     "Link" = {
 *       "label" = @Translation("Lien"),
 *     },
 *   "link_text" = {
 *       "label" = @Translation("texte du lien"),
 *     },
 *   }
 * )
 */
class FormatageModelsLmsgCallToaction extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-lmsg-call-toaction.png");
  }
  
}
