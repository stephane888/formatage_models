<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_article_header",
 *   label = @Translation(" article header "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-article-header",
 *   library = "formatage_models/formatage-models-article-header",
 *   default_region = "description",
 *   regions = {
 *     "description" = {
 *       "label" = @Translation("description"),
 *     },
 *     "title" = {
 *       "label" = @Translation("Titre")
 *     },
 *   }
 * )
 */
class FormatageModelsArticleHeader extends FormatageModels {
}