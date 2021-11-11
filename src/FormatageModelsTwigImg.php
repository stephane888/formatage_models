<?php
namespace Drupal\formatage_models;

use Drupal\Core\Render\Element;
use Drupal\Core\TypedData\TypedDataInterface;

trait FormatageModelsTwigImg
{

    /**
     * permet de recuperer un ou un enssemble d'image;
     *
     * @param array $build
     * @param array $keySearch
     *            begin: (index de debut), number: ( number dimage à retourner ).
     */
    public function getLayoutValuesImg(array $build, array $keySearch = [], $styleImage = null)
    {
        $vals = [];
        $key = 0;
        foreach ($build as $value) {
            if (is_array($value) && ! empty($value)) {
                if (! empty($value['#theme']) && $value['#theme'] == 'block' && ! empty($value['content'])) {
                    $vals[] = $this->getFieldImgValue($value['content'], $keySearch, $styleImage);
                }
            }
            $key ++;
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
    public function getFieldImgValue($build, $keySearch, $styleImage)
    {
        if (! $this->isFieldRenderArray($build)) {
            return NULL;
        }

        $elements = Element::children($build);
        if (empty($elements)) {
            return NULL;
        }

        $items = [];
        $i = 1;
        if (! empty($keySearch)) {
            foreach ($elements as $key => $delta) {
                if ($keySearch['number'] >= $i) {
                    if ($keySearch['begin'] <= ($key + 1)) {
                        $items[$delta] = $build[$delta];
                        if (is_string($styleImage) && isset($items[$delta]['#image_style'])) {
                            $items[$delta]['#image_style'] = $styleImage;
                        }
                        $i ++;
                    }
                }
            }
        } else
            foreach ($elements as $delta) {
                $items[$delta] = $build[$delta];
                if (is_string($styleImage) && isset($items[$delta]['#image_style'])) {
                    $items[$delta]['#image_style'] = $styleImage;
                }
            }

        return $items;
    }
}
