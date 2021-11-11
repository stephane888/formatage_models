<?php

namespace Drupal\formatage_models\Plugin\Layout\Pages;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

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
class FormatageModelsSingleBlog extends FormatageModels {

}
