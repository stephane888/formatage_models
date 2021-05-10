<?php
namespace Drupal\formatage_models\Twig\Extension;

use Drupal\Core\Render\Element;
use Drupal\Core\TypedData\TypedDataInterface;

class LayoutValueExtension extends \Twig_Extension {

	/**
	 *
	 * {@inheritdoc}
	 */
	public function getFilters() {
		return [
			new \Twig_SimpleFilter('field_raw', [
				$this,
				'getFieldRawValues'
			]),
			new \Twig_SimpleFilter('field_value', [
				$this,
				'getFieldValue'
			]),
			new \Twig_SimpleFilter('layout_raw', [
				$this,
				'getLayoutRawValues'
			]),
			new \Twig_SimpleFilter('layout_value', [
				$this,
				'getLayoutValues'
			])
		];
	}

	public function getLayoutValues(array $build, $keySearch = null) {
		$vals = [];
		$key = 0;
		foreach ($build as $value) {
			if (is_array($value) && ! empty($value)) {
				if (! empty($value['#theme']) && $value['#theme'] == 'block' && ! empty($value['content'])) {
					if ($keySearch !== null) {
						if ($key === $keySearch) {
							return $this->getFieldValue($value['content'], $keySearch);
						}
					}
					else {
						$vals[] = $this->getFieldValue($value['content']);
					}
				}
			}
			$key ++;
		}
		return $vals;
	}

	public function getLayoutRawValues(array $build, $keySearch = null) {
		$vals = [];
		$key = 0;
		foreach ($build as $value) {
			if (is_array($value) && ! empty($value)) {
				if (! empty($value['#theme']) && $value['#theme'] == 'block' && ! empty($value['content'])) {
					if ($keySearch !== null) {
						if ($key === $keySearch) {
							return $this->getFieldRawValues($value['content'], $keySearch);
						}
					}
					else {
						$vals[] = $this->getFieldRawValues($value['content']);
					}
				}
			}
			$key ++;
		}
		return $vals;
	}

	/**
	 * Twig filter callback: Return specific field item(s) value.
	 *
	 * @param array|null $build
	 *        	Render array of a field.
	 * @param string $key
	 *        	The name of the field value to retrieve.
	 *        	
	 * @return array|null Single field value or array of field values. If the field value is not
	 *         found, null is returned.
	 */
	public function getFieldRawValues($build, $key = '') {
		if (! $this->isFieldRenderArray($build)) {
			return NULL;
		}
		if (! isset($build['#items']) || ! ($build['#items'] instanceof TypedDataInterface)) {
			return NULL;
		}

		$item_values = $build['#items']->getValue();
		if (empty($item_values)) {
			return NULL;
		}

		$raw_values = [];
		foreach ($item_values as $delta => $values) {
			if ($key === $delta) {
				return $values;
			}
			else {
				$raw_values[$delta] = $values;
			}
		}
		return $raw_values;
	}

	/**
	 * Twig filter callback: Only return a field's value(s).
	 *
	 * @param array|null $build
	 *        	Render array of a field.
	 *        	
	 * @return array Array of render array(s) of field value(s). If $build is not the render
	 *         array of a field, NULL is returned.
	 */
	public function getFieldValue($build) {
		if (! $this->isFieldRenderArray($build)) {
			return NULL;
		}

		$elements = Element::children($build);
		if (empty($elements)) {
			return NULL;
		}

		$items = [];
		foreach ($elements as $delta) {
			$items[$delta] = $build[$delta];
		}

		return $items;
	}

	/**
	 * Checks whether the render array is a field's render array.
	 *
	 * @param array|null $build
	 *        	The render array.
	 *        	
	 * @return bool True if $build is a field render array.
	 */
	protected function isFieldRenderArray($build) {
		return isset($build['#theme']) && $build['#theme'] == 'field';
	}
}