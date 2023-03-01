<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_fb_feature",
 *   label = @Translation(" FB feature "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-fb-feature",
 *   library = "formatage_models/formatage-models-fb-feature",
 *   default_region = "images",
 *   regions = {
 *     "title" = {
 *       "label" = @Translation("Title"),
 *     },
 *     "title_blocl1" = {
 *       "label" = @Translation("Title blocl1"),
 *     },
 *     "svg_blocl1" = {
 *       "label" = @Translation("Svg blocl1"),
 *     },
 *     "desc_blocl1" = {
 *       "label" = @Translation("Desc blocl1"),
 *     },
 *     "title_blocl2" = {
 *       "label" = @Translation("Title blocl2"),
 *     },
 *     "svg_blocl2" = {
 *       "label" = @Translation("Svg blocl2"),
 *     },
 *     "desc_blocl2" = {
 *       "label" = @Translation("Desc blocl2"),
 *     },
 *     "title_blocl3" = {
 *       "label" = @Translation("Title blocl3"),
 *     },
 *     "svg_blocl3" = {
 *       "label" = @Translation("Svg blocl3"),
 *     },
 *     "desc_blocl3" = {
 *       "label" = @Translation("Desc blocl3"),
 *     },
 *     "title_blocl4" = {
 *       "label" = @Translation("Title blocl4"),
 *     },
 *     "svg_blocl4" = {
 *       "label" = @Translation("Svg blocl4"),
 *     },
 *     "desc_blocl4" = {
 *       "label" = @Translation("Desc blocl4"),
 *     },
 *     "title_blocl5" = {
 *       "label" = @Translation("Title blocl5"),
 *     },
 *     "svg_blocl5" = {
 *       "label" = @Translation("Svg blocl5"),
 *     },
 *     "desc_blocl5" = {
 *       "label" = @Translation("Desc blocl5"),
 *     },
 *     "title_blocl6" = {
 *       "label" = @Translation("Title blocl6"),
 *     },
 *     "svg_blocl6" = {
 *       "label" = @Translation("Svg blocl6"),
 *     },
 *     "desc_blocl6" = {
 *       "label" = @Translation("Desc blocl6"),
 *     },
 *   }
 * )
 */
class FormatageModelsFbFeature extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-fb-feature.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    // TODO Auto-generated method stub
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }
  
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => '',
      'region_tag_title' => 'h2',
      'sf1' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title' => [
            'text' => [
              'label' => 'titre',
              'value' => "Bootstrap 4 Based"
            ]
          ],
          'title_blocl1' => [
            'text' => [
              'label' => 'titre',
              'value' => "Bootstrap 4 Based"
            ]
          ],
          'svg_blocl1' => [
            'text_html' => [
              'label' => 'Svg',
              'value' => '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
									<g transform="rotate(-90 12 12)">
										<path fill="currentColor" d="M6 15c-.83 0-1.58.34-2.12.88C2.7 17.06 2 22 2 22s4.94-.7 6.12-1.88A2.996 2.996 0 0 0 6 15zm.71 3.71c-.28.28-2.17.76-2.17.76s.47-1.88.76-2.17c.17-.19.42-.3.7-.3a1.003 1.003 0 0 1 .71 1.71zm10.71-5.06c6.36-6.36 4.24-11.31 4.24-11.31S16.71.22 10.35 6.58l-2.49-.5a2.03 2.03 0 0 0-1.81.55L2 10.69l5 2.14L11.17 17l2.14 5l4.05-4.05c.47-.47.68-1.15.55-1.81l-.49-2.49zM7.41 10.83l-1.91-.82l1.97-1.97l1.44.29c-.57.83-1.08 1.7-1.5 2.5zm6.58 7.67l-.82-1.91c.8-.42 1.67-.93 2.49-1.5l.29 1.44l-1.96 1.97zM16 12.24c-1.32 1.32-3.38 2.4-4.04 2.73l-2.93-2.93c.32-.65 1.4-2.71 2.73-4.04c4.68-4.68 8.23-3.99 8.23-3.99s.69 3.55-3.99 8.23zM15 11c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2z"></path>
									</g>
								</svg>'
            ]
          ],
          'desc_blocl1' => [
            'text_html' => [
              'label' => 'Description',
              'value' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            ]
          ]
        ]
      ],
      'sf2' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title_blocl2' => [
            'text' => [
              'label' => 'titre',
              'value' => "Bootstrap 4 Based"
            ]
          ],
          'svg_blocl2' => [
            'text_html' => [
              'label' => 'Svg',
              'value' => '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32">
									<path fill="currentColor" d="M6 8a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-8v-2h8a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1H7c-.345 0-.68.044-1 .126V8Zm23 17H17v-2h12a1 1 0 1 1 0 2ZM9 25a1 1 0 1 0 0-2a1 1 0 0 0 0 2ZM3 13a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V13Zm3-1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V13a1 1 0 0 0-1-1H6Z"></path>
								</svg>'
            ]
          ],
          'desc_blocl2' => [
            'text_html' => [
              'label' => 'Description',
              'value' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            ]
          ]
        ]
      ],
      'sf3' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title_blocl3' => [
            'text' => [
              'label' => 'titre',
              'value' => "Bootstrap 4 Based"
            ]
          ],
          'svg_blocl3' => [
            'text_html' => [
              'label' => 'Svg',
              'value' => '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
									<path fill="currentColor" d="m924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1c0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1l74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3l-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2l-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9l-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5l-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5c0-15.3 1.2-30.6 3.7-45.5l6.5-40l-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2l31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3l17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97l38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8l92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176s176-78.8 176-176s-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"></path>
								</svg>'
            ]
          ],
          'desc_blocl3' => [
            'text_html' => [
              'label' => 'Description',
              'value' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            ]
          ]
        ]
      ],
      'sf4' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title_blocl4' => [
            'text' => [
              'label' => 'titre',
              'value' => "Bootstrap 4 Based"
            ]
          ],
          'svg_blocl4' => [
            'text_html' => [
              'label' => 'Svg',
              'value' => '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
									<path fill="currentColor" d="M12 3c-4.8 0-9 3.86-9 9c0 2.12.74 4.07 1.97 5.61L3 19.59L4.41 21l1.97-1.97A9.012 9.012 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3h-9zm7 9c0 1.87-.73 3.63-2.05 4.95A6.96 6.96 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-1.9.74-3.68 2.1-4.99A6.94 6.94 0 0 1 12 5h7v7z"></path>
									<path fill="currentColor" d="m8.46 12.63l4.05.4l-2.44 3.33c-.11.16-.1.38.04.52c.15.15.4.16.56.01l5.16-4.63c.33-.3.15-.85-.3-.89l-4.05-.4l2.44-3.33c.11-.16.1-.38-.04-.52a.405.405 0 0 0-.56-.01l-5.16 4.63c-.32.3-.14.85.3.89z"></path>
								</svg>'
            ]
          ],
          'desc_blocl4' => [
            'text_html' => [
              'label' => 'Description',
              'value' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            ]
          ]
        ]
      ],
      'sf5' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title_blocl5' => [
            'text' => [
              'label' => 'titre',
              'value' => "Bootstrap 4 Based"
            ]
          ],
          'svg_blocl5' => [
            'text_html' => [
              'label' => 'Svg',
              'value' => '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 20 20">
									<path fill="currentColor" d="M10.505 3.117a1 1 0 0 0-1.011 0l-6.01 3.52a1 1 0 0 0 .003 1.726l6.009 3.502a1 1 0 0 0 1.007 0l6.009-3.502a1 1 0 0 0 .001-1.727l-6.009-3.52ZM9.494 4.276a1 1 0 0 1 1.01 0l5.504 3.223l-5.505 3.209a1 1 0 0 1-1.007 0L3.99 7.499l5.504-3.223ZM3.07 9.65l6.438 3.623a1 1 0 0 0 .98 0l6.438-3.623a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Zm0 2.453l6.438 3.622a1 1 0 0 0 .98 0l6.438-3.622a1 1 0 0 1-.415 1.26l-6.01 3.502a1 1 0 0 1-1.006 0l-6.01-3.502a1 1 0 0 1-.415-1.26Z"></path>
								</svg>'
            ]
          ],
          'desc_blocl5' => [
            'text_html' => [
              'label' => 'Description',
              'value' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            ]
          ]
        ]
      ],
      'sf6' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title_blocl6' => [
            'text' => [
              'label' => 'titre',
              'value' => "Bootstrap 4 Based"
            ]
          ],
          'svg_blocl6' => [
            'text_html' => [
              'label' => 'Svg',
              'value' => '<svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="50" height="50" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
									<path fill="currentColor" d="M12 3c-4.8 0-9 3.86-9 9c0 2.12.74 4.07 1.97 5.61L3 19.59L4.41 21l1.97-1.97A9.012 9.012 0 0 0 12 21c2.3 0 4.61-.88 6.36-2.64A8.95 8.95 0 0 0 21 12V3h-9zm7 9c0 1.87-.73 3.63-2.05 4.95A6.96 6.96 0 0 1 12 19c-3.86 0-7-3.14-7-7c0-1.9.74-3.68 2.1-4.99A6.94 6.94 0 0 1 12 5h7v7z"></path>
									<path fill="currentColor" d="m8.46 12.63l4.05.4l-2.44 3.33c-.11.16-.1.38.04.52c.15.15.4.16.56.01l5.16-4.63c.33-.3.15-.85-.3-.89l-4.05-.4l2.44-3.33c.11-.16.1-.38-.04-.52a.405.405 0 0 0-.56-.01l-5.16 4.63c-.32.3-.14.85.3.89z"></path>
								</svg>'
            ]
          ],
          'desc_blocl6' => [
            'text_html' => [
              'label' => 'Description',
              'value' => "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            ]
          ]
        ]
      ]
    ];
  }
  
}
