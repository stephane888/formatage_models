<?php

namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\Core\Layout\LayoutDefault;
use Drupal\Core\Form\FormStateInterface;
use Drupal\formatage_models\Services\Layouts;
use Symfony\Component\DependencyInjection\ContainerInterface;
use Stephane888\Debug\debugLog;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_blog_call_toaction",
 *   label = @Translation(" Bloc call to action "),
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
class FormatageModelsBlogCallToaction extends FormatageModelsTeasers {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/teasers/formatage-models-blog-call-toaction.png");
  }
  
  /**
   * -
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title' => [
            'text' => [
              'label' => "Titre",
              'value' => "Trouvez un professionnel RGE"
            ]
          ],
          'body' => [
            'text_html' => [
              'label' => "Body",
              'value' => " Et bénéficiez d'un accompagnement pour l'obtention de vos aides financières, avec notre partenaire Butagaz. ",
              'format' => "basic_html"
            ]
          ],
          'link' => [
            'url' => [
              'label' => "Call action",
              'value' => [
                'link' => "#",
                'text' => "Je décris mon projet",
                'class' => "serviceBlock-module__button text-white"
              ]
            ]
          ]
        ]
      ]
    ];
  }
  
}