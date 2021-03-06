  <?php
  use Drupal\formatage_models\FormatageModelsThemes;
  use Drupal\menu_item_extras\Utility\Utility;
  
  function template_preprocess_formatage_models_swiper_views_style(&$vars) {
    FormatageModelsThemes::ViewsGetValues($vars);
  }
  
  function template_preprocess_formatage_models_swiper_big_views_style(&$vars) {
    FormatageModelsThemes::ViewsGetValues($vars);
  /**
   *
   * @var \Drupal\views\ViewExecutable $view
   */
    //
  }
  
  function template_preprocess_formatage_models_swiper_unique(&$vars) {
    FormatageModelsThemes::ViewsGetValues($vars);
    if (!empty($vars['theme_hook_original'])) {
      /**
       *
       * @var \Drupal\views\ViewExecutable $view
       */
      $view = $vars['view'];
      $id = $view->id(); // $vars['theme_hook_suggestions'] = [];}
    }
  }
  
  function template_preprocess_formatage_models_swiper_big_views_style_v2(&$vars) {
    FormatageModelsThemes::ViewsGetValues($vars);
  }
  
  function template_preprocess_formatage_models_swiper_big_views_style_v3(&$vars) {
    FormatageModelsThemes::ViewsGetValues($vars);
  }
  
  function template_preprocess_formatage_models_menu(&$vars) {
    $vars['items'] = $vars['element']['#items'];
    $vars['children'] = $vars['element']['#children'];
  }
  
  function template_preprocess_layoutmenu_formatage_models_menu1(&$variables) {
    $variables['items'] = $variables['element']['#items'];
    $variables['children'] = $variables['element']['#children'];
    //
    // dump($variables);
    // foreach ($variables['items'] as $items) {
    // if ($items['original_link']) {
    // /**
    // *
    // * @var \Drupal\menu_link_content\Plugin\Menu\MenuLinkContent $link
    // */
    // $link = $items['original_link'];
    // dump($link->getMetaData());
    // }
    // }
  }