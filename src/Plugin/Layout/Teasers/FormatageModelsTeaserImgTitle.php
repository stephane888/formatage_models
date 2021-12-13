<?php
namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_teaser_img_title",
 *   label = @Translation(" Card img & Title "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-teaser-img-title",
 *   library = "formatage_models/formatage-models-teaser-img-title",
 *   default_region = "title",
 *   regions = {
 *     "bgimage" = {
 *       "label" = @Translation("bgimage"),
 *     },
 *     "title" = {
 *       "label" = @Translation("Title"),
 *     },
 *     "url" = {
 *       "label" = @Translation("Url sur l'affichage")
 *     },
 *   }
 * )
 */
class FormatageModelsTeaserImgTitle extends FormatageModels {
}