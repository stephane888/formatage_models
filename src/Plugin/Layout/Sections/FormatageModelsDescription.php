<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_description",
 *   label = @Translation(" Description tree coloumn "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-description",
 *   library = "formatage_models/formatage-models-description",
 *   default_region = "left",
 *   regions = {
 *     "left" = {
 *       "label" = @Translation("Gauche"),
 *     },
 *     "center" = {
 *       "label" = @Translation("Centre"),
 *     },
 *     "right" = {
 *       "label" = @Translation("Droite"),
 *     },
 *   }
 * )
 */
class FormatageModelsDescription extends FormatageModelsSection
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
        $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage_models_description.png");
    }

    public function defaultConfiguration()
    {
        return parent::defaultConfiguration() + [
            'css' => 'row',
            'region_css_left' => "col-md-4",
            'region_css_center' => "col-md-4",
            'region_css_right' => "col-md-4",
            'sf' => [
                'builder-form' => true,
                'info' => [
                    'title' => 'Contenu',
                    'loader' => 'static'
                ],
                'fields' => [
                    'left' => [
                        'text_html' => [
                            'label' => 'Texte à gauche',
                            'value' => ""
                        ]
                    ],
                    'center' => [
                        'text_html' => [
                            'label' => 'Texte au centre',
                            'value' => ""
                        ]
                    ],
                    'right' => [
                        'text_html' => [
                            'label' => 'Texte à droite',
                            'value' => ""
                        ]
                    ]
                ]
            ]
        ];
    }
}