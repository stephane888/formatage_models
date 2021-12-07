<?php

namespace Drupal\formatage_models\Plugin\Layout;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Config\ConfigFactoryInterface;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * default class for module layout module
 *
 * @author stephane
 *        
 */
class FormatageModels extends LayoutDefault {
  
  /**
   * The layouts services from formatage_models.
   *
   * @var \Drupal\formatage_models\Services\Layouts
   */
  protected $Layouts;
  
  /**
   * The styles group plugin manager.
   *
   * @var \Drupal\bootstrap_styles\StylesGroup\StylesGroupManager
   */
  protected $stylesGroupManager;
  
  /**
   * The config factory.
   *
   * @var \Drupal\Core\Config\ConfigFactoryInterface
   */
  protected $configFactory;
  
  /**
   *
   * {@inheritdoc}
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition) {
    // $this->Layouts = $Layouts;
    $this->Layouts = \Drupal::service('formatage_models.layouts');
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->Layouts->setConfig($this->configuration);
    $this->Layouts->setRegions($this->getPluginDefinition()->getRegions());
    
    
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    
    return parent::defaultConfiguration() + $this->Layouts->defaultConfiguration() + [];
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function build(array $regions) {
    
    // Ensure $build only contains defined regions and in the order defined.
    $build = [];
    foreach ($this->getPluginDefinition()->getRegionNames() as $region_name) {
      if (array_key_exists($region_name, $regions)) {
        $build[$region_name] = $regions[$region_name];
      }
    }
    $build['#settings'] = $this->getConfiguration();
    $build['#layout'] = $this->pluginDefinition;
    $build['#theme'] = $this->pluginDefinition->getThemeHook();
    $library = $this->pluginDefinition->getLibrary();
    $currentDomain = $this->Layouts::getCurrentdomain();
    if (!empty($this->configuration[$currentDomain])) {
      $build['#settings'] = $this->configuration[$currentDomain];
      if ($this->configuration[$currentDomain]['load_libray']) {
        $build['#attached']['library'][] = $library;
      }
    }
    elseif ($library && $this->configuration['load_libray']) {
      $build['#attached']['library'][] = $library;
    }
    
    return $build;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    $form['label']['#default_value'] = empty($this->configuration['label']) ? $this->getBaseId() : $this->configuration['label'];
    $this->Layouts->buildConfigurationForm($form);
    // $form['style'] =
    // $this->stylesGroupManager->buildStylesFormElements($form['style'],
    // $form_state,
    // $this->configuration['container_wrapper']['bootstrap_styles'],
    // 'bootstrap_layout_builder.styles');
    // $form['info-sup']['#markup'] = 'Librairie : ' .
    // $this->pluginDefinition->getLibrary();
    return $form;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function validateConfigurationForm(array &$form, FormStateInterface $form_state) {
    //
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
    parent::submitConfigurationForm($form, $form_state);
    $this->Layouts->submitConfigurationForm($this->configuration, $form_state);
  }
  
}