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
            'css' => '',
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
                            'value' => '
<p class="progress-label">Matériaux écologiques</p>

<div class="progress">
<div class="progress-bar" data-progress="80" data-trigger="null" style="width: 80%;"><span><span class="counter" data-to="80" data-trigger="null">80</span> %</span></div>
</div>

<p class="progress-label">Recyclables</p>

<div class="progress">
<div class="progress-bar" data-progress="50" data-trigger="null" style="width: 50%;"><span><span class="counter" data-to="50" data-trigger="null">50</span> %</span></div>
</div>

<p class="progress-label">Produits non toxiques</p>

<div class="progress">
<div class="progress-bar" data-progress="100" data-trigger="null" style="width: 100%;"><span><span class="counter" data-to="100" data-trigger="null">100</span> %</span></div>
</div>

<p class="progress-label">Faible impact environnemental</p>

<div class="progress">
<div class="progress-bar" data-progress="60" data-trigger="null" style="width: 60%;"><span><span class="counter" data-to="60" data-trigger="null">60</span> %</span></div>
</div>
'
                        ]
                    ],
                    'center' => [
                        'text_html' => [
                            'label' => 'Texte au centre',
                            'value' => '<p>Le client, l’environnement et la sécurité sont au centre des actions quotidiennes de tous les collaborateurs de PTEM, à tous les niveaux hiérarchiques.</p>
<p>Convaincu de l’intérêt économique à long terme et du bienfait environnemental d’une attitude écologiquement responsable, nous avons créé et mis en place une charte environnementale.</p>
'
                        ]
                    ],
                    'right' => [
                        'text_html' => [
                            'label' => 'Texte à droite',
                            'value' => '
<h2 class="titre">Nos standards écologiques</h2>

<p>La politique santé, sécurité &amp; environnement déclinent ses thèmes. De plus, des objectifs concrets et chiffrés sont fixés annuellement et revus périodiquement.</p>
<a class="border btn btn-lg btn-outline-force" href="#">En savoir plus</a>'
                        ]
                    ]
                ]
            ]
        ];
    }
}