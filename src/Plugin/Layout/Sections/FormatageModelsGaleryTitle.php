<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_galery_title",
 *   label = @Translation(" Galery Title "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-galery-title",
 *   library = "formatage_models/formatage-models-galery-title",
 *   default_region = "description",
 *   regions = {
 *     "description" = {
 *       "label" = @Translation("Description"),
 *     },
 *     "title" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "localisation" = {
 *       "label" = @Translation(" Localisation ")
 *     },
 *   }
 * )
 */
class FormatageModelsGaleryTitle extends FormatageModels {
}