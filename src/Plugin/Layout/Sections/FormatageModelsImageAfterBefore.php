<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_image_after_before",
 *   label = @Translation(" Image After Before "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-image-after-before",
 *   library = "formatage_models/formatage-models-image-after-before",
 *   default_region = "description",
 *   regions = {
 *   	 "button1" = {
 *       "label" = @Translation(" button1 ")
 *     },
 *     "button2" = {
 *       "label" = @Translation(" button2 ")
 *     },
 *     "image1" = {
 *       "label" = @Translation(" image1 ")
 *     },
 *     "image2" = {
 *       "label" = @Translation(" image2 ")
 *     },
 *     "image" = {
 *       "label" = @Translation("Image gnerale"),
 *     },
 *   }
 * )
 */
class FormatageModelsImageAfterBefore extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-image-after-before.png");
  }
  
}