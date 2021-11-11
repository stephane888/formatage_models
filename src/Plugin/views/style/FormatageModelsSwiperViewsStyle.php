<?php

namespace Drupal\formatage_models\Plugin\views\style;

use Drupal\views\Plugin\views\style\StylePluginBase;
use Drupal\core\form\FormStateInterface;
use Stephane888\Debug\debugLog;

/**
 * Style plugin to render a list of years and months
 * in reverse chronological order linked to content.
 *
 * @ingroup views_style_plugins
 *
 * @ViewsStyle(
 *   id = "formatage-models-swiper-views-style",
 *   title = @Translation(" Slider swiper two column "),
 *   help = @Translation("Render default model"),
 *   theme = "formatage_models_swiper_views_style",
 *   display_types = { "normal" }
 * )
 */
class FormatageModelsSwiperViewsStyle extends StylePluginBase {
  
  /**
   * Does the style plugin for itself support to add fields to it's output.
   *
   * @var bool
   */
  protected $usesFields = TRUE;
  
  /**
   * Does the style plugin allows to use style plugins.
   *
   * @var bool
   */
  protected $usesRowPlugin = TRUE;
  
  /**
   * Does the style plugin support custom css class for the rows.
   *
   * @var bool
   */
  protected $usesRowClass = TRUE;
  
  /**
   *
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['view_layouts_options'] = [
      'default' => null,
      'title' => [],
      'sub_title' => [],
      'description' => [],
      'img_avant' => [],
      'img_apres' => []
    ];
    $options['library'] = [
      'default' => true
    ];
    $options['library-file'] = [
      'default' => 'formatage_models/formatage_models_swiper'
    ];
    return $options;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);
    
    $labels = $this->displayHandler->getFieldLabels(TRUE);
    
    $form['library'] = [
      '#type' => 'checkbox',
      '#title' => ' Charger la librarie de style ',
      '#default_value' => (isset($this->options['library'])) ? $this->options['library'] : true
    ];
    
    /**
     * Add section
     */
    $form['view_layouts_options'] = [
      '#type' => 'details',
      '#title' => 'Mappes les champs ci-dessous.',
      "#tree" => true,
      '#open' => true
    ];
    $form['view_layouts_options']['title'] = [
      '#type' => 'checkboxes',
      '#title' => 'Titre',
      '#options' => $labels,
      '#default_value' => (!empty($this->options['view_layouts_options']['title'])) ? $this->options['view_layouts_options']['title'] : []
    ];
    $form['view_layouts_options']['sub_title'] = [
      '#type' => 'checkboxes',
      '#title' => 'Sous titre',
      '#options' => $labels,
      '#default_value' => (!empty($this->options['view_layouts_options']['sub_title'])) ? $this->options['view_layouts_options']['sub_title'] : ''
    ];
    $form['view_layouts_options']['description'] = [
      '#type' => 'checkboxes',
      '#title' => 'Description',
      '#options' => $labels,
      '#default_value' => (!empty($this->options['view_layouts_options']['description'])) ? $this->options['view_layouts_options']['description'] : ''
    ];
    $form['view_layouts_options']['img_avant'] = [
      '#type' => 'checkboxes',
      '#title' => 'Image avant',
      '#options' => $labels,
      '#default_value' => (!empty($this->options['view_layouts_options']['img_avant'])) ? $this->options['view_layouts_options']['img_avant'] : ''
    ];
    
    $form['view_layouts_options']['img_apres'] = [
      '#type' => 'checkboxes',
      '#title' => 'Image Apres',
      '#options' => $labels,
      '#default_value' => (!empty($this->options['view_layouts_options']['img_apres'])) ? $this->options['view_layouts_options']['img_apres'] : ''
    ];
  }
  
}