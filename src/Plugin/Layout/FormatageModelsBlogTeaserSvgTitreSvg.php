<?php
namespace Drupal\formatage_models\Plugin\Layout;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_teaser_svg_titre_text",
 *   label = @Translation(" blog teaser _svg_titre_text"),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-teaser-svg-titre-text",
 *   library = "formatage_models/formatage-models-teaser-svg-titre-text",
 *   default_region = "body",
 *   regions = {
 *     "svg" = {
 *       "label" = @Translation("Svg"),
 *     },
 *     "body" = {
 *       "label" = @Translation("body"),
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
class FormatageModelsBlogTeaserSvgTitreSvg extends LayoutDefault {

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