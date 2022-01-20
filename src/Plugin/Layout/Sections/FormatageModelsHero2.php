<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_hero2",
 *   label = @Translation(" rc-web : Hero "),
 *   category = @Translation("Formatage Models [entete]"),
 *   path = "layouts/sections",
 *   template = "formatage-models-hero2",
 *   library = "formatage_models/formatage-models-hero2",
 *   default_region = "description",
 *   regions = {
 *     "button" = {
 *       "label" = @Translation("button "),
 *     },
 *     "title" = {
 *       "label" = @Translation("title")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     },
 *   }
 * )
 */
class FormatageModelsHero2 extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-hero2.png");
  }
  
  function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'load_libray' => true,
      'infos' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Texte information',
          'loader' => 'static'
        ],
        'fields' => [
          'description' => [
            'text' => [
              'label' => 'Titre',
              'value' => ' Agence de marketing digital '
            ]
          ],
          'title' => [
            'text_html' => [
              'value' => ' Nous créons votre <span>site web</span> <br> et votre <span>stratégie digitale</span> ',
              'label' => ' Description '
            ]
          ],
          'button' => [
            'url' => [
              'label' => "button",
              "value" => [
                "link" => "#",
                "text" => "Contactez-nous",
                "class" => "btn-carre"
              ]
            ]
          ]
        ]
      ]
    ];
  }
  
}
