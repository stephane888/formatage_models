<?php

namespace Drupal\formatage_models\Plugin\views\style;

use Drupal\views\Plugin\views\style\StylePluginBase;
use Drupal\core\form\FormStateInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\layoutgenentitystyles\Services\LayoutgenentitystylesServices;

/**
 * Style plugin to render a list of years and months
 * in reverse chronological order linked to content.
 *
 * @ingroup views_style_plugins
 *
 * @ViewsStyle(
 *   id = "formatage-models-swiper-big-views-style",
 *   title = @Translation(" Slider swiper big text-left "),
 *   help = @Translation("Render default model"),
 *   theme = "formatage_models_swiper_big_views_style",
 *   display_types = { "normal" }
 * )
 */
class FormatageModelsSwiperBigViewsStyle extends StylePluginBase {
  
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
   * @var LayoutgenentitystylesServices
   */
  protected $LayoutgenentitystylesServices;
  
  /**
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    $instance = parent::create($container, $configuration, $plugin_id, $plugin_definition);
    $instance->LayoutgenentitystylesServices = $container->get('layoutgenentitystyles.add.style.theme');
    return $instance;
  }
  
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
      'button' => [],
      'img' => []
    ];
    
    $options['library'] = [
      'default' => true
    ];
    $options['library-file'] = [
      'default' => 'formatage_models/formatage_models_swiper_big'
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
     * add section
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
    $form['view_layouts_options']['button'] = [
      '#type' => 'checkboxes',
      '#title' => 'Button',
      '#options' => $labels,
      '#default_value' => (!empty($this->options['view_layouts_options']['button'])) ? $this->options['view_layouts_options']['button'] : ''
    ];
    $form['view_layouts_options']['img'] = [
      '#type' => 'checkboxes',
      '#title' => 'Image',
      '#options' => $labels,
      '#default_value' => (!empty($this->options['view_layouts_options']['img'])) ? $this->options['view_layouts_options']['img'] : ''
    ];
  }
  
}