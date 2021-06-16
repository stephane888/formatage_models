<?php

namespace Drupal\formatage_models\Services;

use Stephane888\Debug\debugLog;
use Stephane888\HtmlBootstrap\ThemeUtility;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class BuilderConfigForm {
	protected $ThemeUtility;
	private $setValue = [];
	function __construct(ThemeUtility $ThemeUtility){
		$this->ThemeUtility = $ThemeUtility;
	}
	
	/**
	 *
	 * @param array $defaultConfigs
	 * @param array $form
	 * @param ThemeUtility $ThemeUtility
	 */
	function prepareBuildForms($defaultConfigs, &$form){
		debugLog::$max_depth = 7;
		// debugLog::$themeName = 'builderstheme';
		// debugLog::kintDebugDrupal( $defaultConfigs, "prepareBuildForms" );
		foreach( $defaultConfigs as $key => $item ){
			if(isset( $item['builder-form'] ) && $item['builder-form'] && ! empty( $item['fields'] )){
				$this->setValue[] = $key;
				$this->buildcontainerFields( $key, $item, $form );
				$this->buildRenderField( $item['fields'], $form[$key] );
			}
		}
	}
	
	/**
	 * Les champs ont une logique qui est assez simple, afin d'ajouter facilement les blocs configurables.
	 * example : la clee 'icon-f' ajoute un select de fontawasone, une clée "text", ajoute un champs de type text, ainsi de suite.
	 *
	 * @param array $fields
	 * @param array $form
	 */
	private function buildRenderField(array $fields, &$form){
		foreach( $fields as $key => $field ){
			$form['fields'][$key] = [
					'#type'=> 'html_tag',
					'#tag'=> 'div',
					'#attributes'=> [
							'class'=> [
									'group-field--small'
							]
					]
			];
			$this->selectRenderfield( $field, $form['fields'][$key] );
		}
	}
	
	//
	function selectRenderfield($field, &$form){
		foreach( $field as $type => $defaultValue ){
			switch($type) {
				case 'text' :
					$this->ThemeUtility->addTextfieldTree( $type, $form, 'text', $defaultValue );
					break;
				case 'url' :
					$this->ThemeUtility->addTextfieldTree( $type, $form, 'url', $defaultValue );
					break;
				case 'icon-f' :
					$this->ThemeUtility->AddFieldfontAwasone( $type, $form, 'icone', $defaultValue );
					break;
				case 'btn-variant' :
					$this->ThemeUtility->addSelectBtnVariantTree( $type, $form, 'button', $defaultValue );
					break;
			}
		}
	}
	
	/**
	 *
	 * @param string $key
	 * @param array $item
	 * @param array $form
	 */
	private function buildcontainerFields(string $key, array $item, array &$form){
		$form[$key] = array(
				'#type'=> 'details',
				'#title'=> $item['info']['title'],
				'#open'=> false
		);
	}
	public function getValue(){
		return $this->setValue;
	}
}
