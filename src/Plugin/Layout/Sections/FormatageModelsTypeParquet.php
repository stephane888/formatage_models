<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\Core\Form\FormStateInterface;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_type_parquet",
 *   label = @Translation(" Hero modele design text. "),
 *   category = @Translation(" Formatage Models "),
 *   path = "layouts/sections",
 *   template = "formatage-models-type-parquet",
 *   library = "formatage_models/formatage-models-type-parquet",
 *   default_region = "title",
 *   regions = {
 *
 *     "title" = {
 *       "label" = @Translation(" Title"),
 *     },
 *     "introduction" = {
 *       "label" = @Translation(" Introduction "),
 *     },
 *     "subtitle" = {
 *       "label" = @Translation(" Subtitle "),
 *     },
 *     "description" = {
 *       "label" = @Translation(" Description "),
 *     },
 *     "titre_button1" = {
 *       "label" = @Translation(" Titre button 1 "),
 *     },
 *     "description_button1" = {
 *       "label" = @Translation(" Description button 1 "),
 *     },
 *     "titre_button2" = {
 *       "label" = @Translation(" Titre button 2 "),
 *     },
 *     "description_button2" = {
 *       "label" = @Translation(" Description button 2 "),
 *     }
 *   }
 * )
 */
class FormatageModelsTypeParquet extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-type-parquet.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    // TODO Auto-generated method stub
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection::defaultConfiguration()
   */
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'region_tag_title' => 'h2',
      'region_tag_subtitle' => 'h4',
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => ' Contenu ',
          'loader' => 'static'
        ],
        'fields' => [
          'subtitle' => [
            'text' => [
              'label' => 'Sous titre',
              'value' => " Les diff??rents types de parquet "
            ]
          ],
          'title' => [
            'text' => [
              'label' => " Titre ",
              'value' => " R??nover un parquet et le choix du sol"
            ]
          ],
          'introduction' => [
            'text_html' => [
              'label' => " Description ",
              'value' => ' Moins allergisant que la moquette, plus agr??able que le linol??um et le carrelage, le parquet est chaleureux et il fait de plus en plus d???adeptes, dans toutes les pi??ces de la maison.
                           Sa dur??e de vie est exceptionnelle et son entretien est simple ! Mais entre stratifi??, contrecoll??, ch??taignier, weng????? comment s???y retrouver ?'
            ]
          ],
          'description' => [
            'text_html' => [
              'label' => " Description ",
              'value' => ' <h4>Le parquet massif </h4> 
              <p>Le <strong>parquet massif</strong> est un rev??tement tr??s connu pour son <strong>incroyable r??sistance et sa durabilit??</strong> (plus de 80 ans).
              Selon le bois qui le compose, il peut ??galement <strong>r??sister ?? l???humidit??</strong>, c???est le cas des parquets en <strong>bois exotique</strong>. </p>
              '
            ]
          ],
          'titre_button1' => [
            'text' => [
              'label' => " Titre 1",
              'value' => " Les avantages du parquet massif "
            ]
          ],
          'description_button1' => [
            'text_html' => [
              'label' => " Description 1 ",
              'value' => '<p>Bonne <strong>capacit?? thermique et phonique</strong>,
                  <br>Apport de confort et de <strong>chaleur</strong> ?? un habitat,
                  <br>Large choix d???aspects,<br>Possibilit?? de le r??nover int??gralement lorsqu???il s???use.</p>'
            ]
          ],
          'titre_button2' => [
            'text' => [
              'label' => " Titre 2 ",
              'value' => " Les avantages du parquet massif "
            ]
          ],
          'description_button2' => [
            'text_html' => [
              'label' => " Description 2 ",
              'value' => '<p>Bonne <strong>capacit?? thermique et phonique</strong>,
                  <br>Apport de confort et de <strong>chaleur</strong> ?? un habitat,
                  <br>Large choix d???aspects,<br>Possibilit?? de le r??nover int??gralement lorsqu???il s???use.</p>'
            ]
          ]
        ]
      ]
    ];
  }
  
}