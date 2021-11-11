<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_textcotebg",
 *   label = @Translation(" Text Left|Right + Bg "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-textcotebg",
 *   library = "formatage_models/formatage-models-textcotebg",
 *   default_region = "title",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("title"),
 *     },
 *     "description" = {
 *       "label" = @Translation("Description"),
 *     },
 *     "call_action" = {
 *       "label" = @Translation("Call to action"),
 *     },
 *     "entete" = {
 *       "label" = @Translation("entete"),
 *     },
 *     "lyt_footer" = {
 *       "label" = @Translation("footer"),
 *     },
 *     "image" = {
 *       "label" = @Translation(" Image "),
 *     },
 *     "title1" = {
 *       "label" = @Translation("title 1"),
 *     },
 *     "description2" = {
 *       "label" = @Translation("Description 2"),
 *     },
 *     "call_action2" = {
 *       "label" = @Translation("Call to action 2"),
 *     },
 *     "entete2" = {
 *       "label" = @Translation("entete 2"),
 *     },
 *     "lyt_footer2" = {
 *       "label" = @Translation("footer2"),
 *     },
 *     "image2" = {
 *       "label" = @Translation(" Image 2 "),
 *     },
 *   }
 * )
 */
class FormatageModelsTextCoteBg extends FormatageModelsSection
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
        $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-textcotebg.png");
    }

    public function defaultConfiguration()
    {
        return parent::defaultConfiguration() + [
            'css' => '',
            'region_css_entete' => "col-md-6 ml-auto",
            'region_css_entete2' => "col-md-6",
            'sf' => [
                'builder-form' => true,
                'info' => [
                    'title' => 'Contenu 1',
                    'loader' => 'static'
                ],
                'fields' => [
                    'title' => [
                        'text_html' => [
                            'label' => 'titre',
                            'value' => "Fort de plus<br>de 20 ans d'expérience"
                        ]
                    ],
                    'description' => [
                        'text_html' => [
                            'label' => 'Description',
                            'value' => "WB-U intervient aussi bien dans l’industrie : Industrie Pétrolière, Chimique, Industrie agro, Industries métallurgique et aussi de la prestation de services sur les projets de constructions."
                        ]
                    ],
                    'call_action' => [
                        'text_html' => [
                            'label' => 'Call action',
                            'value' => '<div class="row">
                                        	<div class="d-flex col-md-6">
                                        		<div class="pr-3">
                                        			<i class="icon-picons-umbrella"></i>
                                        		</div>
                                        		<div class="icon-box-cell">
                                        			<label class="counter text-l" data-speed="5000" data-to="25" data-trigger="null">25</label>
                                        			<p class="text-s">Années d\'expérience</p>
                                        		</div>
                                        	</div>
                                        	<div class="d-flex col-md-6">
                                        		<div class="pr-3">
                                        			<i class="icon-picons-user"></i>
                                        		</div>
                                        		<div class="icon-box-cell">
                                        			<label class="counter text-l" data-speed="5000" data-to="25" data-trigger="null">89</label>
                                        			<p class="text-s">Collaborateurs</p>
                                        		</div>
                                        	</div>
                                        </div>'
                        ]
                    ],
                    'entete' => [
                        'text_html' => [
                            'label' => 'Entete',
                            'value' => ""
                        ]
                    ],
                    'lyt_footer' => [
                        'text_html' => [
                            'label' => 'Footer',
                            'value' => ""
                        ]
                    ],
                    'image' => [
                        'img_bg' => [
                            'label' => 'Image',
                            'fids' => []
                        ]
                    ]
                ]
            ],
            'sf2' => [
                'builder-form' => true,
                'info' => [
                    'title' => 'Contenu 2',
                    'loader' => 'static'
                ],
                'fields' => [
                    'title2' => [
                        'text_html' => [
                            'label' => 'titre',
                            'value' => ""
                        ]
                    ],
                    'description2' => [
                        'text_html' => [
                            'label' => 'Description',
                            'value' => ""
                        ]
                    ],
                    'call_action2' => [
                        'text_html' => [
                            'label' => 'Call action',
                            'value' => ''
                        ]
                    ],
                    'entete2' => [
                        'text_html' => [
                            'label' => 'Entete',
                            'value' => ""
                        ]
                    ],
                    'lyt_footer2' => [
                        'text_html' => [
                            'label' => 'Footer',
                            'value' => ""
                        ]
                    ],
                    'image2' => [
                        'img_bg' => [
                            'label' => 'Image',
                            'fids' => []
                        ]
                    ]
                ]
            ]
        ];
    }
}