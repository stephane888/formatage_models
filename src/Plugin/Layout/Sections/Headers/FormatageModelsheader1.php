<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections\Headers;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;
use Drupal\formatage_models\FormatageModelsThemes;
use Stephane888\Debug\Repositories\ConfigDrupal;

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
 *     "topheader_right" = {
 *       "label" = @Translation("Top header right"),
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
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }

  public function buildConfigurationForm($form, $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    // dump($this->configuration);
    return $form;
  }

  public function defaultConfiguration() {
    // $SiteConfig = $this->configFactory->getEditable("site.config");
    return parent::defaultConfiguration() + [
      'css' => 'mb-0',
      'region_css_call_action' => 'btn btn-outline-primary btn-outline-force',
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => " Configurez l'entete du site ",
          'loader' => 'static'
        ],
        'fields' => [
          'topheader' => [
            'text' => [
              'label' => "Titre de l'entete",
              'value' => "Un devis travaux en ligne dès que vous en avez besoin..."
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