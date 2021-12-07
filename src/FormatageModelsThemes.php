<?php
namespace Drupal\formatage_models;

use Drupal\Core\Field\FieldItemList;
use Drupal\block\Entity\Block;
use Drupal\Core\Template\Attribute;
use Drupal\Core\Field\BaseFieldDefinition;
use Drupal\file\Entity\File;
use Drupal\image\Entity\ImageStyle;
use Drupal\Core\Render\Element;

// use Stephane888\HtmlBootstrap\Traits\Portions;
class FormatageModelsThemes {

  // use Portions;

  /**
   * Returns the theme hook definition information.
   */
  public static function getThemeHooks() {
    $hooks['formatage_models__clean_field'] = [
      'preprocess functions' => [
        'template_preprocess_formatage_models__clean_field'
      ],
      // 'render element' => 'element',
      'variables' => [
        'content_all' => [],
        'tag_fields' => null,
        'tag_fields_attibutes' => [],
        'tag_field' => null,
        'tag_field_attibutes' => []
      ],
      'file' => 'themes/formatage_models__clean_field.theme.inc'
    ];
    $hooks['formatage_models__img_url'] = [
      'preprocess functions' => [
        'template_preprocess_formatage_models__img_url'
      ],
      // 'render element' => 'element',
      'variables' => [
        'content_all' => [],
        'first' => true,
        'attibutes' => []
      ],
      'file' => 'themes/formatage_models__img_url.theme.inc'
    ];
    //
    $hooks['formatage_models_swiper_views_style'] = [
      'preprocess functions' => [
        'template_preprocess_formatage_models_swiper_views_style'
      ],
      'file' => 'themes/formatage_models.theme.inc'
    ];
    $hooks['formatage_models_swiper_big_views_style'] = [
      'preprocess functions' => [
        'template_preprocess_formatage_models_swiper_big_views_style'
      ],
      'file' => 'themes/formatage_models.theme.inc'
    ];
    $hooks['formatage_models_swiper_unique'] = [
      'preprocess functions' => [
        'template_preprocess_formatage_models_swiper_unique'
      ],
      'file' => 'themes/formatage_models.theme.inc'
    ];
    //
    $hooks['formatage_models_swiper_big_views_style_v2'] = [
      'preprocess functions' => [
        'template_preprocess_formatage_models_swiper_big_views_style_v2'
      ],
      'file' => 'themes/formatage_models.theme.inc'
    ];
    // formatage_models_swiper_big_views_style_v3
    $hooks['formatage_models_swiper_big_views_style_v3'] = [
      'preprocess functions' => [
        'template_preprocess_formatage_models_swiper_big_views_style_v3'
      ],
      'file' => 'themes/formatage_models.theme.inc'
    ];
    return $hooks;
  }

  public static function ViewsGetValues(array &$vars) {

    /**
     *
     * @var \Drupal\views\ViewExecutable $view
     */
    $view = $vars['view'];
    
    $options = $view->style_plugin->options;
    $regions = $options['view_layouts_options'];
    // load librairie
    if (! empty($options['library']) && ! empty($options['library-file'])) {
      $vars['#attached']['library'][] = $options['library-file'];
    }

    if (! empty($options['view_layouts_options']) & $view->style_plugin->usesFields()) {
      foreach ($vars['rows'] as $row_index => $row) {
        $viewRow = $row['#view'];
        $viewRow->row_index = $row_index;
        $row['view'] = $viewRow;
        $row['row'] = $row['#row'];
        $row['options'] = $row['#options'];
        template_preprocess_views_view_fields($row);
        if (! empty($row['fields'])) {
          $vars['rows'][$row_index] = $row;
          foreach ($row['fields'] as $fieldname => $field) {
            /**
             *
             * @var \Drupal\views\Plugin\views\field\EntityField $fieldHanler
             */
            $fieldHanler = $field->handler;
            $vars['rows'][$row_index][$fieldname]['#markup'] = $fieldHanler->advancedRender($row['row']);
            // $vars['rows'][$row_index][$fieldname] = $field;
            // $fieldHanler->ren
          }
          /**
           * On selectionne une region et on y charge tous les champs qui sont
           * rattaché.
           */
          foreach ($regions as $region => $fieldnames) {
            // $vars['rows'][$row_index][$region] = [];
            foreach ($fieldnames as $fieldnameR) {
              if (! empty($vars['rows'][$row_index][$fieldnameR])) {
                $vars['rows'][$row_index][$region][] = $vars['rows'][$row_index][$fieldnameR];
              }
            }
          }
        }
      }
    }
    
  }

  /**
   * Permet de deplacer les layouts dans une autre region.
   */
  public static function ReInjectLayoutInAnotherRegion(Block $Block, $variables) {
   //
  }

  /**
   * Ajoute les attributs sur les balises.
   *
   * @param array $variables
   */
  public static function ApplyAttributes(array &$variables) {
    $attributes = new Attribute();
    // Ajout de la class space_bottom si necessaire
    /**
     *
     * @var \Drupal\Core\Layout\LayoutDefinition $layout
     */
    $layout = $variables['layout'];
    if (! empty($layout)) {
      if (str_contains($layout->getTemplatePath(), "layouts/sections")) {
        $attributes->addClass('space_bottom');
        $variables['attributes'] = $attributes;
      }

      if (! empty($variables['settings']['css'])) {
        $attributes->addClass(explode(" ", $variables['settings']['css']));
        $variables['attributes'] = $attributes;
      }

      foreach ($layout->getRegionNames() as $region) {
        $v = new Attribute();
        $v->addClass('layout-region');
        $variables['region_attributes'][$region] = $v;
        if (isset($variables['settings']['region_css_' . $region])) {
          $v->addClass($variables['settings']['region_css_' . $region]);
          $variables['region_attributes'][$region] = $v;
        }
      }
    }
  }

  /**
   * Ajoute le contenu definit dans fields[][] dans le rendu de la region,
   * ( pour eviter d'avoir une double sortie avec les données statiques et
   * dynamiques ).
   *
   * @param array $variables
   */
  public static function mergeContentAttributes(array &$variables) {
    if (! empty($variables['settings'])) {
      /**
       *
       * @var \Drupal\Core\Layout\LayoutDefinition $layout
       */
      $layout = $variables['layout'];
      $regions = $layout->getRegionNames();
      foreach ($variables['settings'] as $vals) {
        if (! empty($vals["builder-form"]) && ! empty($vals["fields"]) && ! empty($vals["info"]['loader']) && $vals["info"]['loader'] == "static") {
          foreach ($vals["fields"] as $regionName => $fields) {
            if (in_array($regionName, $regions)) {
              foreach ($fields as $key => $field) {
                if (! is_array($field))
                  throw new \Exception("Le champs " . $key . " doit avoir un rendu en array value and label");
                if (isset($field['value']) && ($field['value'] !== null && $field['value'] !== ""))
                  switch ($key) {
                    case 'text':
                      $variables['content'][$regionName][] = [
                        '#type' => 'inline_template',
                        '#template' => $field['value']
                        // '#context' => []
                      ];
                      break;
                    case 'text_html':
                      $variables['content'][$regionName][] = [
                        '#type' => 'inline_template',
                        '#template' => $field['value']
                      ];
                      break;
                    case 'url':
                      /**
                       *
                       * @var \Drupal\Core\Render\Element\Link
                       */
                      if (! empty($field['value']['text']))
                        $variables['content'][$regionName][] = [
                          '#type' => 'link',
                          '#title' => $field['value']['text'],
                          '#url' => \Drupal\Core\Url::fromUserInput($field['value']['link']),
                          '#attributes' => [
                            'class' => explode(" ", $field['value']['class'])
                          ]
                        ];
                      break;
                    default:
                      throw new \Exception("Le champs " . $key . " n'a pas de rendu ");
                      break;
                  }
                elseif (! empty($field['fids'])) {
                  // le tableau filds peut avoir des doublons.
                  $file = File::load($field['fids'][0]);
                  $image_style = $field['style'];
                  if ($file) {
                    if (! empty($image_style) && ImageStyle::load($image_style)) {
                      $uri = $file->getFileUri();
                    } else {
                      $uri = $file->getFileUri();
                    }
                    $variables['content'][$regionName][] = [
                      '#theme' => 'image_style',
                      // '#width' => $variables['width'],
                      // '#height' => $variables['height'],
                      '#attributes' => [
                        'class' => [
                          ! empty($field['class']) ? $field['class'] : ''
                        ]
                      ],
                      '#style_name' => $image_style,
                      '#uri' => $uri
                    ];
                  }
                }
              }
              // $variables['content'][$regionName][]=
            }
          }
        }
      }
    }
  }

  public static function addLayoutEditBlock(array &$variables) {
    $route_name = \Drupal::routeMatch()->getRouteName();
    if (\strripos($route_name, "layout_builder.") !== false) {
      $variables['show_region_edit'] = true;
    }
  }

  /**
   * Cette fonction permet de supprime le rendu du block;
   *
   * @param array $param
   */
  public static function removeBlock(array $param) {
    // on verifie que le theme est block
    if (! empty($param['#theme']) && $param['#theme'] == 'block') {
      return $param['content'];
    }
    return $param;
  }

  /**
   * permet de recuper l'url d'une image ou de tout autre fichier.
   */
  public static function getDatafieldsURL(FieldItemList $items) {
    $files = [];
    foreach ($items->getValue() as $value) {
      if (isset($value['target_id'])) {
        $files[] = self::getImageUrlByFid($value['target_id']);
      }
    }
    return $files;
  }

  public static function getImageUrlByFid($fid, $image_style = null) {
    if (! empty($fid)) {
      $file = \Drupal\file\Entity\File::load($fid);
      if ($file) {
        if (! empty($image_style) && \Drupal\image\Entity\ImageStyle::load($image_style)) {
          $img_url = \Drupal\image\Entity\ImageStyle::load($image_style)->buildUrl($file->getFileUri());
        } else {
          $img_url = file_create_url($file->getFileUri());
        }
        return [
          'img_url' => $img_url
        ];
      }
    }
    return [];
  }

  /**
   * permet de recuper les données dans un preprocess Field.
   */
  public static function getDatafields(FieldItemList $items) {
    return $items->getValue();
  }
}