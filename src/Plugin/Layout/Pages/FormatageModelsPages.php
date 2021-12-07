<?php
namespace Drupal\formatage_models\Plugin\Layout\Pages;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\Core\Form\FormStateInterface;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;

class FormatageModelsPages extends FormatageModels implements ContainerFactoryPluginInterface
{

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
    public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager)
    {
        // TODO Auto-generated method stub
        parent::__construct($configuration, $plugin_id, $plugin_definition);
        $this->stylesGroupManager = $styles_group_manager;
    }

    /**
     *
     * {@inheritdoc}
     */
    public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition)
    {
        return new static($configuration, $plugin_id, $plugin_definition, $container->get('plugin.manager.bootstrap_styles_group'));
    }

    public function build(array $regions)
    {
        $build = parent::build($regions);
        // $layout = $this->getPluginDefinition();
        // classes and attributes.

        if (! isset($build['#attributes']['class'])) {
            $build['#attributes']['class'] = [];
        }
        $build['#attributes']['class'][] = 'space_bottom';

        // Regions classes and attributes.
        foreach ($this->getPluginDefinition()->getRegionNames() as $region_name) {
            $build[$region_name]['#attributes']['class'] = [
                'layout-region'
            ];
            if (isset($this->configuration['region_css_' . $region_name])) {
                $build[$region_name]['#attributes']['class'][] = $this->configuration['region_css_' . $region_name];
            }
        }
        $build = $this->stylesGroupManager->buildStyles($build, 
            // storage.
            $this->configuration['container_wrapper']['bootstrap_styles'] // Theme wrapper that we need to apply styles to it.
        );
        return $build;
    }

    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration()
    {
        return [
            'load_libray' => true,
            'css' => '',
            'container_wrapper' => [
                // The dynamic bootstrap styles storage.
                'bootstrap_styles' => []
            ]
        ];
    }

    /**
     *
     * {@inheritdoc}
     */
    public function buildConfigurationForm(array $form, FormStateInterface $form_state)
    {
        $form = parent::buildConfigurationForm($form, $form_state);
        $form['blb_style'] = [
            '#type' => 'details',
            '#title' => 'Style',
            '#open' => false
        ];
        if (empty($this->configuration['container_wrapper']['bootstrap_styles'])) {
            $this->configuration['container_wrapper']['bootstrap_styles'] = [];
        }
        $this->stylesGroupManager->buildStylesFormElements($form['blb_style'], $form_state, $this->configuration['container_wrapper']['bootstrap_styles'], 'bootstrap_layout_builder.styles');
        return $form;
    }

    /**
     *
     * {@inheritdoc}
     */
    public function submitConfigurationForm(array &$form, FormStateInterface $form_state)
    {
        parent::submitConfigurationForm($form, $form_state);
        $style_tab = [
            'blb_style'
        ];
        $this->configuration['container_wrapper']['bootstrap_styles'] = $this->stylesGroupManager->submitStylesFormElements($form['blb_style'], $form_state, $style_tab, $this->configuration['container_wrapper']['bootstrap_styles'], 'bootstrap_layout_builder.styles');
    }
}