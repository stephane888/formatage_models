<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_comments",
 *   label = @Translation(" Comment left "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-comments",
 *   library = "formatage_models/formatage-models-comments",
 *   default_region = "title",
 *   regions = {
 *     "entete" = {
 *       "label" = @Translation("entete"),
 *     },
 *     "title" = {
 *       "label" = @Translation("title"),
 *     },
 *     "description" = {
 *       "label" = @Translation("Description"),
 *     },
 *     "call_action" = {
 *       "label" = @Translation("Call to action"),
 *     }, *
 *     "lyt_footer" = {
 *       "label" = @Translation("footer"),
 *     }
 *   }
 * )
 */
class FormatageModelsComments extends FormatageModelsSection
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
        $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-comments.png");
    }

    public function defaultConfiguration()
    {
        return parent::defaultConfiguration() + [
            'css' => '',
            'region_css_entete' => "col-md-6 ml-auto",
            'sf' => [
                'builder-form' => true,
                'info' => [
                    'title' => 'Contenu',
                    'loader' => 'static'
                ],
                'fields' => [
                    'entete' => [
                        'text_html' => [
                            'label' => 'Entete',
                            'value' => "Avis clients",
                            "format" => "basic_html"
                        ]
                    ],
                    'title' => [
                        'text_html' => [
                            'label' => 'titre',
                            'value' => "Clients says",
                            "format" => "basic_html"
                        ]
                    ],
                    'description' => [
                        'text_html' => [
                            'label' => 'Description',
                            'value' => "",
                            "format" => "basic_html"
                        ]
                    ],
                    'call_action' => [
                        'text_html' => [
                            'label' => 'Call action',
                            'value' => '',
                            "format" => "basic_html"
                        ]
                    ],
                    'lyt_footer' => [
                        'text_html' => [
                            'label' => 'Footer',
                            'value' => ""
                        ]
                    ]
                ]
            ]
        ];
    }
}
