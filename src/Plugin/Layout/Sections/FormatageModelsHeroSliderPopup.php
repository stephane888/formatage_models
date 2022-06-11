<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_hero_slider_popup",
 *   label = @Translation(" hero_slider_popup "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-hero-slider-popup",
 *   library = "formatage_models/formatage-models-hero-slider-popup",
 *   default_region = "images",
 *   regions = {
 *     "images" = {
 *       "label" = @Translation("images"),
 *     },
 *     "title" = {
 *       "label" = @Translation("title"),
 *     }
 *   }
 * )
 */
class FormatageModelsHeroSliderPopup extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-hero-slider-popup.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    // TODO Auto-generated method stub.
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }
  
}
