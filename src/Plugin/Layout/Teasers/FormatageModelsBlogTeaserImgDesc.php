<?php
namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_teaser_img_desc",
 *   label = @Translation(" Article teaser _img_desc "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-teaser-img-desc",
 *   library = "formatage_models/formatage-models-teaser-img-desc",
 *   default_region = "desc",
 *   regions = {
 *     "bgimage" = {
 *       "label" = @Translation("Image"),
 *     },
 *     "desc" = {
 *       "label" = @Translation("Description"),
 *     },
 *     "title" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "categorie" = {
 *       "label" = @Translation("Categorie")
 *     },
 *     "time_read" = {
 *       "label" = @Translation("Temps de lecture")
 *     },
 *   }
 * )
 */
class FormatageModelsBlogTeaserImgDesc extends FormatageModels {
}