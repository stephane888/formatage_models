<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_bg_header",
 *   label = @Translation(" Bg img header "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-bg-header",
 *   library = "formatage_models/formatage-models-bg-header",
 *   default_region = "title",
 *   regions = {
 *     "bgimage" = {
 *       "label" = @Translation("Bg Image"),
 *     },
 *     "title" = {
 *       "label" = @Translation("Titre")
 *     },
 *   }
 * )
 */
class FormatageModelsBgHeader extends FormatageModels {

    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration() {
        return parent::defaultConfiguration() + [
          'bg_position' => 'right center',
          'bg_size' => '75%'
        ];
    }

    /**
     *
     * {@inheritdoc}
     */
    public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
        $form = parent::buildConfigurationForm($form, $form_state);

        $form['bg_position'] = [
          '#type' => 'textfield',
          '#title' => $this->t('bg_position'),
          '#default_value' => $this->configuration['bg_position']
        ];
        $form['bg_size'] = [
          '#type' => 'textfield',
          '#title' => $this->t('bg_size'),
          '#default_value' => $this->configuration['bg_size']
        ];
        return $form;
    }

    /**
     *
     * {@inheritdoc}
     */
    public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
        parent::submitConfigurationForm($form, $form_state);
        $this->configuration['bg_position'] = $form_state->getValue('bg_position');
        $this->configuration['bg_size'] = $form_state->getValue('bg_size');
    }

}
