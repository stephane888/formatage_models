<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_images_bg",
 *   label = @Translation(" Image en arriere plan + text "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-images-bg",
 *   library = "formatage_models/formatage-models-images-bg",
 *   default_region = "main",
 *   regions = {
 *     "titre" = {
 *       "label" = @Translation("titre"),
 *     },
 *     "sub_title" = {
 *       "label" = @Translation("sub_title"),
 *     },
 *     "link" = {
 *       "label" = @Translation("Lien"),
 *     },
 *     "bgimage" = {
 *       "label" = @Translation(" Image "),
 *     }
 *   }
 * )
 */
class FormatageModelsImagesBg extends FormatageModelsSection {

  /**
   * The styles group plugin manager.
   *
   * @var \Drupal\bootstrap_styles\StylesGroup\StylesGroupManager
   */
  protected $stylesGroupManager;

  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-images-bg.png");
  }

  /**
   *
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $config = $this->getConfiguration();
    //dump($config);
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['larger_text'] = [
      '#type' => 'textfield',
      '#title' => 'Larger de Colone bootstrap',
      '#default_value' => isset($config['larger_text']) ? $config['larger_text'] : '',
    ];
    return $form;
  }

  /**
   *
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);

    $this->configuration['larger_text'] = $form_state->getValue('larger_text');
  }

  /**
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'larger_text' => 'col-md-8',
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
              'value' => "Enfin, vos travaux de rénovation simples et sans surprise !"
            ]
          ],
          'bgimage' => [
            'text' => [
              'label' => 'Image d\'arrière plan',
              "value" => ""
            ]
          ],
          'sub_title' => [
            'text' => [
              'label' => 'Sous titre',
              "value" => "Contactez nous,"
            ]
          ],
          'link' => [
            'text_html' => [
              'label' => "Lien",
              "value" => '<a href="#">Un dévis</a>'
            ]
          ]
        ]
      ]
    ] + parent::defaultConfiguration();
  }

}
