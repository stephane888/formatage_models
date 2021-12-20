<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_contact",
 *   label = @Translation(" Section Contact "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-contact",
 *   library = "formatage_models/formatage-models-contact",
 *   default_region = "description",
 *   regions = {
 *   	 "titre" = {
 *       "label" = @Translation(" Titre ")
 *     },
 *     "description" = {
 *       "label" = @Translation(" description ")
 *     },
 *     "content_map_google" = {
 *       "label" = @Translation(" Contenu Map Google ")
 *     },
 *   }
 * )
 */
class FormatageModelsImageContact extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-contact.png");
  }
  
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'region_css_content_map_google' => "col-md-8",
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'titre' => [
            'text' => [
              'label' => 'Titre',
              'value' => 'Nous contacter'
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => 'Description',
              'value' => '
                <p class="mb-5"> Notre magasin est ouvert du lundi au Vendredi de 8h30 à 12h30 et de 13h30 à 17h30 et le Samedi de 8h30 à 12h30. </p>
                <div class="d-flex">
                  <i class="icon-edit"></i> 
                  <p>
                    Zone ENERGIE PARC <br>
                    135 Rue Diderot <br>
                    93700 Drancy
                  </p>
                </div>
                <div class="d-flex">
                  <i class="icon-edit"></i> 
                  <p>
                    <b> Email: </b> contact@isolationmarket.fr <br>
                    <b> Fixe: </b> 09 52 49 48 20 <br>
                    <b> Mobile: </b> 06 44 02 97 12 <br>
                  </p>
                </div>
               '
            ]
          ],
          'content_map_google' => [
            'text_html' => [
              'label' => 'Map google',
              'value' => ''
            ]
          ]
        ]
      ]
    ];
  }
  
}