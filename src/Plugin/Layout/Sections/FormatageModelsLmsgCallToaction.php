<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_lmsg_call_toaction",
 *   label = @Translation(" Call to action action home "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-lmsg-call-toaction",
 *   default_region = "titre",
 *   regions = {
 *     "titre" = {
 *       "label" = @Translation("titre"),
 *     },
 *     "description" = {
 *       "label" = @Translation("description"),
 *     },
 *     "Link" = {
 *       "label" = @Translation("Lien"),
 *     },
 *   "link_text" = {
 *       "label" = @Translation("texte du lien"),
 *     },
 *   }
 * )
 */
class FormatageModelsLmsgCallToaction extends FormatageModels {
}
