<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_hero_lgb",
 *   label = @Translation(" Hero modele LGB. "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-hero-lgb",
 *   library = "formatage_models/formatage-models-hero-lgb",
 *   default_region = "title",
 *   regions = {
 *     "subtitle" = {
 *       "label" = @Translation(" Subtitle "),
 *     },
 *     "title" = {
 *       "label" = @Translation(" Title"),
 *     },
 *     "introduction" = {
 *       "label" = @Translation(" Introduction "),
 *     },
 *     "description" = {
 *       "label" = @Translation(" Description "),
 *     },
 *     "button" = {
 *       "label" = @Translation(" Button "),
 *     },
 *     "imagebg" = {
 *       "label" = @Translation(" Image "),
 *     }
 *   }
 * )
 */
class FormatageModelsHeroLgb extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-hero-lgb.png");
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
  
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'region_css_entete' => "col-md-6 ml-auto",
      'region_css_entete2' => "col-md-6",
      'region_tag_title' => 'h1',
      'region_tag_subtitle' => 'h4',
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
              'value' => " Rénovation des sols "
            ]
          ],
          'title' => [
            'text' => [
              'label' => " Titre ",
              'value' => " Rénover un parquet "
            ]
          ],
          'introduction' => [
            'text_html' => [
              'label' => " Description ",
              'value' => " Rencontrez nos <b> professionnels agréés </b> <br> Lesroisdelareno "
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => " Description ",
              'value' => ' <ul class="puce-svg">
                <li><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.24681 7.36351C1.84459 6.95936 1.84459 6.30614 2.24681 5.90199C2.65176 5.49511 3.31038 5.4951 3.71533 5.90199L5.90415 8.10129L10.2853 3.6992C10.6902 3.29231 11.3488 3.29231 11.7538 3.6992C12.156 4.10335 12.156 4.75657 11.7538 5.16072L5.90415 11.0383L2.24681 7.36351Z" fill="white"></path></svg>Protection juridique</li>
                <li><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.24681 7.36351C1.84459 6.95936 1.84459 6.30614 2.24681 5.90199C2.65176 5.49511 3.31038 5.4951 3.71533 5.90199L5.90415 8.10129L10.2853 3.6992C10.6902 3.29231 11.3488 3.29231 11.7538 3.6992C12.156 4.10335 12.156 4.75657 11.7538 5.16072L5.90415 11.0383L2.24681 7.36351Z" fill="white"></path></svg>Acompte garanti</li>
                <li><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.24681 7.36351C1.84459 6.95936 1.84459 6.30614 2.24681 5.90199C2.65176 5.49511 3.31038 5.4951 3.71533 5.90199L5.90415 8.10129L10.2853 3.6992C10.6902 3.29231 11.3488 3.29231 11.7538 3.6992C12.156 4.10335 12.156 4.75657 11.7538 5.16072L5.90415 11.0383L2.24681 7.36351Z" fill="white"></path></svg>Paiement sécurisé</li>
                <li><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.24681 7.36351C1.84459 6.95936 1.84459 6.30614 2.24681 5.90199C2.65176 5.49511 3.31038 5.4951 3.71533 5.90199L5.90415 8.10129L10.2853 3.6992C10.6902 3.29231 11.3488 3.29231 11.7538 3.6992C12.156 4.10335 12.156 4.75657 11.7538 5.16072L5.90415 11.0383L2.24681 7.36351Z" fill="white"></path></svg>Service gratuit</li>
              </ul>'
            ]
          ],
          'button' => [
            'url' => [
              'label' => " Button ",
              'value' => [
                'text' => " Estimez les travaux ",
                'class' => 'btn btn-primary',
                'link' => '#'
              ]
            ]
          ],
          'imagebg' => [
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