<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections\HeaderTitle;

use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_titre_description",
 *   label = @Translation(" Titre description "),
 *   category = @Translation("Formatage Models"),
 *   description = "Permet d'ajouter une section avec un titre + une description",
 *   path = "layouts/sections/headertitle",
 *   template = "formatage-models-titre-description",
 *   library = "formatage_models/formatage-models-titre-description",
 *   default_region = "titre",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation(" Content title "),
 *     },
 *     "description" = {
 *       "label" = @Translation(" Content description "),
 *     }
 *   }
 * )
 */
class TitreDescription extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-titre-description.png");
  }
  
  function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'load_libray' => true,
      "css" => 'container',
      "derivate" => [
        'value' => 'text-center',
        'options' => [
          'text-center' => 'Default',
          'custom-text-left' => 'Titre à gauche, text à droite',
          'bar-left' => 'Barre vertical'
        ]
      ],
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title' => [
            'text' => [
              'label' => 'Titre de la section',
              'value' => "Nos produits"
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => 'Description',
              "value" => "Nous vous proposons une sélection de produits pour une rénovation clé en main de votre habitat. Certains produits du catalogue sont éligibles au crédit d’impôt ou à d’autres subventions. Découvrez notre sélection de produits et demandez un devis gratuit."
            ]
          ]
        ]
      ]
    ];
  }
  
}