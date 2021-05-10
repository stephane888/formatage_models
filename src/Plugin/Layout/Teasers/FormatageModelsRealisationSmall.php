<?php
namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_realisation_small",
 *   label = @Translation(" Realisation card small "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-realisation-small",
 *   library = "formatage_models/formatage-models-realisation-small",
 *   default_region = "titre",
 *   regions = {
 *     "bgimage" = {
 *       "label" = @Translation("Bg Image"),
 *     },
 *     "date" = {
 *       "label" = @Translation("Date"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "url" = {
 *       "label" = @Translation("Url sur l'affichage")
 *     },
 *     "text_url" = {
 *       "label" = @Translation("Texte de l'url")
 *     },
 *     "listes" = {
 *     	 "label" = @Translation("Listes")
 *     }
 *   }
 * )
 */
class FormatageModelsRealisationSmall extends FormatageModels {
}