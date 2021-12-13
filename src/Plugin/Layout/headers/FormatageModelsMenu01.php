<?php

namespace Drupal\formatage_models\Plugin\Layout\headers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_menu01",
 *   label = @Translation(" Header menu 01 "),
 *   category = @Translation("Formatage Models [entete]"),
 *   path = "layouts/headers",
 *   template = "formatage-models-menu01",
 *   library = "formatage_models/formatage-models-menu01",
 *   default_region = "description",
 *   regions = {
 *     "logo" = {
 *       "label" = @Translation("Logo"),
 *     },
 *     "menu" = {
 *       "label" = @Translation("Menu")
 *     },
 *     "recherche" = {
 *       "label" = @Translation("Recherche")
 *     },
 *   }
 * )
 */
class FormatageModelsMenu01 extends FormatageModels {

}
