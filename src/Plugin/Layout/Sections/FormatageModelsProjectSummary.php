<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_project_summary",
 *   label = @Translation(" Project Summary "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-project-summary",
 *   library = "formatage_models/formatage-models-project-summary",
 *   default_region = "prix",
 *   regions = {
 *     "prix" = {
 *       "label" = @Translation("Prix"),
 *     },
 *     "duree" = {
 *       "label" = @Translation("Duree")
 *     },
 *     "surface" = {
 *       "label" = @Translation("Surface")
 *     },
 *   }
 * )
 */
class FormatageModelsProjectSummary extends FormatageModels {
}