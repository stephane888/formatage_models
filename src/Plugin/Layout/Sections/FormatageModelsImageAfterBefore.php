<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

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
class FormatageModelsImageAfterBefore extends FormatageModels {
}