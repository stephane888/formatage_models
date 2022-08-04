  <?php
  use Drupal\formatage_models\FormatageModelsThemes;
  
  function template_preprocess_formatage_models_swiper_views_style(&$vars) {
    FormatageModelsThemes::ViewsGetValues($vars);
  }
  
  function template_preprocess_formatage_models_fieldgalleries(&$vars, $hook) {
    $element = $vars['element'];
    // Creating variables for the template.
    $vars['entity_type'] = $element['#entity_type'];
    $vars['field_name'] = $element['#field_name'];
    $vars['field_type'] = $element['#field_type'];
    $vars['label_display'] = $element['#label_display'];
    
    $vars['label_hidden'] = ($element['#label_display'] == 'hidden');
    // Always set the field label - allow themes to decide whether to display
    // it.
    // In addition the label should be rendered but hidden to support screen
    // readers.
    $vars['label'] = $element['#title'];
    
    $vars['multiple'] = $element['#is_multiple'];
    //
    $vars['items'] = $element['items'];
    $vars['conf'] = $element['#conf'];
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