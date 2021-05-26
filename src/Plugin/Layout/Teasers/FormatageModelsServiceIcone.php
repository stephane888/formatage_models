<?php

namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_service_icone",
 *   label = @Translation(" Service icone "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-service-icone",
 *   library = "formatage_models/formatage-models-service-icone",
 *   default_region = "description",
 *   regions = {
 *     "icone" = {
 *       "label" = @Translation("icone"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     },
 *   }
 * )
 */
class FormatageModelsServiceIcone extends FormatageModels {
  
}