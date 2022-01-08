<?php

namespace Drupal\formatage_models\Plugin\Layout;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Form\FormStateInterface;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_svg_titre_text",
 *   label = @Translation("Affichage des items "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-service-svg-titre-text",
 *   library = "formatage_models/formatage-models-service-svg-titre-text",
 *   default_region = "items",
 *   regions = {
 *     "items" = {
 *       "label" = @Translation("items"),
 *     }
 *   }
 * )
 */
class FormatageModelsServiceSvgTitreText extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-service-svg-titre-text.png");
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'titre' => 'Pourquoi choisir Wb-Universe',
      'text_url' => "j'ai un projet",
      'url' => '#'
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
    $form['titre'] = [
      '#type' => 'textfield',
      '#title' => $this->t("Titre"),
      '#default_value' => $this->configuration['titre']
    ];
    $form['text_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t("Texte de l'url"),
      '#default_value' => $this->configuration['text_url']
    ];
    $form['url'] = [
      '#type' => 'textfield',
      '#title' => $this->t("url"),
      '#default_value' => $this->configuration['url']
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
    $this->configuration['titre'] = $form_state->getValue('titre');
    $this->configuration['text_url'] = $form_state->getValue('text_url');
    $this->configuration['url'] = $form_state->getValue('url');
  }
  
}