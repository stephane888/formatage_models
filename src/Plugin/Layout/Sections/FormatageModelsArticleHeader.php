<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_article_header",
 *   label = @Translation(" article header "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-article-header",
 *   library = "formatage_models/formatage-models-article-header",
 *   default_region = "description",
 *   regions = {
 *     "description" = {
 *       "label" = @Translation("description"),
 *     },
 *     "title" = {
 *       "label" = @Translation("Titre")
 *     },
 *   }
 * )
 */
class FormatageModelsArticleHeader extends FormatageModels
{

    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return parent::defaultConfiguration() + [
            'class_col' => 'col-md-8'
        ];
    }

    /**
     *
     * {@inheritdoc}
     */
    public function buildConfigurationForm(array $form, FormStateInterface $form_state)
    {
        $form = parent::buildConfigurationForm($form, $form_state);

        $form['class_col'] = [
            '#type' => 'textfield',
            '#title' => $this->t('class_col'),
            '#default_value' => $this->configuration['class_col']
        ];
        return $form;
    }

    /**
     *
     * {@inheritdoc}
     */
    public function submitConfigurationForm(array &$form, FormStateInterface $form_state)
    {
        parent::submitConfigurationForm($form, $form_state);
        $this->configuration['class_col'] = $form_state->getValue('class_col');
    }
}
