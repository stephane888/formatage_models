<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_hero_ason",
 *   label = @Translation(" hero_slider Appson "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-hero-ason",
 *   library = "formatage_models/formatage-models-hero-ason",
 *   default_region = "images",
 *   regions = {
 *     "imagebg" = {
 *       "label" = @Translation(" Image en arriere plan"),
 *     },
 *     "title" = {
 *       "label" = @Translation("title"),
 *     },
 *     "sub_title" = {
 *       "label" = @Translation("sub title"),
 *     },
 *     "description" = {
 *       "label" = @Translation("Description"),
 *     },
 *     "call_action" = {
 *       "label" = @Translation("Call to action"),
 *     },
 *     "image" = {
 *       "label" = @Translation("Image"),
 *     },
 *   }
 * )
 */
class FormatageModelsHeroAson extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-hero-ason.png");
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
  
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
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
  
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'css_left' => "col-md-8",
      'css_right' => "col-md-3 d-none d-md-flex",
      'region_tag_title' => 'h2',
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title' => [
            'text' => [
              'label' => 'titre',
              'value' => "Perfect Landing Page"
            ]
          ],
          'sub_title' => [
            'text' => [
              'label' => 'titre',
              'value' => "Best For Your App"
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => 'Description',
              'value' => "The Best Template For Your Mobile App To Showcase And Acquire New Customers All Around The World.The Best Template That You Can Find Anywhere!"
            ]
          ],
          'call_action' => [
            'url' => [
              'label' => 'Call to action',
              'value' => [
                'class' => 'btn btn-outline-light btn-lg',
                'text' => 'Download Now'
              ]
            ]
          ],
          'image' => [
            'img_bg' => [
              'label' => 'Image',
              'fids' => []
            ]
          ],
          'imagebg' => [
            'img_bg' => [
              'label' => 'Image background',
              'fids' => []
            ]
          ]
        ]
      ]
    ];
  }
  
}
