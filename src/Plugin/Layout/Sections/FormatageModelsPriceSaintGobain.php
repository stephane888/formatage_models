<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_price_saint_gobain",
 *   label = @Translation(" Price block Saint Gobain "),
 *   category = @Translation(" Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-price-saint-gobain",
 *   library = "formatage_models/formatage-models-price-saint-gobain",
 *   default_region = "description",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation(" title "),
 *     },
 *     "montant" = {
 *       "label" = @Translation("montant")
 *     },
 *     "currency" = {
 *       "label" = @Translation("currency")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     },
 *     "list_options" = {
 *       "label" = @Translation(" list_options "),
 *     },
 *     "title1" = {
 *       "label" = @Translation(" title "),
 *     },
 *     "montant1" = {
 *       "label" = @Translation("montant")
 *     },
 *     "currency1" = {
 *       "label" = @Translation("currency")
 *     },
 *     "description1" = {
 *       "label" = @Translation("Description")
 *     },
 *     "list_options1" = {
 *       "label" = @Translation(" list_options "),
 *     },
 *   }
 * )
 */
class FormatageModelsPriceSaintGobain extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-hero-saint-gobain.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    // TODO Auto-generated method stub
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }
  
  function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'load_libray' => true,
      "derivate" => [
        'value' => 'simple',
        'options' => [
          'simple' => 'simple',
          'cover-bg' => 'Cover background'
        ]
      ],
      'infos' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Texte information',
          'loader' => 'static'
        ],
        'fields' => [
          'title' => [
            'text_html' => [
              'value' => " Mensuel ",
              'label' => ' Titre '
            ]
          ],
          'montant' => [
            'text' => [
              'value' => " 24 ",
              'label' => ' montant '
            ]
          ],
          'currency' => [
            'text_html' => [
              'label' => "currency",
              "value" => '<div class="price-currency-info">€99* HT</div> <div class="price-currency-info">/mois</div>'
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => 'description',
              'value' => '<ul class="list-unstyled px-0">
        <li>Prélèvement mensuel</li>
        <li>Paiement sécurisé</li>
      </ul>'
            ]
          ],
          'list_options' => [
            'text_html' => [
              'label' => "list_options",
              "value" => '<ul class="puce-check list-options mx-auto">
        <li>Assitance</li>
        <li>Referencement sur Google</li>
        <li>Analyse du trafic</li>
      </ul>'
            ]
          ],
          'title1' => [
            'text_html' => [
              'value' => " Annuel ",
              'label' => ' Titre '
            ]
          ],
          'montant1' => [
            'text' => [
              'value' => " 249 ",
              'label' => ' montant '
            ]
          ],
          'currency1' => [
            'text_html' => [
              'label' => "currency",
              "value" => '<div class="price-currency-info">€99* HT</div> <div class="price-currency-info">/an</div>'
            ]
          ],
          'description1' => [
            'text_html' => [
              'label' => 'description',
              'value' => '<ul class="list-unstyled px-0">
        <li>Prélèvement annuel</li>
        <li>Paiement sécurisé</li>
      </ul>'
            ]
          ],
          'list_options1' => [
            'text_html' => [
              'label' => "list_options",
              "value" => '<ul class="puce-check list-options mx-auto">
        <li>Assitance</li>
        <li>Referencement sur Google</li>
        <li>Analyse du trafic</li>
      </ul>'
            ]
          ]
        ]
      ]
    ];
  }
  
}
