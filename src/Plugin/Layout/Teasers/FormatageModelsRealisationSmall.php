<?php

namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_realisation_small",
 *   label = @Translation(" Realisation card small "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-realisation-small",
 *   library = "formatage_models/formatage-models-realisation-small",
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
 *       "label" = @Translation("Url sur l'affichage (via nid) ")
 *     },
 *     "text_url" = {
 *       "label" = @Translation("Texte de l'url")
 *     },
 *     "listes" = {
 *     	 "label" = @Translation("Listes")
 *     }
 *   }
 * )
 */
class FormatageModelsRealisationSmall extends FormatageModels {
  
  /**
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'text_url' => 'Voir le projet'
    ];
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['text_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Text du lien'),
      '#default_value' => $this->configuration['text_url'],
      '#description' => 'Lien sur le titre, à utiliser si la region url est vide.'
    ];
    
    $this->Layouts->buildConfigurationForm($form);
    return $form;
  }
  
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $this->configuration['text_url'] = $form_state->getValue('text_url');
  }
  
}