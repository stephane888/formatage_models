<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\Core\Form\FormStateInterface;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_bg_header",
 *   label = @Translation(" Bg img header "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-bg-header",
 *   library = "formatage_models/formatage-models-bg-header",
 *   default_region = "title",
 *   regions = {
 *     "bgimage" = {
 *       "label" = @Translation("Bg Image"),
 *     },
 *     "title" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "sub_title" = {
 *       "label" = @Translation("Sous titre")
 *     },
 *   }
 * )
 */
class FormatageModelsBgHeader extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-bg-header.png");
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'region_tag_title' => 'h2',
      'region_tag_sub_title' => 'h4',
      'region_css_title' => 'col-md-12',
      'region_css_sub_title' => 'col-md-12'
    ] + parent::defaultConfiguration();
  }
  
}