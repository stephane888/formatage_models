<?php

namespace Drupal\formatage_models\Plugin\Layout\Pages;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

class FormatageModelsPages extends FormatageModelsSection implements ContainerFactoryPluginInterface {
  
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
  
  public function build(array $regions) {
    $build = parent::build($regions);
    
    return $build;
  }
  
}