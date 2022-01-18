<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_lmsg_call_toaction",
 *   label = @Translation(" Call to action action home "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-lmsg-call-toaction",
 *   default_region = "titre",
 *   regions = {
 *     "titre" = {
 *       "label" = @Translation("titre"),
 *     },
 *     "description" = {
 *       "label" = @Translation("description"),
 *     },
 *     "link" = {
 *       "label" = @Translation("Lien"),
 *     },
 *   }
 * )
 */
class FormatageModelsLmsgCallToaction extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-lmsg-call-toaction.png");
  }
  
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu 1',
          'loader' => 'static'
        ],
        'fields' => [
          'titre' => [
            'text' => [
              'label' => 'titre',
              'value' => "Des travaux de rénovation énergétique ?"
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => 'Description',
              'value' => '
        <div class="row mb-5">
        <div class="col-lg-6">
        <p><strong>En partenariat avec </strong></p>
        </div>
        
        <div class="col-lg-12 d-flex align-items-center">
        <div class="basic-wrapper"><a class="mobile-menu" data-target=".navbar-collapse" data-toggle="collapse"> </a> <a class="logo" href="/" rel="home" title="Home"> <img src="/themes/custom/lesroisdelareno/images/logo.png"> </a></div>
        
        <div><b class="layout-region sitename site-name">GD-SUD </b>
        
        <div class="layout-region slogan site-slogant">Un devis travaux en ligne dès que vous en avez besoin...</div>
        </div>
        </div>
        </div>
        <p><small><b>Estimer le montant des aides et le budget pour rénover votre logement. </b><br>
        LESROISDELARENO s\'occupent de tout (MaPrimeRénov, CEE...) </small></p>'
            ]
          ],
          'link' => [
            'url' => [
              'label' => 'Lien vers le contenu',
              'value' => [
                'link' => '#',
                'class' => 'seeMore d-flex',
                'text' => 'En savoir plus  
<svg class="icon svg-angle-left" width="12" height="10" fill="none">
								<path fill-rule="evenodd" clip-rule="evenodd" d="M.6 5.55h9.352L6.733 8.768a.6.6 0 10.849.849l4.242-4.243a.606.606 0 00.075-.091c.01-.015.017-.032.026-.047.01-.019.021-.037.029-.056.008-.02.013-.042.02-.063.004-.016.01-.032.014-.05A.6.6 0 0012 4.95v-.001a.605.605 0 00-.012-.116c-.003-.018-.01-.035-.015-.053-.006-.02-.01-.04-.019-.06-.009-.02-.02-.04-.031-.059-.008-.014-.015-.03-.024-.044a.588.588 0 00-.075-.092L7.582.283a.6.6 0 00-.849.849L9.951 4.35H.6a.6.6 0 000 1.2z" fill="#fff"></path>
							</svg>
',
                'isexternal' => 0
              ]
            ]
          ]
        ]
      ]
    ];
  }
  
}
