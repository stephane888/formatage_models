<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_item_section",
 *   label = @Translation(" Item section "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-item-section",
 *   library = "formatage_models/formatage-models-item-section",
 *   default_region = "description",
 *   regions = {
 *     "titre" = {
 *       "label" = @Translation("Titre"),
 *     },
 *     "description" = {
 *       "label" = @Translation("Description"),
 *     },
 *     "link" = {
 *       "label" = @Translation("Link"),
 *     },
 *     "image" = {
 *       "label" = @Translation("Image"),
 *     }
 *   }
 * )
 */
class FormatageModelsItemSection extends FormatageModels {

    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration() {
        return parent::defaultConfiguration() + [
          'titre_light' => 'Notre',
          'titre_bolt' => 'sélection'
        ];
    }

    /**
     *
     * {@inheritdoc}
     */
    public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
        $form = parent::buildConfigurationForm($form, $form_state);

        $form['titre_light'] = [
          '#type' => 'textfield',
          '#title' => $this->t('Sous titre section'),
          '#default_value' => $this->configuration['titre_light']
        ];
        $form['titre_bolt'] = [
          '#type' => 'textfield',
          '#title' => $this->t('titre_bolt'),
          '#default_value' => $this->configuration['titre_bolt']
        ];
        return $form;
    }

    /**
     *
     * {@inheritdoc}
     */
    public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
        parent::submitConfigurationForm($form, $form_state);
        $this->configuration['titre_light'] = $form_state->getValue('titre_light');
        $this->configuration['titre_bolt'] = $form_state->getValue('titre_bolt');
    }

}
