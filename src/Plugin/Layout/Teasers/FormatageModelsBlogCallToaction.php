<?php

namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Form\FormStateInterface;
use Drupal\formatage_models\Services\Layouts;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Stephane888\Debug\debugLog;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_blog_call_toaction",
 *   label = @Translation(" blog call to action "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-blog-call-toaction",
 *   library = "formatage_models/formatage-models-blog-call-toaction",
 *   default_region = "body",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("Title"),
 *     },
 *     "body" = {
 *       "label" = @Translation("Body"),
 *     },
 *     "link" = {
 *       "label" = @Translation("Link")
 *     }
 *   }
 * )
 */
class FormatageModelsBlogCallToaction extends LayoutDefault {

    /**
     * The layouts services from formatage_models.
     *
     * @var \Drupal\formatage_models\Services\Layouts
     */
    protected $Layouts;

    /**
     * Cette approche ne fonctionne pas.
     * voir https://www.drupal.org/docs/drupal-apis/services-and-dependency-injection/dependency-injection-for-a-form
     *
     * {@inheritdoc}
     */
    public static function create(ContainerInterface $container, array $configuration, $plugin_id, $plugin_definition) {
        return new static($configuration, $plugin_id, $plugin_definition, $container->get('formatage_models.layouts'));
    }

    /**
     *
     * {@inheritdoc}
     */
    public function __construct(array $configuration, $plugin_id, $plugin_definition) {
        // $this->Layouts = $Layouts;
        $this->Layouts = \Drupal::service('formatage_models.layouts');
        parent::__construct($configuration, $plugin_id, $plugin_definition);
        $this->Layouts->setConfig($this->configuration);
    }

    /**
     *
     * {@inheritdoc}
     */
    public function defaultConfiguration() {
        return parent::defaultConfiguration() + $this->Layouts->defaultConfiguration() + [
          'puce' => false,
          'bgimage' => [
            'fid' => '',
            'url' => ''
          ]
        ];
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
        if ($library && $this->configuration['load_libray']) {
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
        //
        $form['bgimage'] = [
          '#type' => 'managed_file',
          '#title' => $this->t('Bg image'),
          '#default_value' => $this->configuration['bgimage']['fid'],
          '#upload_location' => 'public://layouts'
        ];
        return $form;
    }

    /**
     *
     * {@inheritdoc}
     */
    public function validateConfigurationForm(array &$form, FormStateInterface $form_state) {

    }

    /**
     *
     * {@inheritdoc}
     */
    public function submitConfigurationForm(array &$form, FormStateInterface $form_state) {
        parent::submitConfigurationForm($form, $form_state);
        $this->Layouts->submitConfigurationForm($this->configuration, $form_state);
        $this->configuration['bgimage'] = [
          'fid' => $form_state->getValue('bgimage'),
          'url' => $this->Layouts->getImageUrlByFid($form_state->getValue('bgimage'))
        ];
        $this->Layouts->saveFilePermanent($form_state->getValue('bgimage'));
    }

}
