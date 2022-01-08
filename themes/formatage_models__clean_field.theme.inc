<?php
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\Core\Template\Attribute;

/**
 *
 * @param array $variables
 */
function template_preprocess_formatage_models__clean_field(array &$variables) {
	
	$variables['tag_field_attibutes'] = new Attribute($variables['tag_field_attibutes']);
	$variables['tag_fields_attibutes'] = new Attribute($variables['tag_fields_attibutes']);
	if (! empty($variables['content_all']))
		foreach ($variables['content_all'] as $key =>
$variable) { if (is_array($variable) && ! empty($variable)) {
$variables['content_all'][$key] = FormatageModelsThemes::removeBlock($variable);
if (! empty($variables['content_all'][$key]['#items']))
$variables['content_all_clean'][$key] =
FormatageModelsThemes::getDatafields($variables['content_all'][$key]['#items']);
} } }
