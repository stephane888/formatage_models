<?php
namespace Drupal\formatage_models\Plugin\Layout\Pages;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_loader_library",
 *   label = @Translation(" Charge les librairies (css/js) "),
 *   category = @Translation("Formatage Models")
 * )
 */
class FormatageModelsLoaderLybrary extends FormatageModels {

	/**
	 *
	 * {@inheritdoc}
	 */
	public function defaultConfiguration() {
		return parent::defaultConfiguration() + [
			'library' => ''
		];
	}

	/**
	 *
	 * {@inheritdoc}
	 */
	public function build(array $regions) {
		// Ensure $build only contains defined regions and in the order defined.
		$build = [];
		foreach ($this->getPluginDefinition()->getRegionNames() as $region_name) {
			if (array_key_exists($region_name, $regions)) {
				$build[$region_name] = $regions[$region_name];
			}
		}
		$build['#settings'] = $this->getConfiguration();
		$build['#layout'] = $this->pluginDefinition;
		$build['#theme'] = $this->pluginDefinition->getThemeHook();
		if ($library = $this->configuration['library']) {
			$build['#attached']['library'][] = $library;
		}
		return $build;
	}

	/**
	 *
	 * {@inheritdoc}
	 */
	public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
		$form = parent::buildConfigurationForm($form, $form_state);
		$form['library'] = [
			'#type' => 'textfield',
			'#title' => $this->t('library'),
			'#default_value' => $this->configuration['library']
		];
		return $form;
	}

	/**
	 *
	 * {@inheritdoc}
	 */
	public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
		parent::submitConfigurationForm($form, $form_state);
		$this->configuration['library'] = $form_state->getValue('library');
	}
}