<?php
namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_text_hover",
 *   label = @Translation(" card Text Hover "),
 *   category = @Translation("Formatage Models : Teaser"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-text-hover",
 *   library = "formatage_models/formatage-models-text-hover",
 *   default_region = "titre",
 *   regions = {
 *     "image" = {
 *       "label" = @Translation("Image"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre"),
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     }
 *   }
 * )
 */
class FormatageModelsTextHover extends FormatageModelsTeasers
{

    /**
     *
     * {@inheritdoc}
     * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
     */
    public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager)
    {
        // TODO Auto-generated method stub
        parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
        $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/teasers/formatage-models-text-hover.png");
    }

    function defaultConfiguration()
    {
        return parent::defaultConfiguration() + [
            'load_libray' => true,
            "css" => 'container',
            "derivate" => [
                'value' => 'basic',
                'options' => [
                    'basic' => 'Basic'
                ]
            ]
        ];
    }
}