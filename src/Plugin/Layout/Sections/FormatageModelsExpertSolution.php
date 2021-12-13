<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_expert_solution",
 *   label = @Translation(" Expert Solution "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-expert-solution",
 *   library = "formatage_models/formatage-models-expert-solution",
 *   default_region = "prix",
 *   regions = {
 *     "profile_image" = {
 *       "label" = @Translation("Profil image"),
 *     },
 *     "title" = {
 *       "label" = @Translation("title")
 *     },
 *     "profile_name" = {
 *       "label" = @Translation("Profile name")
 *     },
 *     "profile_function" = {
 *       "label" = @Translation("Profile fonction")
 *     },
 *     "button_action" = {
 *       "label" = @Translation("Button action")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     },
 *     "titre_avantage" = {
 *       "label" = @Translation("titre_avantage")
 *     },
 *     "avantages" = {
 *       "label" = @Translation("avantages")
 *     },
 *   }
 * )
 */
class FormatageModelsExpertSolution extends FormatageModels {
}