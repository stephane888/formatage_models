<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_left_right",
 *   label = @Translation(" Hero modele LR. "),
 *   category = @Translation(" Formatage Models "),
 *   path = "layouts/sections",
 *   template = "formatage-models-left-right",
 *   library = "formatage_models/formatage-models-left-right",
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
class FormatageModelsLeftRight extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-left-right.png");
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
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection::defaultConfiguration()
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'left' => 'col-md-7',
      'right' => 'col-md-5',
      'region_tag_title' => 'h2',
      'region_tag_subtitle' => 'h4',
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => ' Contenu ',
          'loader' => 'static'
        ],
        'fields' => [
          'subtitle' => [
            'text' => [
              'label' => 'Sous titre',
              'value' => " Comment poncer un parquet ? "
            ]
          ],
          'title' => [
            'text' => [
              'label' => " Titre ",
              'value' => " Le ponçage du parquet "
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => " Description ",
              'value' => ' <p >Pour<strong> poncer efficacement un parquet</strong>, vous aurez besoin d’utiliser des machines particulières&nbsp;disponibles dans les 
                magasins de location d’outils. <br>Une fois que vous êtes outillé, commencez par équiper votre <strong>ponceuse </strong>d’un papier grossier puis terminez avec une 
                gamme plus fine pour enlever les rayures. Passez ensuite l’aspirateur sur la surface du sol. Une <strong>ponceuse bordure spéciale</strong> est nécessaire&nbsp;
                pour atteindre des pièces qui ne peuvent être poncées avec la plus grande machine.</p>'
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
          'image' => [
            'img_bg' => [
              'label' => " Image",
              'fids' => []
            ]
          ]
        ]
      ]
    ];
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['left'] = [
      '#type' => 'textfield',
      '#title' => $this->t('class left'),
      '#default_value' => $this->configuration['left']
    ];
    $form['right'] = [
      '#type' => 'textfield',
      '#title' => $this->t('class right'),
      '#default_value' => $this->configuration['right']
    ];
    return $form;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $this->configuration['left'] = $form_state->getValue('left');
    $this->configuration['right'] = $form_state->getValue('right');
  }
  
}