<?php
namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_service_icone",
 *   label = @Translation("Icone left| text right"),
 *   category = @Translation("Formatage Models : Teaser"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-service-icone",
 *   library = "formatage_models/formatage-models-service-icone",
 *   default_region = "description",
 *   regions = {
 *     "icone" = {
 *       "label" = @Translation("icone"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     },
 *   }
 * )
 */
class FormatageModelsServiceIcone extends FormatageModels
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
        $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-service-icone.png");
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
            'sf' => [
                'builder-form' => true,
                'info' => [
                    'title' => 'Contenu',
                    'loader' => 'static'
                ],
                'fields' => [
                    'icone' => [
                        'text' => [
                            'label' => 'Icone (html)',
                            'value' => ""
                        ]
                    ],
                    'titre' => [
                        'text' => [
                            'label' => 'Sous titre',
                            "value" => ""
                        ]
                    ],
                    'description' => [
                        'text_html' => [
                            'label' => 'Description',
                            "value" => ""
                        ]
                    ]
                ]
            ]
        ];
    }
}