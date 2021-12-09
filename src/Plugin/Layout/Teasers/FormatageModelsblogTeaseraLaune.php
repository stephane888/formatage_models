<?php

namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_teaser_a_la_une",
 *   label = @Translation(" blog teaser à la une "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-teaser-a-la-une",
 *   library = "formatage_models/formatage-models-teaser",
 *   default_region = "titre",
 *   regions = {
 *     "bgimage" = {
 *       "label" = @Translation("Bg Image"),
 *     },
 *     "date" = {
 *       "label" = @Translation("Date"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "url" = {
 *       "label" = @Translation("Url sur l'affichage")
 *     },
 *   }
 * )
 */
class FormatageModelsblogTeaseraLaune extends FormatageModels {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/teasers/formatage_models_teaser_a_la_une.png");
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => ''
    ];
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['label']['#default_value'] = empty($this->configuration['label']) ? $this->getBaseId() : $this->configuration['label'];
    $form['css'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Class css'),
      '#default_value' => $this->configuration['css']
    ];
    return $form;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function validateConfigurationForm(array &$form, FormStateInterface $form_state) {
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $this->configuration['css'] = $form_state->getValue('css');
  }
  
}