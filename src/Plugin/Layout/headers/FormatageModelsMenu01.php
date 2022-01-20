<?php

namespace Drupal\formatage_models\Plugin\Layout\headers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_menu01",
 *   label = @Translation(" Header menu 01 "),
 *   category = @Translation("Formatage Models [entete]"),
 *   path = "layouts/headers",
 *   template = "formatage-models-menu01",
 *   library = "formatage_models/formatage-models-menu01",
 *   default_region = "description",
 *   regions = {
 *     "logo" = {
 *       "label" = @Translation("Logo"),
 *     },
 *     "menu" = {
 *       "label" = @Translation("Menu")
 *     },
 *     "recherche" = {
 *       "label" = @Translation("Recherche")
 *     },
 *   }
 * )
 */
class FormatageModelsMenu01 extends FormatageModels {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/menus/formatage-models-menu01.png");
  }
  
  public function build($regions) {
    $build = parent::build($regions);
    $this->formatRegionMenu($build);
    return $build;
  }
  
  /**
   * Permet de formatter les blocks de menu contenus dans ma region de menu.
   *
   * @param array $build
   */
  protected function formatRegionMenu(array &$build) {
    if (!empty($build['menu'])) {
      foreach ($build['menu'] as $k => $value) {
        if (isset($value['#base_plugin_id']) && $value['#base_plugin_id'] == 'system_menu_block') {
          $build['menu'][$k]['content']['#attributes']['class'][] = 'navbar-nav mr-auto';
        }
      }
    }
  }
  
}
