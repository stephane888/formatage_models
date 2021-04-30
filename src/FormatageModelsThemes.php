<?php
namespace Drupal\formatage_models;

use Drupal\Core\Field\FieldItemList;

class FormatageModelsThemes {

	/**
	 * Returns the theme hook definition information.
	 */
	public static function getThemeHooks() {
		$hooks['formatage_models__clean_field'] = [
			'preprocess functions' => [
				'template_preprocess_formatage_models__clean_field'
			],
			// 'render element' => 'element',
			'variables' => [
				'content_all' => [],
				'tag_fields' => null,
				'tag_fields_attibutes' => [],
				'tag_field' => null,
				'tag_field_attibutes' => []
			],
			'file' => 'themes/formatage_models__clean_field.theme.inc'
		];
		return $hooks;
	}

	/**
	 * Cette fonction permet de supprime le rendu du block;
	 *
	 * @param array $param
	 */
	public static function removeBlock(array $param) {
		// on verifie que le theme est block
		if (! empty($param['#theme']) && $param['#theme'] == 'block') {
			return $param['content'];
		}
		return $param;
	}

	/**
	 * permet de recuper les données dans un preprocess Field.
	 */
	public static function getDatafields(FieldItemList $items) {
		return $items->getValue();
	}
}