<?php
use Drupal\formatage_models\FormatageModelsThemes;
use Stephane888\Debug\debugLog;

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
    $id = $view->id(); // $vars['theme_hook_suggestions'] = []; }
  }
}

function template_preprocess_formatage_models_swiper_big_views_style_v2(&$vars) {
  FormatageModelsThemes::ViewsGetValues($vars);
}

function template_preprocess_formatage_models_swiper_big_views_style_v3(&$vars) {
  FormatageModelsThemes::ViewsGetValues($vars);
}
