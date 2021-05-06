<?php
namespace Drupal\formatage_models;

use Drupal\Core\Field\FieldItemList;

// use Stephane888\HtmlBootstrap\Traits\Portions;
class FormatageModelsThemes {

	// use Portions;

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
		$hooks['formatage_models__img_url'] = [
			'preprocess functions' => [
				'template_preprocess_formatage_models__img_url'
			],
			// 'render element' => 'element',
			'variables' => [
				'content_all' => [],
				'first' => true,
				'attibutes' => []
			],
			'file' => 'themes/formatage_models__img_url.theme.inc'
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
	 * permet de recuper l'url d'une image ou de tout autre fichier.
	 */
	public static function getDatafieldsURL(FieldItemList $items) {
		$files = [];
		foreach ($items->getValue() as $value) {
			if (isset($value['target_id'])) {
				$files[] = self::getImageUrlByFid($value['target_id']);
			}
		}
		return $files;
	}

	public static function getImageUrlByFid($fid, $image_style = null) {
		if (! empty($fid)) {
			$file = \Drupal\file\Entity\File::load($fid);
			if ($file) {
				if (! empty($image_style) && \Drupal\image\Entity\ImageStyle::load($image_style)) {
					$img_url = \Drupal\image\Entity\ImageStyle::load($image_style)->buildUrl($file->getFileUri());
				}
				else {
					$img_url = file_create_url($file->getFileUri());
				}
				return [
					'img_url' => $img_url
				];
			}
		}
		return [];
	}

	/**
	 * permet de recuper les données dans un preprocess Field.
	 */
	public static function getDatafields(FieldItemList $items) {
		return $items->getValue();
	}
}