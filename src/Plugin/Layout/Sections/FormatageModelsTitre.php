<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_titre",
 *   label = @Translation(" Titre section "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-titre",
 *   library = "formatage_models/formatage-models-titre",
 *   default_region = "main",
 *   regions = {
 *     "main" = {
 *       "label" = @Translation("Titre"),
 *     },
 *  "sub_title" = {
 *       "label" = @Translation("sub_title"),
 *     }
 *   }
 * )
 */
class FormatageModelsTitre extends FormatageModels {

    /**
     * {@inheritdoc}
     */
    public function defaultConfiguration() {
        return parent::defaultConfiguration() + [
          'titre' => '',
          'sub_title' => ''
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
        $form = parent::buildConfigurationForm($form, $form_state);
        $form['titre'] = [
          '#type' => 'textfield',
          '#title' => $this->t('Titre section'),
          '#default_value' => $this->configuration['titre'],
        ];
        $form['sub_title'] = [
          '#type' => 'textfield',
          '#title' => $this->t('Sous titre section'),
          '#default_value' => $this->configuration['sub_title'],
        ];
        return $form;
    }

    /**
     *
     * {@inheritdoc}
     */
    public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
        parent::submitConfigurationForm($form, $form_state);
        $this->configuration['titre'] = $form_state->getValue('titre');
        $this->configuration['sub_title'] = $form_state->getValue('sub_title');
    }

}
