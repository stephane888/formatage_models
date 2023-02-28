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

function template_preprocess_formatage_models_quickly_edit(&$vars) {
  if (!empty($vars['element']['#contextual_links']['#id'])) {
    $vars["#attached"]['library'][] = 'formatage_models/formatage-models-data-quick-edit-id';
    if (empty($vars['attributes'])) {
      $vars['attributes'] = new \Drupal\Core\Template\Attribute();
    }
    /**
     *
     * @var \Drupal\Core\Template\Attribute $attributes
     */
    $attributes = $vars['attributes'];
    // dump($attributes);
    $attributes->setAttribute('data-quick-edit-id', $vars['element']['#contextual_links']['#id']);
    $attributes->addClass('formatage_models_quickly_edit');
  }
  // Ce modele provient du formatage de views_view_unformatted.
  elseif (!empty($vars['element']['#entity'])) {
    // dump($vars);
    /**
     *
     * @var \Drupal\creation_site_virtuel\Entity\SiteTypeDatas $entity
     */
    $entity = $vars['element']['#entity'];
    $attributes = new \Drupal\Core\Template\Attribute();
    // model paragraph:paragraph=63:langcode=fr
    $entity_type_id = $entity->getEntityTypeId();
    $langcode = $entity->language()->getId();
    $attributes->setAttribute('data-quick-edit-id', $entity_type_id . ':' . $entity_type_id . '=' . $entity->id() . ':langcode=' . $langcode);
    $attributes->addClass('formatage_models_quickly_edit');
    $vars['attributes'] = $attributes;
  }
}

function template_preprocess_layoutmenu_formatage_models_menu1(&$variables) {
  //
  if (!empty($variables['element'][0]['#items'])) {
    $variables['items'] = $variables['element'][0]['#items'];
  }
  //
  elseif (!empty($variables['element']['#items']))
    $variables['items'] = $variables['element']['#items'];
  if (!empty($variables['element']['#children']))
    $variables['children'] = $variables['element']['#children'];
}

