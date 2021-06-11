<?php

namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_teaser_img_desc",
 *   label = @Translation(" Article teaser _img_desc "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-teaser-img-desc",
 *   library = "formatage_models/formatage-models-teaser-img-desc",
 *   default_region = "desc",
 *   regions = {
 *     "bgimage" = {
 *       "label" = @Translation("Image"),
 *     },
 *     "desc" = {
 *       "label" = @Translation("Description"),
 *     },
 *     "title" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "categorie" = {
 *       "label" = @Translation("Categorie")
 *     },
 *     "time_read" = {
 *       "label" = @Translation("Temps de lecture")
 *     },
 *   }
 * )
 */
class FormatageModelsBlogTeaserImgDesc extends FormatageModels {

    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration() {
        return parent::defaultConfiguration() + [
          'limit_text' => 150
        ];
    }

    /**
     *
     * {@inheritdoc}
     */
    public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
        $form = parent::buildConfigurationForm($form, $form_state);
        $form['limit_text'] = [
          '#type' => 'textfield',
          '#title' => $this->t('Limiter le texte de description'),
          '#default_value' => $this->configuration['limit_text'],
          '#description' => 'si la valeur est vide le texte va etre afficher dans son enssemble, si non les balise sont supprimées et le nombre de charactere est affiché.'
        ];
        $this->Layouts->buildConfigurationForm($form);
        return $form;
    }

    public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
        parent::submitConfigurationForm($form, $form_state);
        $this->configuration['limit_text'] = $form_state->getValue('limit_text');
    }

}
