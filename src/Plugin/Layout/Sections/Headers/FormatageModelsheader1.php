<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections\Headers;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_header1",
 *   label = @Translation(" header 1 (modele) "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections/headers",
 *   template = "formatage-models-header1",
 *   library = "formatage_models/formatage-models-header1",
 *   default_region = "topheader",
 *   regions = {
 *     "topheader" = {
 *       "label" = @Translation("top header"),
 *     },
 *     "sitename" = {
 *       "label" = @Translation("site name"),
 *     },
 *     "slogan" = {
 *       "label" = @Translation("Slogan"),
 *     }, *
 *     "data_right" = {
 *       "label" = @Translation("Data right"),
 *     },
 *     "phone" = {
 *       "label" = @Translation("phone"),
 *     },
 *     "email" = {
 *       "label" = @Translation("email"),
 *     },
 *     "call_action" = {
 *       "label" = @Translation("call action"),
 *     },
 *   }
 * )
 */
class FormatageModelsheader1 extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage_models_header1.png");
  }
  
  public function build(array $regions) {
    $build = parent::build($regions);
    $build['#settings']['logo_url'] = theme_get_setting('logo.url');
    return $build;
  }
  
  public function defaultConfiguration() {
    // $SiteConfig = $this->configFactory->getEditable("site.config");
    return parent::defaultConfiguration() + [
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'topheader' => [
            'text_html' => [
              'label' => 'Top header',
              'value' => "Un devis travaux en ligne dès que vous en avez besoin...",
              'format' => "basic_html"
            ]
          ],
          // 'logo' => [
          // 'img_bg' => [
          // 'label' => 'Logo',
          // 'fids' => [],
          // "url" => "",
          // 'style' => 'thumbnail',
          // 'class' => 'p-3',
          // 'inbg' => false
          // ]
          // ],
          'sitename' => [
            'text' => [
              'label' => 'Nom du site',
              'value' => 'GD-SUD'
            ]
          ],
          'slogan' => [
            'text' => [
              'label' => 'Slogan',
              'value' => 'Un devis travaux en ligne dès que vous en avez besoin...'
            ]
          ],
          'email' => [
            'text' => [
              'label' => 'Email',
              'value' => 'gd-sud@email.com'
            ]
          ],
          'phone' => [
            'text' => [
              'label' => 'Phone',
              'value' => '07 68 97 42 98'
            ]
          ],
          'call_action' => [
            'url' => [
              'label' => 'Call action',
              'value' => [
                'link' => '#',
                'text' => 'Estimer mes travaux',
                'class' => 'is-active btn btn-lg btn-outline-force'
              ]
            ]
          ]
        ]
      ]
    ];
  }
  
}