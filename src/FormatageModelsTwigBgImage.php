<?php

namespace Drupal\formatage_models;

use Drupal\Core\Render\Element;
use Drupal\Core\TypedData\TypedDataInterface;
use Drupal\Core\Template\Attribute;

trait FormatageModelsTwigBgImage {
  
  /**
   * Retourne la premiere occurence comme arriere plan;
   *
   * @param array $build
   * @param array $keySearch
   *        begin: (index de debut), number: ( number dimage à retourner ).
   * @return null|\Drupal\Core\Template\Attribute
   */
  public function getLayoutBgImage(array $build) {
    $vals = null;
    $conf = null;
    foreach ($build as $value) {
      if (is_array($value) && !empty($value)) {
        if (!empty($value['#theme']) && $value['#theme'] == 'block' && !empty($value['content'])) {
          if (!empty($vals['#configuration']))
            $conf = $vals['#configuration'];
          return $this->getFieldImgBg($value['content'], $conf);
        }
      }
    }
    return $vals;
  }
  
  /**
   *
   * @param array $build
   * @param string $keySearch
   * @param string $styleImage
   * @return NULL|array
   */
  private function getFieldImgBg($build, $conf) {
    if (!$this->isFieldRenderArray($build)) {
      return NULL;
    }
    
    $elements = Element::children($build);
    if (empty($elements)) {
      return NULL;
    }
    $Attribute = new Attribute();
    foreach ($elements as $delta) {
      if (!empty($build[$delta]["#markup"])) {
        return $Attribute->setAttribute('style', 'background-image:url(' . $build[$delta]["#markup"] . ');');
      }
      else
        \Drupal::messenger()->addWarning("Le type de formatage doit etre image_url ");
    }
    return null;
  }
  
}
