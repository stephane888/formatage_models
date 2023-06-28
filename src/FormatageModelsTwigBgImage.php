<?php

namespace Drupal\formatage_models;

use Drupal\Core\Render\Element;
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
  public function getLayoutBgImage($build) {
    $vals = null;
    $conf = null;
    if (!is_array($build)) {
      return $build;
    }
    
    foreach ($build as $value) {
      if (is_array($value) && !empty($value)) {
        if (!empty($value['#theme'])) {
          if ($value['#theme'] == 'block' && !empty($value['content'])) {
            
            if (!empty($vals['#configuration']))
              $conf = $vals['#configuration'];
            return $this->getFieldImgBg($value['content'], $conf);
          }
          elseif ($value['#theme'] == 'image' && !empty($value['#uri'])) {
            $Attribute = new Attribute();
            $url = \Drupal::service('file_url_generator')->generateAbsoluteString($value['#uri']);
            return $Attribute->setAttribute('style', 'background-image:url(' . $url . ');');
          }
        }
      }
    }
    //
    return $vals;
  }
  
  /**
   *
   * @param array $build
   * @param string $keySearch
   * @param string $styleImage
   * @return NULL|array
   */
  private function getFieldImgBg($build, $conf = null) {
    if (!$this->isFieldRenderArray($build)) {
      return NULL;
    }
    // dump($build);
    $elements = Element::children($build);
    if (empty($elements)) {
      return NULL;
    }
    $Attribute = new Attribute();
    foreach ($elements as $delta) {
      if (!empty($build[$delta]["#markup"])) {
        return $Attribute->setAttribute('style', 'background-image:url(' . $build[$delta]["#markup"] . ');');
      }
      elseif ($build[$delta]['#theme'] == 'responsive_image_formatter') {
        $Attribute->addClass('lazyload');
        return $Attribute->setAttribute('data-bgset', $this->renderResponssiveImage($build[$delta]['#item'], $build[$delta]['#responsive_image_style_id']));
      }
      else {
        \Drupal::messenger()->addWarning(" Le type de formatage doit etre image_url ");
      }
    }
    return null;
  }
  
  private function renderResponssiveImage(\Drupal\image\Plugin\Field\FieldType\ImageItem $item, $responsive_image_style_id) {
    $responsive_image_style = \Drupal\responsive_image\Entity\ResponsiveImageStyle::load($responsive_image_style_id);
    if ($responsive_image_style) {
      $image_style_mappings = $responsive_image_style->getImageStyleMappings();
      // $FallbackImageStyle = $responsive_image_style->getFallbackImageStyle();
      /**
       *
       * @var \Drupal\breakpoint\BreakpointManagerInterface $breakpointManager
       */
      $breakpointManager = \Drupal::service('breakpoint.manager');
      $breakpoints = array_reverse($breakpointManager->getBreakpointsByGroup($responsive_image_style->getBreakpointGroup()));
      
      //
      $target_id = $item->getValue();
      $dataBgset = null;
      if (!empty($target_id[0])) {
        $target_id = $target_id[0];
      }
      //
      if ($target_id) {
        $file = \Drupal\file\Entity\File::load($target_id['target_id']);
        if ($file) {
          foreach ($image_style_mappings as $image_style_mapping) {
            $urlImage = \Drupal\image\Entity\ImageStyle::load($image_style_mapping['image_mapping'])->buildUrl($file->getFileUri());
            /**
             *
             * @var \Drupal\breakpoint\Breakpoint $breakpoint
             */
            $breakpoint = $breakpoints[$image_style_mapping['breakpoint_id']];
            $mediaQuery = $breakpoint->getMediaQuery();
            if (!$dataBgset) {
              if ($mediaQuery)
                $dataBgset = $urlImage . ' [(' . $mediaQuery . ')]';
              else
                $dataBgset .= $urlImage;
            }
            else {
              $dataBgset .= ' | ';
              if ($mediaQuery)
                $dataBgset .= $urlImage . ' [(' . $mediaQuery . ')]';
              else
                $dataBgset .= $urlImage;
            }
          }
        }
      }
      return $dataBgset;
    }
    else
      \Drupal::messenger()->addWarning(" responsive_image_style_id not definie ");
  }
  
}
