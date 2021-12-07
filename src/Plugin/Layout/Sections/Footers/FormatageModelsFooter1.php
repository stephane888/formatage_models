<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections\Footers;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_footer1",
 *   label = @Translation(" Footer 1 "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections/Footers",
 *   template = "formatage-models-footer1",
 *   library = "formatage_models/formatage-models-footer1",
 *   default_region = "topheader",
 *   regions = {
 *     "title1" = {
 *       "label" = @Translation(" Titre 1 "),
 *     },
 *     "description1" = {
 *       "label" = @Translation(" Description 1 "),
 *     },
 *     "title2" = {
 *       "label" = @Translation(" Titre 2 "),
 *     },
 *     "description2" = {
 *       "label" = @Translation(" Description 2 "),
 *     },
 *     "title3" = {
 *       "label" = @Translation(" Titre 3 "),
 *     },
 *     "description3" = {
 *       "label" = @Translation(" Description 3 "),
 *     },
 *     "textleft" = {
 *       "label" = @Translation(" Text left "),
 *     },
 *     "textright" = {
 *       "label" = @Translation(" Text right "),
 *     },
 *   }
 * )
 */
class FormatageModelsFooter1 extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/footers/formatage-models-footer1.png");
  }
  
  public function defaultConfiguration() {
    // $SiteConfig = $this->configFactory->getEditable("site.config");
   
    return parent::defaultConfiguration() + [
      'region_css_textleft' => 'col-md-8',
      'region_css_textright' => 'col-md-4',
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title1' => [
            'text' => [
              'label' => " Titre 1 ",
              'value' => "LESROISDELARENO.COM"
            ]
          ],
          'description1' => [
            'text_html' => [
              'label' => " Description 1 ",
              'value' => '
  <p>Les artisans de LESROISDELARENO.COM se déplacent dans toute l\'ILE DE FRANCE.</p>
  <h4>Suivez nous sur :</h4>
<div class="social-icons">
						<ul>
							<li><a href="#" class="twitter-alt" title="" data-rel="tooltip" data-placement="top" rel="tooltip" data-original-title="Twitter"><i class="icon-twitter"></i></a></li>
							<li><a href="#" class="facebook-alt" title="" data-rel="tooltip" data-placement="top" rel="tooltip" data-original-title="Facebook"><i class="icon-facebook"></i></a></li>
							<li><a href="https://www.instagram.com/lesroisdelareno.fr/" class="google-alt" title="" data-rel="tooltip" data-placement="top" rel="tooltip" data-original-title="Instagram"><i class="icon-instagram"></i></a></li>
							<li><a href="#" class="linkedin-alt" title="" data-rel="tooltip" data-placement="top" rel="tooltip" data-original-title="Linkedin"><i class="icon-linkedin"></i></a></li>
						</ul>
					</div>'
            ]
          ],
          'title2' => [
            'text' => [
              'label' => " Titre 2 ",
              'value' => " Liens utiles "
            ]
          ],
          'description2' => [
            'text_html' => [
              'label' => " Description 2 ",
              'value' => '<ul class="circled">
                                               <li class="useful-links">
                                                                                                        <a href="/fr/cgu" class="nav-link-0" data-drupal-link-system-path="node/15">CGU</a>
                                                                         </li>
                                               <li class="useful-links">
                                                                                                        <a href="/fr/form/renovation" class="nav-link-0" data-drupal-link-system-path="webform/renovation">Estimez votre devis</a>
                                                                         </li>
                                               <li class="useful-links">
                                                                                                        <a href="/fr/page-configurable/ecrivez-nous" class="nav-link-0" data-drupal-link-system-path="node/53">Ecrivez nous</a>
                                                                         </li>
                                               <li class="useful-links">
                                                                                                        <a href="/fr/page-configurable/le-blog" class="nav-link-0" data-drupal-link-system-path="node/34">Blog</a>
                                                                         </li>
                                               <li class="useful-links">
                                                                                                        <a href="/fr/form/candidature-spontanee" class="nav-link-0" data-drupal-link-system-path="webform/candidature_spontanee">LESROISDELARENO recrute</a>
                                                                         </li>
                     </ul>'
            ]
          ],
          'title3' => [
            'text' => [
              'label' => " Titre 3 ",
              'value' => " Contact "
            ]
          ],
          'description3' => [
            'text_html' => [
              'label' => " Description 3 ",
              'value' => '
         <div class="contact">
						<i class="icon-picons-pin-2"></i>
						<div class="content">
							<p class="bold  t-pad30">
								Dans toute l\'ILE DE FRANCE.
							</p>
							<p class="bold  t-pad30">
								N° SIREN : 893871210
							</p>
						</div>
					</div>
          <div class="contact">
						<i class="icon-picons-telephone-call"></i>
						<div class="content">
							<p class="bold  t-pad30">07 68 97 42 98</p>
							<p class="bold ">
								<a href="#">
									<span class="__cf_email__">lesroisdelareno@yahoo.com</span>
								</a>
							</p>
						</div>
					</div>
          <div class="timing t-mgr30">
						<p class="bold">Lundi - vendredi : ------------------- 9:00 - 18:00</p>
						<p class="bold">Samedi/Dimanche : -------------------- fermé
						</p>
					</div>
'
            ]
          ],
          'textleft' => [
            'text_html' => [
              'label' => " Text left ",
              'value' => " © 2021 LESROISDELARENO.COM. All rights reserved "
            ]
          ],
          'textright' => [
            'text_html' => [
              'label' => " Text right ",
              'value' => ' <p class="pl-3"> provided by <a href="#"> Wb-Universe </a> </p> '
            ]
          ]
        ]
      ]
    ];
  }
  
}