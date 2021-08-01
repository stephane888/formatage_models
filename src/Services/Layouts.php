<?php

namespace Drupal\formatage_models\Services;

use Stephane888\Debug\debugLog;
use Drupal\Core\Form\FormStateInterface;
use Drupal\formatage_models\Services\BuilderConfigForm;

class Layouts {
	protected $configuration = [];
	protected $regions = [];
	protected $BuilderConfigForm;
	function __construct(BuilderConfigForm $BuilderConfigForm){
		$this->BuilderConfigForm = $BuilderConfigForm;
	}
	
	/**
	 * permert d'ajouter un formulaire d'edition.
	 *
	 * @var array
	 */
	protected $forms = [];
	
	/**
	 *
	 * @return string[]|boolean[]
	 */
	function defaultConfiguration(){
		return [
				'css'=> '',
				'load_libray'=> false
		];
	}
	//
	function setConfig($configuration){
		$this->configuration = $configuration;
	}
	//
	function setRegions($regions){
		$this->regions = $regions;
	}
	/**
	 *
	 * @param array $form
	 */
	function buildClassCssRegion(array &$form){
		foreach( $this->regions as $region => $label ){
			$form['css_class']['region_css_' . $region] = [
					'#type'=> 'textfield',
					'#title'=> 'Class css region : ' . $label['label'],
					'#default_value'=> isset( $this->configuration['region_css_' . $region] ) ? $this->configuration['region_css_' . $region] : ''
			];
		}
	}
	/**
	 *
	 * @param array $form
	 */
	function buildConfigurationForm(array &$form){
		$form["load_libray"] = [
				'#type'=> 'checkbox',
				'#title'=> "load_libray",
				'#default_value'=> $this->configuration['load_libray']
		];
		
		$form['css_class'] = array(
				'#type'=> 'details',
				'#title'=> 'Class html',
				'#open'=> false
		);
		$form['css_class']['css'] = [
				'#type'=> 'textfield',
				'#title'=> 'Class css du container parent',
				'#default_value'=> $this->configuration['css']
		];
		$this->buildClassCssRegion( $form );
		$this->BuilderConfigForm->prepareBuildForms( $this->configuration, $form );
	}
	/**
	 *
	 * @param array $fids
	 * @return boolean
	 */
	function saveFilePermanent(array $fids){
		foreach( $fids as $fid ){
			if($file = \Drupal\file\Entity\File::load( $fid )){
				// debugLog::kintDebugDrupal($file, 'saveFilePermanent2', null, 'lesroisdelareno');
				$file->setPermanent();
				$file->save();
				$file_usage = \Drupal::service( 'file.usage' );
				$file_usage->add( $file, 'formatage_models', 'module', $fid );
				return true;
			}
		}
	}
	/**
	 *
	 * @param array $configuration
	 * @param FormStateInterface $form_state
	 */
	function submitConfigurationForm(array &$configuration, FormStateInterface $form_state){
		$configuration['css'] = $form_state->getValue( [
				'css_class',
				'css'
		] );
		$configuration['load_libray'] = $form_state->getValue( 'load_libray' );
		foreach( $this->regions as $region => $label ){
			$configuration['region_css_' . $region] = $form_state->getValue( [
					'css_class',
					'region_css_' . $region
			] );
		}
		debugLog::$max_depth = 12;
		debugLog::$themeName = 'builderstheme';
		//
		foreach( $configuration as $key => $field ){
			if(! empty( $field['builder-form'] )){
				$configuration[$key]['fields'] = array_merge( $field['fields'], $form_state->getValue( $key )['fields'] );
				
				$this->saveImage( $configuration[$key]['fields'] );
			}
		}
		// debugLog::kintDebugDrupal($configuration, "submitConfigurationForm");
	}
	/**
	 *
	 * @param array $fields
	 */
	private function saveImage(array &$fields){
		foreach( $fields as $key => $field ){
			if(! empty( $field['img_bg'] )){
				$fields[$key]['img_bg']['url'] = $this->getImageUrlByFid( $field['img_bg']['fid'] );
			}
		}
	}
	
	/**
	 * Retourne le chemin absolue sans le domaine.
	 *
	 * @param array $fid
	 * @param String $image_style
	 * @return string|array
	 */
	public function getImageUrlByFid($fid, $image_style = null){
		if(! empty( $fid[0] )){
			$file = \Drupal\file\Entity\File::load( $fid[0] );
			if($file){
				if(! empty( $image_style ) && \Drupal\image\Entity\ImageStyle::load( $image_style )){
					$img_url = \Drupal\image\Entity\ImageStyle::load( $image_style )->buildUrl( $file->getFileUri() );
				}
				else{
					$img_url = file_create_url( $file->getFileUri() );
				}
				// Remove domaine
				$img_url = explode( \Drupal::request()->getSchemeAndHttpHost(), $img_url );
				return ! empty( $img_url[1] ) ? $img_url[1] : $img_url[0];
			}
		}
		return '';
	}
}
