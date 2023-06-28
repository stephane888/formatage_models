<?php

namespace Drupal\formatage_models\Plugin\Layout\headers;

use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_header_thegem_01",
 *   label = @Translation(" Header Thegem 01 "),
 *   category = @Translation("Formatage Models (entete)"),
 *   path = "layouts/headers",
 *   template = "formatage-models-header-thegem-01",
 *   library = "formatage_models/formatage-models-header-thegem-01",
 *   default_region = "description",
 *   regions = {
 *     "infos_f1" = {
 *       "label" = @Translation("infos_f1"),
 *     },
 *     "infos_f2" = {
 *       "label" = @Translation("infos_f2"),
 *     },
 *     "socials_rx" = {
 *       "label" = @Translation("socials_rx"),
 *     }, *
 *     "button_f1" = {
 *       "label" = @Translation("button_f1"),
 *     },
 *     "user_compact" = {
 *       "label" = @Translation(" User compact "),
 *     }
 *
 *   }
 * )
 */
class FormatageModelsHeaderThegem01 extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/headers/formatage-models-header-thegem-01.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    // TODO Auto-generated method stub
    $build = parent::build($regions);
    // dump($build);
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }
  
  function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => 'bg-dark text-white',
      'load_libray' => true,
      'infos' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Texte information',
          'loader' => 'static'
        ],
        'fields' => [
          'infos_f1' => [
            'icon-f' => [
              'value' => 'fas fa-map-marker-alt'
            ],
            'text' => [
              'value' => ' 19th Ave New York, NY 95822, USA'
            ]
          ],
          'infos_f2' => [
            'icon-f' => [
              'value' => 'fas fa-phone-alt'
            ],
            'text' => [
              'value' => ' +237 694-900-622 '
            ]
          ]
        ]
      ],
      'social-items' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Social icone',
          'loader' => 'static'
        ],
        'fields' => [
          'socials_rx' => [
            'text_html' => [
              'label' => 'rx',
              'value' => '<ul class="social-links">
            <li class="nav-item ml-3">
              <a class="nav-link link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="14.41"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 486.037 1000"
                >
                  <path
                    fill="currentColor"
                    d="M124.074 1000V530.771H0V361.826h124.074V217.525C124.074 104.132 197.365 0 366.243 0C434.619 0 485.18 6.555 485.18 6.555l-3.984 157.766s-51.564-.502-107.833-.502c-60.9 0-70.657 28.065-70.657 74.646v123.361h183.331l-7.977 168.945H302.706V1000H124.074"
                  />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    fill-rule="evenodd"
                    d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 32 32"
                >
                  <path
                    fill="currentColor"
                    d="M16.021 0C7.193 0 .037 7.156.037 15.984c0 6.771 4.214 12.552 10.161 14.88c-.141-1.266-.266-3.203.052-4.583c.292-1.25 1.875-7.943 1.875-7.943s-.479-.964-.479-2.375c0-2.219 1.292-3.88 2.891-3.88c1.365 0 2.026 1.021 2.026 2.25c0 1.37-.87 3.422-1.323 5.323c-.38 1.589.797 2.885 2.365 2.885c2.839 0 5.026-2.995 5.026-7.318c0-3.813-2.75-6.49-6.677-6.49c-4.547 0-7.214 3.417-7.214 6.932c0 1.375.526 2.854 1.188 3.651c.13.161.146.302.109.464c-.12.5-.391 1.599-.443 1.818c-.073.297-.229.359-.536.219c-1.99-.922-3.245-3.839-3.245-6.193c0-5.036 3.667-9.672 10.563-9.672c5.542 0 9.854 3.958 9.854 9.229c0 5.516-3.474 9.953-8.307 9.953c-1.62 0-3.141-.839-3.677-1.839l-1 3.797c-.359 1.391-1.339 3.135-2 4.193c1.5.458 3.078.714 4.734.714c8.813 0 15.979-7.151 15.979-15.984C31.959 7.187 24.792.036 15.98.036z"
                  />
                </svg>
              </a>
            </li>
            <li class="nav-item">
              <a href="#" class="nav-link link">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  preserveAspectRatio="xMidYMid meet"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M508.64 148.79c0-45-33.1-81.2-74-81.2C379.24 65 322.74 64 265 64h-18c-57.6 0-114.2 1-169.6 3.6C36.6 67.6 3.5 104 3.5 149C1 184.59-.06 220.19 0 255.79q-.15 53.4 3.4 106.9c0 45 33.1 81.5 73.9 81.5c58.2 2.7 117.9 3.9 178.6 3.8q91.2.3 178.6-3.8c40.9 0 74-36.5 74-81.5c2.4-35.7 3.5-71.3 3.4-107q.34-53.4-3.26-106.9ZM207 353.89v-196.5l145 98.2Z"
                  />
                </svg>
              </a>
            </li>
          </ul>'
            ]
          ]
        ]
      ],
      'button-action' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Button action',
          'loader' => 'static'
        ],
        'fields' => [
          'button_f1' => [
            'url' => [
              'label' => 'url',
              'value' => [
                'link' => '#',
                'text' => 'Join now',
                'class' => 'btn btn-info'
              ]
            ]
          ]
        ]
      ]
    ];
  }
  
}
