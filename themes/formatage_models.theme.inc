<?php
use Drupal\formatage_models\FormatageModelsThemes;

function template_preprocess_formatage_models_swiper_views_style(&$vars)
{
    FormatageModelsThemes::ViewsGetValues($vars);
}

function template_preprocess_formatage_models_swiper_big_views_style(&$vars)
{
    FormatageModelsThemes::ViewsGetValues($vars);
}