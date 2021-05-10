<?php
namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_blog_call_toaction_puce",
 *   label = @Translation(" blog call to action Puce"),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-blog-call-toaction",
 *   library = "formatage_models/formatage-models-blog-call-toaction",
 *   default_region = "body",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("Title"),
 *     },
 *     "body" = {
 *       "label" = @Translation("Body"),
 *     },
 *     "link" = {
 *       "label" = @Translation("Link")
 *     }
 *   }
 * )
 */
class FormatageModelsBlogCallToactionPuce extends LayoutDefault {

	/**
	 *
	 * {@inheritdoc}
	 */
	public function defaultConfiguration() {
		return parent::defaultConfiguration() + [
			'css' => '',
			'puce' => true
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