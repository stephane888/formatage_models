<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections\Menus;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;
use Drupal\formatage_models\FormatageModelsThemes;
use Drupal\Core\Render\Element;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_menu1",
 *   label = @Translation(" Menu 1 (modele) "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections/menus",
 *   template = "formatage-models-menu1",
 *   library = "formatage_models/formatage-models-menu1",
 *   default_region = "site_main_menu",
 *   regions = {
 *     "site_main_menu" = {
 *       "label" = @Translation("menu principal site "),
 *     }
 *   }
 * )
 */
class FormatageModelsmenu1 extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/menus/formatage-models-menu1.png");
  }
  
  public function build(array $regions) {
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    if (is_array($build['site_main_menu']))
      $build['site_main_menu'] = $this->getMenus($build['site_main_menu']);
    
    return $build;
  }
  
  private function getMenus(array $region) {
    foreach ($region as $k => $m) {
      if (isset($m['#base_plugin_id']) && $m['#base_plugin_id'] === 'system_menu_block') {
        // set new theme.
        $region[$k]['content']['#theme'] = 'layoutmenu_formatage_models_menu1';
        
        // add class
        $region[$k]['content']['#attributes'] = [
          'class' => [
            'menu'
          ]
        ];
        if (!empty($region[$k]['content']['#items']))
          $this->formatListMenus($region[$k]['content']['#items']);
      }
      elseif (isset($m['#plugin_id']) && str_contains($m['#plugin_id'], ":menus")) {
        $elements = Element::children($region[$k]['content']);
        foreach ($elements as $delta) {
          $region[$k]['content'][$delta]['#theme'] = 'layoutmenu_formatage_models_menu1';
          // add class in ul
          $region[$k]['content'][$delta]['#attributes'] = [
            'class' => [
              'menu'
            ]
          ];
          if (!empty($region[$k]['content'][$delta]['#items'])) {
            $this->formatListMenus($region[$k]['content'][$delta]['#items']);
            // dump($region[$k]['content'][$delta]['#items']);
          }
        }
      }
    }
    return $region;
  }
  
  private function formatListMenus(array &$items) {
    foreach ($items as $k => $item) {
      if (!empty($item['attributes'])) {
        /**
         *
         * @var \Drupal\Core\Template\Attribute $attribute
         */
        $attribute = $item['attributes'];
        $attribute->addClass([
          'menu-item'
        ]);
        // add sub menu
        if ($item['is_expanded']) {
          $attribute->addClass([
            'has-submenu0',
            'dropdown'
          ]);
        }
        // menu actif
        if ($item['in_active_trail']) {
          $attribute->addClass('nav-item--active');
        }
        $items[$k]['attributes'] = $attribute;
        //
        if (!empty($item['below'])) {
          $this->formatListMenus($item['below']);
          $items[$k]['below'] = $item['below'];
        }
      }
    }
  }
  
  public function defaultConfiguration() {
    return [
      'css' => 'bg-light',
      'region_css_site_main_menu' => ''
    ] + parent::defaultConfiguration();
  }
  
}