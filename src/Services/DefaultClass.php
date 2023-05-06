<?php

namespace Drupal\formatage_models\Services;

trait DefaultClass {
  
  /**
   * Box Radius
   *
   * @param array $form
   * @param mixed $configuration
   */
  function backgroundPosition(array &$form, $configuration) {
    $form['background_position'] = [
      '#type' => 'details',
      '#title' => 'backgrounds properties',
      '#open' => false
    ];
    $form['background_position']['class'] = [
      '#type' => 'select',
      '#title' => 'background position',
      '#default_value' => isset($configuration['background_position']['class']) ? $configuration['background_position']['class'] : '',
      '#options' => [
        '' => 'Aucun',
        'background_position--center' => 'background_position--center',
        'background_position--left-center' => 'background_position--left-center',
        'background_position--left-center' => 'background_position--left-center',
        'background_position--left-top' => 'background_position--left-top',
        'background_position--left-bottom' => 'background_position--left-bottom',
        'background_position--right-bottom' => 'background_position--right-bottom',
        'background_position--right-top' => 'background_position--right-top'
      ]
    ];
    $form['background_position']['background'] = [
      '#type' => 'checkboxes',
      '#title' => 'background',
      '#default_value' => isset($configuration['background_position']['background']) ? $configuration['background_position']['background'] : [],
      '#options' => [
        '' => 'Aucun',
        'background--attached' => 'background--attached-fixed',
        'background--cover' => 'background--cover',
        'background--contain' => 'background--contain'
      ]
    ];
  }
  
  /**
   * Box Radius
   *
   * @param array $form
   * @param mixed $configuration
   */
  function spaces(array &$form, $configuration) {
    $form['spaces'] = [
      '#type' => 'details',
      '#title' => 'Space (marge exterieur et interne)',
      '#open' => false
    ];
    $form['spaces']['class'] = [
      '#type' => 'checkboxes',
      '#title' => 'Value',
      '#default_value' => isset($configuration['spaces']['class']) ? $configuration['spaces']['class'] : [],
      '#options' => [
        '' => 'Aucun',
        'space-bottom' => 'space-bottom',
        'space-top-inv' => 'space-top-inv',
        'space-padding' => 'space-padding',
        'space-inner-padding' => 'space-inner-padding',
        'space-inner-bottom' => 'space-inner-bottom',
        'space-inner-top' => 'space-inner-top',
        'padding-top' => 'padding-top',
        'margin-top' => 'margin-top',
        'padding-bottom' => 'padding-bottom'
      ]
    ];
  }
  
  /**
   * Box Radius
   *
   * @param array $form
   * @param mixed $configuration
   */
  function borderRadius(array &$form, $configuration) {
    $form['border_radius'] = [
      '#type' => 'details',
      '#title' => 'border radius',
      '#open' => false
    ];
    $form['border_radius']['class'] = [
      '#type' => 'select',
      '#title' => 'Value',
      '#default_value' => isset($configuration['border_radius']['class']) ? $configuration['border_radius']['class'] : '',
      '#options' => [
        '' => 'Aucun',
        'border-radius-0' => '0',
        'border-radius-5' => '5',
        'border-radius-10' => '10',
        'border-radius-20' => '20'
      ]
    ];
  }
  
  /**
   * Box shadow
   *
   * @param array $form
   * @param mixed $configuration
   */
  function boxShadow(array &$form, $configuration) {
    $form['box_shadow'] = [
      '#type' => 'details',
      '#title' => 'box shadow',
      '#open' => false
    ];
    $form['box_shadow']['class'] = [
      '#type' => 'select',
      '#title' => 'Value',
      '#default_value' => isset($configuration['box_shadow']['class']) ? $configuration['box_shadow']['class'] : '',
      '#options' => [
        '' => 'Aucun',
        'box-shadow-top-black' => 'Shadow color black',
        'box-shadow-top-primary' => 'Shadow color Primary'
      ]
    ];
  }
  
  /**
   * Container Width
   *
   * @param array $form
   * @param mixed $configuration
   */
  function containerWidth(array &$form, $configuration) {
    $form['container_width'] = [
      '#type' => 'details',
      '#title' => 'container width',
      '#open' => false
    ];
    $form['container_width']['class'] = [
      '#type' => 'select',
      '#title' => 'Value',
      '#default_value' => isset($configuration['container_width']['class']) ? $configuration['container_width']['class'] : '',
      '#options' => [
        '' => 'Aucun',
        'width-tablet' => 'width-tablet',
        'width-phone' => 'width-phone'
      ]
    ];
  }
  
}