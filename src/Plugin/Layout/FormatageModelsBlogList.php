<?php 
namespace Drupal\formatage_models\Plugin\Layout;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_blog_list",
 *   label = @Translation(" Blog list "),
 *   category = @Translation("Formatage Models"),
 *   template = "templates/pages/formatage-models-blog-list",
 *   library = "formatage_models/formatage-models-blog-list",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("Title"),
 *     },
 *     "description" = {
 *       "label" = @Translation("Description"),
 *     },
 *     "left" = {
 *       "label" = @Translation("Left"),
 *     },
 *     "right" = {
 *       "label" = @Translation("Right")
 *     }
 *   }
 * )
 */
class FormatageModelsBlogList extends LayoutDefault {
	/**
	 * {@inheritdoc}
	 */
	public function defaultConfiguration() {		
		return parent::defaultConfiguration()+[
			'css' => '',
		];
	}
	
	/**
	 * {@inheritdoc}
	 */
	public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
		$form = parent::buildConfigurationForm($form, $form_state);
		$form['css'] = [
			'#type' => 'textfield',
			'#title' => $this->t('Class css'),
			'#default_value' => $this->configuration['css'],
		];
		return $form;
	}
	
	/**
	 * {@inheritdoc}
	 */
	public function validateConfigurationForm(array &$form, FormStateInterface $form_state) {
	}
	
	/**
	 * {@inheritdoc}
	 */
	public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
		$this->configuration['css'] = $form_state->getValue('css');
	}
}