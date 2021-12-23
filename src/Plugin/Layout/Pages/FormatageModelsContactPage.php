<?php

namespace Drupal\formatage_models\Plugin\Layout\Pages;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;
use Drupal\core\Form\FormStateInterface;
use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;

/**
 * A page by TMC with layout
 *
 * @Layout(
 *  id = "formatage_models_contact_page",
 *  label = @Translation(" contact page by TMC "),
 *  category = @Translation("Formatage Models"),
 *  path = "layouts/pages",
 *  template = "formatage-models-contact-page",
 *  library = "formatage_models/formatage-models-contact-page",
 *  defaul_region = "body",
 *  regions = {
 *      "left_content" = {
 *          "label" = @Translation("left_content"),
 *      },
 *      "center_content" = {
 *          "label" = @Translation("center_content"),
 *      },
 *      "form_content" = {
 *          "label" = @Translation("form_content"),
 *      },
 *      "title" = {
 *          "label" = @Translation("title"),
 *      },
 *      "subtitle" = {
 *          "label" = @Translation(" subtitle "),
 *      },
 *      "socials" = {
 *          "label" = @Translation("message"),
 *      },
 *      "title_contact" = {
 *          "label" = @Translation(" Title contact "),
 *      },
 *      "title_contact_anime" = {
 *          "label" = @Translation(" Title contact text anime "),
 *      },
 *      "headercontact" = {
 *          "label" = @Translation(" Header contact "),
 *      },
 *      "textcontact" = {
 *          "label" = @Translation(" Text contact "),
 *      },
 *      "map" = {
 *          "label" = @Translation(" Map google ou autre "),
 *      },
 *      "form" = {
 *          "label" = @Translation(" Formulaire "),
 *      }
 *  }
 * )
 */
class FormatageModelsContactPage extends FormatageModelsPages {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/pages/formatage-models-contact-page.png");
  }
  
  public function defaultConfiguration() {
    return parent::defaultConfiguration() + [
      'css' => 'container',
      'noumel' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Content 1',
          'loader' => 'static'
        ],
        'fields' => [
          'title' => [
            'text' => [
              'label' => 'titre',
              'value' => "Paula Bianco Architecte"
            ]
          ],
          'subtitle' => [
            'text_html' => [
              'label' => " Sous titre ",
              'value' => " 103 Rue de la Dhuys <br> 93130 Noisy-le-Sec "
            ]
          ],
          'socials' => [
            'text_html' => [
              'label' => " Message ",
              'value' => ""
            ]
          ],
          'title_contact' => [
            'text' => [
              'label' => " Title contact ",
              'value' => " Vous souhaitez : "
            ]
          ],
          'title_contact_anime' => [
            'text_html' => [
              'label' => " Title contact anime ",
              'value' => ""
            ]
          ],
          'headercontact' => [
            'text_html' => [
              'label' => " Text contact ",
              'value' => " Contactez nous via notre formulaire, ou directement par : "
            ]
          ],
          'textcontact' => [
            'text_html' => [
              'label' => ' Description contact ',
              'value' => '<p> <strong> Email : </strong> <br>
<a href="mailto:architecte@paulabianco.net" class="">architecte@paulabianco.net</a></p> 
<p><strong>Tél : <a href="tel:+33148596469" class="">+33(0) 1 48 59 64 69</a></strong><br>
<strong>Portable : </strong><a href="tel:+33601931068" class="">+33(0) 6 01 93 10 68</a><br>
<strong>Fax : </strong> +33(0)1 48 59 64 69 </p>
'
            ]
          ],
          'map' => [
            'text_html' => [
              'label' => ' Map google ou autre ',
              'value' => "  "
            ]
          ],
          'form' => [
            'text_html' => [
              'label' => ' formulaire de contact ',
              'value' => ""
            ]
          ]
        ]
      ]
    ];
  }
  
}