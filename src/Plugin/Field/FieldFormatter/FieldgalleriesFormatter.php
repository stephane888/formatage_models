<?php

namespace Drupal\formatage_models\Plugin\Field\FieldFormatter;

use Drupal\Core\Field\FieldItemListInterface;
// use Drupal\Core\Field\FormatterBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\image\Plugin\Field\FieldFormatter\ImageFormatter;

/**
 * Plugin implementation of the 'FieldGalleries' formatter.
 *
 * @FieldFormatter(
 *   id = "formatage_models_fieldgalleries",
 *   label = @Translation("FieldGalleries"),
 *   field_types = {
 *     "image"
 *   },
 *   quickedit = {
 *     "editor" = "image"
 *   }
 * )
 */
class FieldgalleriesFormatter extends ImageFormatter {
  
  /**
   *
   * {@inheritdoc}
   */
  public static function defaultSettings() {
    return [
      'gabarit' => 'm-1-2-1',
      'gabarit_lists' => [
        'm-1-2-1' => 'm-1-2-1',
        'm-1-3-1' => 'm-1-3-1'
      ],
      'image_style_small' => ''
    ] + parent::defaultSettings();
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsForm(array $form, FormStateInterface $form_state) {
    $elements = parent::settingsForm($form, $form_state);
    $elements['image_style']['#title'] = t('Image style big');
    
    //
    $image_styles = image_style_options(FALSE);
    $conf = $this->getSettings();
    $elements['image_style_small'] = [
      '#title' => t('Image style small'),
      '#type' => 'select',
      '#default_value' => $conf['image_style_small'],
      '#empty_option' => t('None (original image)'),
      '#options' => $image_styles
    ];
    
    //
    $elements['gabarit'] = [
      '#type' => 'select',
      '#title' => $this->t('gabarit'),
      '#default_value' => $conf['gabarit'],
      '#options' => $conf['gabarit_lists']
    ];
    
    //
    return $elements;
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function settingsSummary() {
    $summary[] = $this->t('gabarit: @gabarit', [
      '@gabarit' => $this->getSetting('gabarit')
    ]);
    return array_merge($summary, parent::settingsSummary());
  }
  
  /**
   *
   * {@inheritdoc}
   */
  public function viewElements(FieldItemListInterface $items, $langcode) {
    $elements = parent::viewElements($items, $langcode);
    $conf = $this->getSettings();
    if ($conf['gabarit'] == 'm-1-2-1') {
      $paire = 2;
      $impaire = 1;
    }
    $tmp_paire = 0;
    $tmp_impaire = 0;
    $nombre = count($elements);
    $gabarits = [];
    //
    for ($i = 0; $i < $nombre; $i++) {
      if ($tmp_impaire < $impaire) {
        $gabarits[] = $this->addImageInRow($impaire, $i, $elements);
        $tmp_impaire = $impaire;
        $tmp_paire = 0;
      }
      elseif ($tmp_paire < $paire) {
        $gabarits[] = $this->addImageInRow($paire, $i, $elements);
        $tmp_impaire = 0;
        $tmp_paire = $paire;
      }
    }
    //
    // rendu m-1-2-1
    // if ($conf['gabarit'] == 'm-1-2-1') {
    // }
    // dump($conf);
    // foreach ($items as $delta => $item) {
    // $element[$delta] = [
    // '#markup' => $item->value
    // ];
    // }
    //
    return [
      '#theme' => 'formatage_models_fieldgalleries',
      'items' => $gabarits,
      '#conf' => $conf
    ];
  }
  
  /**
   *
   * @param integer $nbre_img
   * @param integer $i
   * @param array $allItems
   * @return string|string[]|string[][]
   */
  protected function addImageInRow($nbre_img, &$i, $allItems) {
    $row = [];
    $n = count($allItems);
    if ($nbre_img == 2) {
      if (($n - ($nbre_img + $i)) >= 0) {
        //
        $row[] = [
          '#type' => 'html_tag',
          '#tag' => 'div',
          '#attributes' => [
            'class' => [
              'col-md-6',
              'justify-content-center',
              'd-flex',
              'align-content-center',
              'px-1',
              'pb-1'
            ]
          ],
          $allItems[$i + $nbre_img - 2]
        ];
        //
        $row[] = [
          '#type' => 'html_tag',
          '#tag' => 'div',
          '#attributes' => [
            'class' => [
              'col-md-6',
              'justify-content-center',
              'd-flex',
              'align-content-center',
              'px-1',
              'pb-1'
            ]
          ],
          [
            $allItems[$i + $nbre_img - 1]
          ]
        ];
        $i++;
      }
      else
        $nbre_img = 1;
    }
    if ($nbre_img == 1) {
      // $allItems[$i + $nbre_img - 1];
      $row = [
        '#type' => 'html_tag',
        '#tag' => 'div',
        '#attributes' => [
          'class' => [
            'col-md-12',
            'justify-content-center',
            'd-flex',
            'align-content-center',
            'px-1',
            'pb-1'
          ]
        ],
        $allItems[$i + $nbre_img - 1]
      ];
    }
    return $row;
  }
  
}
