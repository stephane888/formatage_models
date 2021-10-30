<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_images_bg",
 *   label = @Translation(" Image en arriere plan + text "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-images-bg",
 *   library = "formatage_models/formatage-models-images-bg",
 *   default_region = "main",
 *   regions = {
 *     "titre" = {
 *       "label" = @Translation("titre"),
 *     },
 *     "sub_title" = {
 *       "label" = @Translation("sub_title"),
 *     },
 *     "bgimage" = {
 *       "label" = @Translation("Image d'arriere plan"),
 *     },
 *     "link" = {
 *       "label" = @Translation("Lien"),
 *     },
 *   }
 * )
 */
class FormatageModelsImagesBg extends FormatageModelsSection {

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
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-images-bg.png");
  }

  /**
   *
   * {@inheritdoc}
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
          'titre' => [
            'text' => [
              'label' => 'Titre',
              'value' => "Enfin, vos travaux de rénovation simples et sans surprise !"
            ]
          ],
          'sub_title' => [
            'text' => [
              'label' => 'Sous titre',
              "value" => "Contactez nous,"
            ]
          ],
          'link' => [
            'url' => [
              'label' => "Lien",
              "value" => [
                "link" => "#",
                "text" => " ESTIMER MES TRAVAUX ",
                "class" => "seeMore"
              ]
            ]
          ]
        ]
      ]
    ];
  }
}
