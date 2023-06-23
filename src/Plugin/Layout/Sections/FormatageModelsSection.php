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
      $build['#attributes']['class'][] = $build['#settings']['cover_section']['zindex'];
    }
    /**
     * On utilise ces regions, car " $regions" peut contenis des regions non
     * valide, i.e qui a été suppprimer du modele.
     *
     * @var array $current_regions
     */
    $current_regions = $this->getPluginDefinition()->getRegionNames();
    // Regions classes and attributes.
    foreach ($current_regions as $region_name) {
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
      // Load AOS attributes.
      foreach ($current_regions as $region) {
        if (isset($this->configuration['aos_attributes'][$region]) && !empty($this->configuration['aos_attributes'][$region]['data_aos'])) {
          $build[$region]['#attributes']['data-aos'] = $this->configuration['aos_attributes'][$region]['data_aos'];
          if (!empty($this->configuration['aos_attributes'][$region]['data_aos_anchor_placement']))
            $build[$region]['#attributes']['data-aos-anchor-placement'] = $this->configuration['aos_attributes'][$region]['data_aos_anchor_placement'];
          if (!empty($this->configuration['aos_attributes'][$region]['data_aos_duration']))
            $build[$region]['#attributes']['data-aos-duration'] = $this->configuration['aos_attributes'][$region]['data_aos_duration'];
          if (!empty($this->configuration['aos_attributes'][$region]['data_aos_ease']))
            $build[$region]['#attributes']['data-aos-easing'] = $this->configuration['aos_attributes'][$region]['data_aos_ease'];
          if (!empty($this->configuration['aos_attributes'][$region]['data_aos_delay']))
            $build[$region]['#attributes']['data-aos-delay'] = $this->configuration['aos_attributes'][$region]['data_aos_delay'];
        }
      }
      // Load Default class.
      if (!empty($this->configuration['default_class'])) {
        // dump($this->configuration['default_class']);
        foreach ($this->configuration['default_class'] as $key => $groups) {
          if ($key == 'regions') {
            //
            foreach ($current_regions as $region) {
              if (!empty($groups[$region]))
                foreach ($groups[$region] as $groups_regions) {
                  $build[$region]['#attributes']['class'][] = $this->getClassNameOnGroup($groups_regions);
                }
            }
          }
          else {
            $build['#attributes']['class'][] = $this->getClassNameOnGroup($groups);
          }
        }
      }
    }
    
    // bootstrap styles.
    $build = $this->stylesGroupManager->buildStyles($build, $this->configuration['container_wrapper']['bootstrap_styles']);
    // dump($build);
    return $build;
  }
  
  protected function getClassNameOnGroup(array $groups) {
    $className = '';
    foreach ($groups as $values) {
      if (is_array($values)) {
        foreach ($values as $key => $value) {
          if ($value)
            $className .= ' ' . $key;
        }
      }
      elseif (!empty($values)) {
        $className .= ' ' . $values;
      }
    }
    return $className;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'load_libray' => false,
      'save_by_domain' => false,
      'container_wrapper' => [
        // The dynamic bootstrap styles storage.
        'bootstrap_styles' => []
      ],
      'css' => '',
      'config_section' => [
        'type_container' => 'container',
        'container_class' => ''
      ],
      'cover_section' => [
        'active' => '',
        'model' => '',
        'opacity' => '',
        'zindex' => ''
      ]
    ];
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form = parent::buildConfigurationForm($form, $form_state);
    /**
     * Configuration d'une section.
     */
    $form['config_section'] = [
      '#type' => 'details',
      '#title' => 'Configuration de la section',
      '#open' => false,
      '#description' => "NB, si cela ne s'applique pas, alors vous devez mettre à jour le layout, voir tache#57 dans formatage_models."
    ];
    // On permet à l'utilisateur de pourvoir selectionner le type de conteneur.
    $form['config_section']['type_container'] = [
      '#type' => 'select',
      '#title' => 'Selectionner le type de container',
      '#options' => [
        '' => 'aucun',
        'width-phone' => 'width-phone',
        'with-tablet' => 'with-tablet',
        'container' => 'container',
        'container-fluid' => 'container-fluid'
      ],
      '#default_value' => $this->configuration['config_section']['type_container']
    ];
    $form['config_section']['container_class'] = [
      '#type' => 'textfield',
      '#title' => 'Classe pour le conteneur',
      '#default_value' => $this->configuration['config_section']['container_class']
    ];
    //
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
    $this->configuration['config_section'] = $form_state->getValue('config_section');
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