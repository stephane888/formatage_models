<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_hero_ac",
 *   label = @Translation(" Hero modele AC. "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-hero-ac",
 *   library = "formatage_models/formatage-models-hero-ac",
 *   default_region = "title",
 *   regions = {
 *     "subtitle" = {
 *       "label" = @Translation(" Subtitle "),
 *     },
 *     "title" = {
 *       "label" = @Translation(" Title"),
 *     },
 *     "description" = {
 *       "label" = @Translation(" Description "),
 *     },
 *     "button" = {
 *       "label" = @Translation(" Button "),
 *     },
 *     "image" = {
 *       "label" = @Translation(" Image "),
 *     }
 *   }
 * )
 */
class FormatageModelsHeroAC extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-hero-ac.png");
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
  
  public function buildConfigurationForm($form, $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['css_left'] = [
      '#type' => 'textfield',
      '#title' => 'css left',
      '#default_value' => $this->configuration['css_left']
    ];
    $form['css_right'] = [
      '#type' => 'textfield',
      '#title' => 'css right',
      '#default_value' => $this->configuration['css_right']
    ];
    return $form;
  }
  
  public function submitConfigurationForm(array &$form, $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $this->configuration['css_left'] = $form_state->getValue('css_left');
    $this->configuration['css_right'] = $form_state->getValue('css_right');
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection::defaultConfiguration()
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'css_left' => "col-md-6",
      'css_right' => "col-md-6",
      "derivate" => [
        'value' => 'basic',
        'options' => [
          '' => 'image right (default)',
          'image-left' => 'image right'
        ]
      ],
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => ' Contenu 1 ',
          'loader' => 'static'
        ],
        'fields' => [
          'subtitle' => [
            'text' => [
              'label' => 'Sous titre',
              'value' => "L'agence Web qui vous offre une solution All-In-One !"
            ]
          ],
          'title' => [
            'text' => [
              'label' => " Titre ",
              'value' => " Habeuk Digital "
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => " Description ",
              'value' => " Nous croyons dans le pouvoir de l’intelligence et de la technologie pour optimiser vos performances "
            ]
          ],
          'button' => [
            'url' => [
              'label' => " Button ",
              'value' => [
                'text' => 'Contactez-nous',
                'class' => 'btn btn-light btn-lg',
                'link' => '#'
              ]
            ]
          ],
          'image' => [
            'img_bg' => [
              'label' => " Image Bg",
              'fids' => []
            ]
          ]
        ]
      ]
    ];
  }
  
}