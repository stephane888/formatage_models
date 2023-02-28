<?php

namespace Drupal\formatage_models;

use Drupal\Core\Render\Element;
use Drupal\Core\Template\Attribute;

trait ManageStyleCss {
  /**
   *
   * @var \Drupal\Core\Template\AttributeString
   */
  public $stringAttri = '';
  
  function addStyleCss(Attribute $atttribute, $styleName, $value) {
    $style = $atttribute->offsetGet('style');
    if (!empty($style)) {
      $styleValue = $style->value();
      $styleValue .= $styleName . ':' . $value . ';';
      $atttribute->offsetSet('style', $styleValue);
    }
    
    return $atttribute;
  }
  
}
