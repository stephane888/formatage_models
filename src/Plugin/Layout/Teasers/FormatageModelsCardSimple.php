<?php

namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\Core\Form\FormStateInterface;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_cardsimple",
 *   label = @Translation(" Card multi-model "),
 *   category = @Translation("Formatage Models : Teaser"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-cardsimple",
 *   library = "formatage_models/formatage-models-cardsimple",
 *   default_region = "titre",
 *   regions = {
 *     "image" = {
 *       "label" = @Translation("Image"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre"),
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     }
 *   }
 * )
 */
class FormatageModelsCardSimple extends FormatageModelsTeasers {

  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/teasers/formatage-models-cardsimple.png");
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

  function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'load_libray' => true,
      'limit_text_desc' => 200,
      'limit_text_title' => 200,
      "css" => '',
      "derivate" => [
        'value' => 'basic',
        'options' => [
          'basic' => 'Basic',
          'card-img-big' => 'Card image big',
          'card-box-shadow' => 'Card box shadow',
          'title-2-lines' => 'title 2 lines'
        ]
        ],
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'image' => [
            'text_html' => [
              'label' => 'Image',
              'value' => ''
            ]
          ],
          'titre' => [
            'text_html' => [
              'label' => 'Titre',
              'value' => 'NICAMEX PRE-EVENT TRIP TO LAGOS, NIGERIA'
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => 'Description',
              'value' => 'lorem ipsum dolor sit amet, consectetur adipis in euismod erat, sed diam nonum vul sit amet'
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
    $form['limit_text_desc'] = [
      '#type' => 'number',
      '#title' => $this->t('Limiter le texte de description'),
      '#default_value' => $this->configuration['limit_text_desc'],
      '#description' => 'si la valeur est vide le texte va etre afficher dans son enssemble, si non les balise sont supprimées et le nombre de charactere est affiché.'
    ];
    $form['limit_text_title'] = [
      '#type' => 'number',
      '#title' => $this->t('Limiter le texte du Titre'),
      '#default_value' => $this->configuration['limit_text_title'],
      '#description' => 'si la valeur est vide le texte va etre afficher dans son enssemble, si non les balise sont supprimées et le nombre de charactere est affiché.'
    ];
    $this->Layouts->buildConfigurationForm($form);
    return $form;
  }

  /**
  *
  * {@inheritdoc}
  */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $this->configuration['limit_text_desc'] = $form_state->getValue('limit_text_desc');
    $this->configuration['limit_text_title'] = $form_state->getValue('limit_text_title');
  }

}