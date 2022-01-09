<?php

namespace Drupal\formatage_models\Plugin\Layout\headers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_header_thegem_01",
 *   label = @Translation(" Header Thegem 01 "),
 *   category = @Translation("Formatage Models [entete]"),
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
 *     "social_f1" = {
 *       "label" = @Translation("social_f1"),
 *     },
 *     "social_f2" = {
 *       "label" = @Translation("social_f2"),
 *     },
 *     "social_f3" = {
 *       "label" = @Translation("social_f3"),
 *     },
 *     "social_f4" = {
 *       "label" = @Translation("social_f4"),
 *     },
 *     "social_f5" = {
 *       "label" = @Translation("social_f5"),
 *     },
 *     "social_f6" = {
 *       "label" = @Translation("social_f6"),
 *     },
 *     "links_f1" = {
 *       "label" = @Translation("links_f1"),
 *     },
 *     "links_f2" = {
 *       "label" = @Translation("links_f2"),
 *     },
 *     "links_f3" = {
 *       "label" = @Translation("links_f3"),
 *     },
 *     "button_f1" = {
 *       "label" = @Translation("button_f1"),
 *     },
 *   }
 * )
 */
class FormatageModelsHeaderThegem01 extends FormatageModels {
  
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
          'social_f1' => [
            'icon-f' => [
              'value' => 'fab fa-facebook-f',
              'link' => '#',
              'text' => ' Facebook ',
              'label' => ' Icon facebook ',
              'show_text' => false
            ]
          ],
          'social_f2' => [
            'icon-f' => [
              'value' => 'fab fa-linkedin-in',
              'link' => '#',
              'text' => ' Linkedin ',
              'label' => ' Icon linkedin ',
              'show_text' => false
            ]
          ],
          'social_f3' => [
            'icon-f' => [
              'value' => ' fab fa-twitter ',
              'link' => '#',
              'text' => ' Twitter ',
              'label' => ' Icon twitter ',
              'show_text' => false
            ]
          ],
          'social_f4' => [
            'icon-f' => [
              'value' => ' fab fa-instagram ',
              'link' => '#',
              'text' => ' Instagram ',
              'label' => ' Icon instagram ',
              'show_text' => false
            ]
          ],
          'social_f5' => [
            'icon-f' => [
              'value' => 'fab fa-pinterest',
              'link' => '#',
              'text' => ' Pinterest ',
              'label' => ' Icon pinterest ',
              'show_text' => false
            ]
          ],
          'social_f6' => [
            'icon-f' => [
              'value' => 'fab fa-youtube',
              'link' => '#',
              'text' => ' Youtube ',
              'label' => ' Icon youtube ',
              'show_text' => false
            ]
          ]
        ]
      ],
      'links' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Link action',
          'loader' => 'static'
        ],
        'fields' => [
          'links_f1' => [
            'text' => [
              'value' => 'Contactez nous'
            ],
            'url' => [
              'value' => '#'
            ]
          ],
          'links_f2' => [
            'text' => [
              'value' => 'inscription'
            ],
            'url' => [
              'value' => '#'
            ]
          ],
          'links_f3' => [
            'text' => [
              'value' => 'Connexion'
            ],
            'url' => [
              'value' => '#'
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
              'link' => '#',
              'value' => 'Join now',
              'class' => 'btn btn-info'
            ]
          ]
        ]
      ]
    ];
  }
  
}
