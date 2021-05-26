<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_services_sliders",
 *   label = @Translation(" services_sliders "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-services-sliders",
 *   library = "formatage_models/formatage-models-services-sliders",
 *   default_region = "main",
 *   regions = {
 *     "main" = {
 *       "label" = @Translation("Main"),
 *     }
 *   }
 * )
 */
class FormatageModelsServicesSliders extends FormatageModels {

    /**
     * {@inheritdoc}
     */
    public function defaultConfiguration() {
        return parent::defaultConfiguration() + [
          'titre' => '',
          'sub_title' => '',
          'bgimage' => []
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
        $form['bgimage'] = [
          '#type' => 'managed_file',
          '#title' => $this->t('Bg image'),
          '#default_value' => $this->configuration['bgimage']['fid'],
          '#upload_location' => 'public://layouts'
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
        $this->configuration['bgimage'] = [
          'fid' => $form_state->getValue('bgimage'),
          'url' => $this->Layouts->getImageUrlByFid($form_state->getValue('bgimage'))
        ];
        $this->Layouts->saveFilePermanent($form_state->getValue('bgimage'));
    }

}
