<?php
namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_teaser_m1",
 *   label = @Translation(" Card bootstrap M1 "),
 *   category = @Translation("Formatage Models : Teaser"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-teaser-m1",
 *   library = "formatage_models/formatage-models-teaser-m1",
 *   default_region = "titre",
 *   regions = {
 *     "image" = {
 *       "label" = @Translation("Image"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre"),
 *     },
 *     "icone" = {
 *       "label" = @Translation("Icone")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     },
 *     "url" = {
 *       "label" = @Translation("Lien")
 *     },
 *   }
 * )
 */
class FormatageModelsTeaserM1 extends FormatageModels
{

    /**
     *
     * {@inheritdoc}
     * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
     */
    public function __construct(array $configuration, $plugin_id, $plugin_definition)
    {
        // TODO Auto-generated method stub
        parent::__construct($configuration, $plugin_id, $plugin_definition);
        $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/teasers/formatage-models-teaser-m1.png");
    }
}