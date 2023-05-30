<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_hero_slider_popup",
 *   label = @Translation(" hero_slider_popup "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-hero-slider-popup",
 *   library = "formatage_models/formatage-models-hero-slider-popup",
 *   default_region = "images",
 *   regions = {
 *     "images" = {
 *       "label" = @Translation("images"),
 *     },
 *     "title" = {
 *       "label" = @Translation("title"),
 *     }
 *   }
 * )
 */
class FormatageModelsHeroSliderPopup extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-hero-slider-popup.png");
  }
  
  function defaultConfiguration() {
    return [
      'load_libray' => false,
      'img_style_big' => '',
      'img_style_big_popup' => '',
      'img_style_small' => 'medium'
    ] + parent::defaultConfiguration();
  }
  
  public function buildConfigurationForm($form, $form_state) {
    $options = $this->getImagesStyles();
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['img_style_big_popup'] = [
      '#type' => "select",
      '#title' => "Selectionner un style d'image pour la grande image du popup",
      '#options' => $options,
      "#default_value" => $this->configuration['img_style_big_popup']
    ];
    $form['img_style_big'] = [
      '#type' => "select",
      '#title' => "Selectionner un style d'image pour la grande image",
      '#options' => $options,
      "#default_value" => $this->configuration['img_style_big']
    ];
    $form['img_style_small'] = [
      '#type' => "select",
      '#title' => "Selectionner un style d'image pour la petite image",
      '#options' => $options,
      "#default_value" => $this->configuration['img_style_small']
    ];
    return $form;
  }
  
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $this->configuration['img_style_big'] = $form_state->getValue('img_style_big');
    $this->configuration['img_style_big_popup'] = $form_state->getValue('img_style_big_popup');
    $this->configuration['img_style_small'] = $form_state->getValue('img_style_small');
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    // TODO Auto-generated method stub.
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }
  
  protected function getImagesStyles() {
    $values = [
      '' => 'Image par defaut'
    ];
    $imageStyles = \Drupal\image\Entity\ImageStyle::loadMultiple();
    foreach ($imageStyles as $imageStyle) {
      $values[$imageStyle->id()] = $imageStyle->label();
    }
    return $values;
  }
  
}
