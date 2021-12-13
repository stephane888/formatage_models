<?php
namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_blog_call_toaction_puce",
 *   label = @Translation(" blog call to action Puce"),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-blog-call-toaction",
 *   library = "formatage_models/formatage-models-blog-call-toaction",
 *   default_region = "body",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("Title"),
 *     },
 *     "body" = {
 *       "label" = @Translation("Body"),
 *     },
 *     "link" = {
 *       "label" = @Translation("Link")
 *     }
 *   }
 * )
 */
class FormatageModelsBlogCallToactionPuce extends FormatageModels {
}