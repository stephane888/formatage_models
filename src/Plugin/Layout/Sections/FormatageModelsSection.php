<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;

class FormatageModelsSection extends FormatageModels implements ContainerFactoryPluginInterface {
  
  /**
   * The styles group plugin manager.
   *
   * @var \Drupal\bootstrap_styles\StylesGroup\StylesGroupManager
   */
  protected $stylesGroupManager;
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->stylesGroupManager = $styles_group_manager;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
    return new static($configuration, $plugin_id, $plugin_definition, $container->get('plugin.manager.bootstrap_styles_group'));
  }
  
  /**
   * On a remplcer $this->configuration => $build['#settings'].
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    $build = parent::build($regions);
    // à mettre sur un module externe.
    $currentDomain = null;
    if (\Drupal::moduleHandler()->moduleExists('wbumenudomain')) {
      $currentDomain = \Drupal\wbumenudomain\Wbumenudomain::getCurrentdomain();
    }
    if (!empty($this->configuration[$currentDomain])) {
      $build['#settings'] = $this->configuration[$currentDomain];
    }
    
    // classes and attributes.
    if (!isset($build['#attributes']['class'])) {
      $build['#attributes']['class'] = [];
    }
    $build['#attributes']['class'][] = 'space_bottom';
    $build['#attributes']['class'][] = $build['#settings']['css'];
    if (!empty($this->configuration['derivate']['value'])) {
      $build['#attributes']['class'][] = $build['#settings']['derivate']['value'];
    }
    // cover ::before
    if (!empty($build['#settings']['cover_section']['active'])) {
      $build['#attributes']['class'][] = $build['#settings']['cover_section']['active'];
      $build['#attributes']['class'][] = $build['#settings']['cover_section']['model'];
      $build['#attributes']['class'][] = $build['#settings']['cover_section']['opacity'];
    }
    
    // Regions classes and attributes.
    foreach ($this->getPluginDefinition()->getRegionNames() as $region_name) {
      $build[$region_name]['#attributes']['class'] = [
        'layout-region'
      ];
      if (isset($this->configuration['region_css_' . $region_name])) {
        $build[$region_name]['#attributes']['class'][] = isset($build['#settings']['region_css_' . $region_name]) ? $build['#settings']['region_css_' . $region_name] : $this->configuration['region_css_' . $region_name];
      }
    }
    // Regions Aos attributes
    // on n'affiche pas en mode edition
    if (!str_contains(\Drupal::routeMatch()->getRouteName(), 'layout_builder.')) {
      foreach ($this->getPluginDefinition()->getRegionNames() as $region) {
        if (isset($this->configuration['aos_attributes'][$region]) && !empty($this->configuration['aos_attributes'][$region]['data_aos'])) {
          $build[$region]['#attributes']['data-aos'] = $this->configuration['aos_attributes'][$region]['data_aos'];
          if (!empty($this->configuration['aos_attributes'][$region]['data_aos_anchor_placement']))
            $build[$region]['#attributes']['data-aos-anchor-placement'] = $this->configuration['aos_attributes'][$region]['data_aos_anchor_placement'];
          if (!empty($this->configuration['aos_attributes'][$region]['data_aos_duration']))
            $build[$region]['#attributes']['data-aos-duration'] = $this->configuration['aos_attributes'][$region]['data_aos_duration'];
          if (!empty($this->configuration['aos_attributes'][$region]['data_aos_ease']))
            $build[$region]['#attributes']['data-aos-easing'] = $this->configuration['aos_attributes'][$region]['data_aos_ease'];
        }
      }
    }
    
    // bootstrap styles.
    $build = $this->stylesGroupManager->buildStyles($build, $this->configuration['container_wrapper']['bootstrap_styles']);
    // dump($build);
    return $build;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'load_libray' => true,
      'save_by_domain' => false,
      'container_wrapper' => [
        // The dynamic bootstrap styles storage.
        'bootstrap_styles' => []
      ],
      'css' => ''
    ];
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['blb_style'] = [
      '#type' => 'details',
      '#title' => 'Style',
      '#open' => false
    ];
    // vise à corriger les erreurs.
    if (empty($this->configuration['container_wrapper']['bootstrap_styles']))
      $this->configuration['container_wrapper']['bootstrap_styles'] = [];
    
    $this->stylesGroupManager->buildStylesFormElements($form['blb_style'], $form_state, $this->configuration['container_wrapper']['bootstrap_styles'], 'bootstrap_layout_builder.styles');
    return $form;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $style_tab = [
      'blb_style'
    ];
    // on ajoute un function de verification.( car suivant certains on cree des
    // bugs).
    if (!isset($this->configuration['container_wrapper']['bootstrap_styles'])) {
      $this->configuration['container_wrapper'] = [
        'bootstrap_styles' => []
      ];
      $message = " Une erreur s'est produit lors de la derniere sauvegarde ";
      \Drupal::messenger()->addWarning($message);
    }
    $this->configuration['container_wrapper']['bootstrap_styles'] = $this->stylesGroupManager->submitStylesFormElements($form['blb_style'], $form_state, $style_tab, $this->configuration['container_wrapper']['bootstrap_styles'], 'bootstrap_layout_builder.styles');
  }
  
}