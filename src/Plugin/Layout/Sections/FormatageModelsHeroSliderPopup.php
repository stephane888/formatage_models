<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

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
class FormatageModelsHeroSliderPopup extends FormatageModels {

}
