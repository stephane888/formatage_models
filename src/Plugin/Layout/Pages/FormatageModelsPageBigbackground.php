<?php
namespace Drupal\formatage_models\Plugin\Layout\Pages;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_page_bigbackground",
 *   label = @Translation(" Big background + title+body + content left "),
 *   category = @Translation("Formatage Models : page"),
 *   path = "layouts/pages",
 *   template = "formatage-models-page-bigbackground",
 *   library = "formatage_models/formatage-models-page-bigbackground",
 *   default_region = "title",
 *   regions = {
 *     "bg_image" = {
 *       "label" = @Translation("Bg Image"),
 *     },
 *     "title" = {
 *       "label" = @Translation("Title"),
 *     },
 *     "entete" = {
 *       "label" = @Translation("Entete"),
 *     },
 *     "body" = {
 *       "label" = @Translation("body"),
 *     },
 *     "side_bar_left" = {
 *       "label" = @Translation("Side bar left"),
 *     }
 *   }
 * )
 */
class FormatageModelsPageBigbackground extends FormatageModelsPages
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
        $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-page-bigbackground.png");
    }

    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return [
            'load_libray' => true,
            'css' => '',
            'region_css_body' => 'col-md-9',
            'region_css_side_bar_left' => 'col-md-3',
            'sf' => [
                'builder-form' => true,
                'info' => [
                    'title' => 'Contenu',
                    'loader' => 'static'
                ],
                'fields' => [
                    'bg_image' => [
                        'img_bg' => [
                            'label' => 'image BG',
                            'fid' => []
                        ]
                    ],
                    'title' => [
                        'text' => [
                            'label' => 'Titre',
                            "value" => ""
                        ]
                    ],
                    'entete' => [
                        'text_html' => [
                            'label' => 'Entete',
                            "value" => []
                        ]
                    ],
                    'body' => [
                        'text_html' => [
                            'label' => 'Body',
                            "value" => []
                        ]
                    ],
                    'side_bar_left' => [
                        'text_html' => [
                            'label' => 'Side bar left',
                            "value" => []
                        ]
                    ]
                ]
            ]
        ];
    }
}
