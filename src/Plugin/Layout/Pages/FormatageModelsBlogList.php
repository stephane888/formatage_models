<?php

namespace Drupal\formatage_models\Plugin\Layout\Pages;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_blog_list",
 *   label = @Translation(" 2 colonnes dynamique bootstrap "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/pages",
 *   template = "formatage-models-blog-list",
 *   library = "formatage_models/formatage-models-blog-list",
 *   default_region = "left",
 *   regions = {
 *     "left" = {
 *       "label" = @Translation("Left"),
 *     },
 *     "right" = {
 *       "label" = @Translation("Right"),
 *     },
 *     "top" = {
 *       "label" = @Translation("Top"),
 *     }
 *   }
 * )
 */
class FormatageModelsBlogList extends FormatageModels {

    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration() {
        return parent::defaultConfiguration() + [
          'css_left' => 'col-lg-8',
          'css_right' => 'col-lg-4',
          'css_top' => 'col-lg-12'
        ];
    }

    /**
     *
     * {@inheritdoc}
     */
    public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
        $form = parent::buildConfigurationForm($form, $form_state);
        $form['css_left'] = [
          '#type' => 'textfield',
          '#title' => $this->t('css_left'),
          '#default_value' => $this->configuration['css_left']
        ];
        $form['css_right'] = [
          '#type' => 'textfield',
          '#title' => $this->t('css_right'),
          '#default_value' => $this->configuration['css_right']
        ];
        $form['css_top'] = [
          '#type' => 'textfield',
          '#title' => $this->t('css_top'),
          '#default_value' => $this->configuration['css_top']
        ];
        return $form;
    }

    /**
     *
     * {@inheritdoc}
     */
    public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
        parent::submitConfigurationForm($form, $form_state);
        $this->configuration['css_left'] = $form_state->getValue('css_left');
        $this->configuration['css_right'] = $form_state->getValue('css_right');
        $this->configuration['css_top'] = $form_state->getValue('css_top');
    }

}
