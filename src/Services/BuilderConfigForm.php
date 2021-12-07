<?php

namespace Drupal\formatage_models\Services;

use Stephane888\HtmlBootstrap\ThemeUtility;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
class BuilderConfigForm {
  protected $ThemeUtility;
  private $setValue = [];
  
  function __construct(ThemeUtility $ThemeUtility) {
    $this->ThemeUtility = $ThemeUtility;
  }
  
  /**
   * Construit le formulaire de gestion de champs.
   *
   * @param array $defaultConfigs
   * @param array $form
   * @param ThemeUtility $ThemeUtility
   */
  function prepareBuildForms($defaultConfigs, &$form) {
    
    foreach ($defaultConfigs as $key => $item) {
      if (isset($item['builder-form']) && $item['builder-form'] && !empty($item['fields'])) {
        $this->buildcontainerFields($key, $item, $form);
        $this->buildRenderField($item['fields'], $form[$key]);
      }
    }
  }
  
  /**
   * Les champs ont une logique qui est assez simple, afin d'ajouter facilement
   * les blocs configurables.
   * example : la clee 'icon-f' ajoute un select de fontawasone, une clée
   * "text", ajoute un champs de type text, ainsi de suite.
   *
   * @param array $fields
   * @param array $form
   */
  private function buildRenderField(array $fields, &$form) {
    foreach ($fields as $key => $field) {
      $form['fields'][$key] = [
        '#type' => 'html_tag',
        '#tag' => 'div',
        '#attributes' => [
          'class' => [
            'group-field--small'
          ]
        ]
      ];
      $this->selectRenderfield($field, $form['fields'][$key]);
    }
  }
  
  /**
   *
   * @param array $field
   * @param array $form
   */
  function selectRenderfield($field, &$form) {
    foreach ($field as $type => $Value) {
      $key = null;
      $label = null;
      $defaultValue = null;
      if (is_array($Value)) {
        $label = isset($Value['label']) ? $Value['label'] : null;
        if (isset($Value['value'])) {
          $defaultValue = $Value['value'];
          $key = 'value';
        }
        elseif (isset($Value['fids'])) {
          $defaultValue = $Value['fids'];
          $key = 'fids';
        }
        if ($key)
          $form[$type] = [];
      }
      else {
        $defaultValue = $Value;
        $label = null;
      }
      switch ($type) {
        case 'text':
          if ($key)
            $this->ThemeUtility->addTextfieldTree($key, $form[$type], $label ? $label : 'Text', $defaultValue);
          else
            $this->ThemeUtility->addTextfieldTree($type, $form, $label ? $label : 'Text', $defaultValue);
          break;
        case 'url':
          if ($key)
            $this->ThemeUtility->addUrlTree($key, $form[$type], $label ? $label : 'Url', $defaultValue);
          else
            $this->ThemeUtility->addUrlTree($type, $form, $label ? $label : 'Url', $defaultValue);
          break;
        case 'icon-f':
          if ($key)
            $this->ThemeUtility->AddFieldfontAwasone($key, $form[$type], $label ? $label : 'Icone', $defaultValue);
          else
            $this->ThemeUtility->AddFieldfontAwasone($type, $form, $label ? $label : 'Icone', $defaultValue);
          break;
        case 'btn-variant':
          if ($key)
            $this->ThemeUtility->addSelectBtnVariantTree($key, $form[$type], $label ? $label : 'Button', $defaultValue);
          else
            $this->ThemeUtility->addSelectBtnVariantTree($type, $form, $label ? $label : 'Button', $defaultValue);
          break;
        case 'text_html':
          if ($key)
            $this->ThemeUtility->addTextareaTree($type, $form, $label ? $label : 'Texte long', $Value);
          break;
        case 'img_bg':
          if ($key)
            $this->ThemeUtility->addImageTree($type, $form, $label ? $label : 'Image ', $Value);
          break;
        case 'img_style': // not use
          if ($key)
            $this->ThemeUtility->selectImageStyles($key, $form[$type], $label ? $label : 'Style image', $defaultValue);
          else
            $this->ThemeUtility->selectImageStyles($type, $form, $label ? $label : 'Style image', $defaultValue);
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
  private function buildcontainerFields(string $key, array $item, array &$form) {
    $form[$key] = [
      '#type' => 'details',
      '#title' => $item['info']['title'],
      '#open' => false,
      '#tree' => true
    ];
    // On ajoute le chargeur de donnée.
    $options = [
      'static' => 'Charge le contenu static',
      'dynamic' => 'Charge le contenu dynamique'
    ];
    $form[$key]['info'] = [];
    $this->ThemeUtility->addSelectTree('loader', $form[$key]['info'], $options, "Selectionne la maniere donc le contenu est definit", $item['info']['loader']);
  }
  
}