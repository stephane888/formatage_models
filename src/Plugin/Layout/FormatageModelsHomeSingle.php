<?php
namespace Drupal\formatage_models\Plugin\Layout;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_home_single",
 *   label = @Translation(" Home blog lists "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/pages",
 *   template = "formatage-models-home-single",
 *   library = "formatage_models/formatage-models-home-single",
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
class FormatageModelsHomeSingle extends LayoutDefault {

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
	public function validateConfigurationForm(array &$form, FormStateInterface $form_state) {}

	/**
	 *
	 * {@inheritdoc}
	 */
	public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
		parent::submitConfigurationForm($form, $form_state);
		$this->configuration['css'] = $form_state->getValue('css');
	}
}