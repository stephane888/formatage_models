<?php
namespace Drupal\formatage_models\Services;

use Stephane888\Debug\debugLog;
use Drupal\Core\Form\FormStateInterface;

class Layouts {

	protected $configuration = [];

	function defaultConfiguration() {
		return [
			'css' => '',
			'load_libray' => false
		];
	}

	function setConfig($configuration) {
		$this->configuration = $configuration;
	}

	function buildConfigurationForm(array &$form) {
		$form['css'] = [
			'#type' => 'textfield',
			'#title' => 'Class css',
			'#default_value' => $this->configuration['css']
		];
		$form["load_libray"] = [
			'#type' => 'checkbox',
			'#title' => "load_libray",
			'#default_value' => $this->configuration['load_libray']
		];
	}

	function saveFilePermanent(array $fids) {
		foreach ($fids as $fid) {
			if ($file = \Drupal\file\Entity\File::load($fid)) {
				// debugLog::kintDebugDrupal($file, 'saveFilePermanent2', null, 'lesroisdelareno');
				$file->setPermanent();
				$file->save();
				$file_usage = \Drupal::service('file.usage');
				$file_usage->add($file, 'formatage_models', 'module', $fid);
				return true;
			}
		}
	}

	function submitConfigurationForm(array &$configuration, FormStateInterface $form_state) {
		$configuration['css'] = $form_state->getValue('css');
		$configuration['load_libray'] = $form_state->getValue('load_libray');
	}

	/**
	 *
	 * @param array $fid
	 * @param String $image_style
	 * @return string|array
	 */
	public function getImageUrlByFid($fid, $image_style = null) {
		if (! empty($fid[0])) {
			$file = \Drupal\file\Entity\File::load($fid[0]);
			if ($file) {
				if (! empty($image_style) && \Drupal\image\Entity\ImageStyle::load($image_style)) {
					$img_url = \Drupal\image\Entity\ImageStyle::load($image_style)->buildUrl($file->getFileUri());
				}
				else {
					$img_url = file_create_url($file->getFileUri());
				}

				return $img_url;
			}
		}
		return [];
	}
}