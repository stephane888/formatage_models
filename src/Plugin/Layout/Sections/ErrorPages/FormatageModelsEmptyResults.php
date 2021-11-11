<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections\ErrorPages;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_empty_results",
 *   label = @Translation(" block empty datas "),
 *   category = @Translation("Formatage Models : section"),
 *   path = "layouts/sections",
 *   template = "formatage-models-empty-results",
 *   library = "formatage_models/formatage-models-empty-results",
 *   default_region = "main",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("Title"),
 *     },
 *     "body" = {
 *       "label" = @Translation("body"),
 *     },
 *     "bgimage" = {
 *       "label" = @Translation("Image d'arriere plan"),
 *     },
 *   }
 * )
 */
class FormatageModelsEmptyResults extends FormatageModelsSection
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
        $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-images-bg.png");
    }

    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return parent::defaultConfiguration() + [
            'sf' => [
                'builder-form' => true,
                'info' => [
                    'title' => 'Contenu',
                    'loader' => 'static'
                ],
                'fields' => [
                    'title' => [
                        'text' => [
                            'label' => 'Titre',
                            'value' => " Aucun contenu trouvée "
                        ]
                    ],
                    'body' => [
                        'text_html' => [
                            'label' => 'Body',
                            "value" => []
                        ]
                    ],
                    'bgimage' => [
                        'url' => [
                            'label' => "image arriere",
                            "fid" => []
                        ]
                    ]
                ]
            ]
        ];
    }
}
