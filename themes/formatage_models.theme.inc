<?php
use Drupal\formatage_models\FormatageModelsThemes;
use Stephane888\Debug\debugLog;

function template_preprocess_formatage_models_swiper_views_style(&$vars)
{
    FormatageModelsThemes::ViewsGetValues($vars);
}

function template_preprocess_formatage_models_swiper_big_views_style(&$vars)
{
    FormatageModelsThemes::ViewsGetValues($vars);
/**
 *
 * @var \Drupal\views\ViewExecutable $view
 */
    // dump($vars);
    // FormatageModelsThemes::ViewsGetValues($vars);
    // $row = $vars['rows'][0];
    // $view = $row['#view'];
    // $view->row_index = 0;
    // $row['view'] = $view;
    // $row['row'] = $row['#row'];
    // $row['options'] = $row['#options'];
    // template_preprocess_views_view_fields($row);
    // dump($row);
    // // debugLog::$max_depth = 5;
    // // debugLog::kintDebugDrupal($vars['fields']);
    // //
    // // dump($row['fields']['field_image_apres']->handler);
    // $vars['output'] = $row['fields']['nothing']->handler->advancedRender($row['row']);
    // dump($vars['output']);
    //
}

function template_preprocess_formatage_models_swiper_unique(&$vars)
{
    FormatageModelsThemes::ViewsGetValues($vars);
}