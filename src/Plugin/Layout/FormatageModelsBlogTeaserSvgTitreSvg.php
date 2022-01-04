<?php

namespace Drupal\formatage_models\Plugin\Layout;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\Core\Form\FormStateInterface;
use Drupal\formatage_models\Plugin\Layout\Teasers\FormatageModelsTeasers;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_teaser_svg_titre_text",
 *   label = @Translation(" blog teaser _svg_titre_text "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-teaser-svg-titre-text",
 *   library = "formatage_models/formatage-models-teaser-svg-titre-text",
 *   default_region = "body",
 *   regions = {
 *     "svg" = {
 *       "label" = @Translation("Svg"),
 *     },
 *     "body" = {
 *       "label" = @Translation("body"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "url" = {
 *       "label" = @Translation("Url sur l'affichage")
 *     },
 *   }
 * )
 */
class FormatageModelsBlogTeaserSvgTitreSvg extends FormatageModelsTeasers {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/teasers/formatage-models-teaser-svg-titre-text.png");
  }
  
}