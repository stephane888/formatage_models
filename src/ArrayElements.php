<?php

namespace Drupal\formatage_models;

use Drupal\Core\Render\Element;
use Drupal\Core\Template\Attribute;
use Drupal\Component\Utility\NestedArray;

trait ArrayElements {
  /**
   *
   * @var \Drupal\Core\Template\AttributeString
   */
  public $stringAttri = '';
  
  function getElements($build, Attribute $atttribute = null) {
    if (!$atttribute)
      $atttribute = new Attribute();
    
    $elements = [];
    
    // La condifition sur layout_builder_add_block permet un affichage par
    // defaut si on est en administration.
    if (is_array($build) && !isset($build['layout_builder_add_block'])) {
      // Cas des elemnts poseddent plusieurs taxo; ( marque, matiere ).
      $key_elements = Element::children($build);
      foreach ($key_elements as $key) {
        if (!empty($build[$key]['content'])) {
          $key_items = Element::children($build[$key]['content']);
          foreach ($key_items as $i) {
            if (!empty($build[$key]['content'][$i]["#view"]) && !empty($build[$key]['content'][$i]['#rows'][0]['#rows'])) {
              $rows = $build[$key]['content'][$i]['#rows'][0]['#rows'];
              foreach ($rows as $value) {
                $elements[] = [
                  '#type' => 'html_tag',
                  '#tag' => 'div',
                  '#attributes' => $atttribute->toArray(),
                  [
                    '' => $value
                  ]
                ];
              }
            }
            elseif (!empty($build[$key]['content'][$i]['#type']) && $build[$key]['content'][$i]['#type'] == 'link') {
              $build[$key]['content'][$i]['#attributes'] = $atttribute->toArray();
              $elements[] = $build[$key]['content'][$i];
            }
            else {
              // On applique le style
              if (!empty($build[$key]['content'][$i]['#attributes'])) {
                if (is_array($build[$key]['content'][$i]['#attributes']))
                  $build[$key]['content'][$i]['#attributes'] = NestedArray::mergeDeep($build[$key]['content'][$i]['#attributes'], $atttribute->toArray());
                else
                  \Drupal::messenger()->addWarning(' Style object definit pour ce rendu, veillez appliquez cela. ');
              }
              $elements[] = [
                '#type' => 'html_tag',
                '#tag' => 'div',
                '#attributes' => $atttribute->toArray(),
                [
                  '' => $build[$key]['content'][$i]
                ]
              ];
            }
          }
        }
      }
    }
    else
      $elements[] = $build;
    return $elements;
  }
  
}
