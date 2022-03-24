<?php

namespace Drupal\formatage_models\Plugin\Layout\Pages;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_single_blog",
 *   label = @Translation(" Single content (Blog) "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/pages",
 *   template = "formatage-models-single-blog",
 *   library = "formatage_models/formatage-models-single-blog",
 *   default_region = "body",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("Title"),
 *     },
 *     "tags" = {
 *       "label" = @Translation("Tags"),
 *     },
 *     "icones_info" = {
 *       "label" = @Translation("Icones info"),
 *     },
 *     "introduction" = {
 *       "label" = @Translation("introduction"),
 *     },
 *     "images" = {
 *       "label" = @Translation("images"),
 *     },
 *     "body" = {
 *       "label" = @Translation("body"),
 *     },
 *     "owls" = {
 *       "label" = @Translation("owls"),
 *     },
 *     "realisation" = {
 *       "label" = @Translation("realisation"),
 *     },
 *     "slick_carousel_img" = {
 *       "label" = @Translation("slick_carousel_img"),
 *     },
 *   }
 * )
 */
class FormatageModelsSingleBlog extends FormatageModelsPages {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-single-blog.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    // TODO Auto-generated method stub
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }
  
}
