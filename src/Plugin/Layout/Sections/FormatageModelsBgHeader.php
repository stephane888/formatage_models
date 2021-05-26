<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_bg_header",
 *   label = @Translation(" Bg img header "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-bg-header",
 *   library = "formatage_models/formatage-models-bg-header",
 *   default_region = "title",
 *   regions = {
 *     "bgimage" = {
 *       "label" = @Translation("Bg Image"),
 *     },
 *     "title" = {
 *       "label" = @Translation("Titre")
 *     },
 *   }
 * )
 */
class FormatageModelsBgHeader extends FormatageModels {

}
