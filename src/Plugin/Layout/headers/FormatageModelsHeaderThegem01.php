<?php

namespace Drupal\formatage_models\Plugin\Layout\headers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_header_thegem_01",
 *   label = @Translation(" Header Thegem 01 "),
 *   category = @Translation("Formatage Models [entete]"),
 *   path = "layouts/headers",
 *   template = "formatage-models-header-thegem-01",
 *   library = "formatage_models/formatage-models-header-thegem-01",
 *   default_region = "description",
 *   regions = {
 *     "icone" = {
 *       "label" = @Translation("icone"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "description" = {
 *       "label" = @Translation("Description")
 *     },
 *   }
 * )
 */
class FormatageModelsHeaderThegem01 extends FormatageModels {

    function defaultConfiguration() {
        return [
          'css' => 'bg-dark text-white',
          'infos' => [
            ['icon-f' => 'fas fa-map-marker-alt', 'text' => ' 19th Ave New York, NY 95822, USA'],
            ['icon-f' => 'fas fa-map-marker-alt', 'text' => ' +237 694-900-622 ']
          ],
          'social-items' => [
            ['icon-f' => 'fab fa-facebook-f', 'text' => '', 'url' => '#'],
            ['icon-f' => 'fab fa-linkedin-in', 'text' => '', 'url' => '#'],
            ['icon-f' => 'fab fa-twitter', 'text' => '', 'url' => '#'],
            ['icon-f' => 'fab fa-instagram', 'text' => '', 'url' => '#'],
            ['icon-f' => 'fab fa-pinterest', 'text' => '', 'url' => '#'],
            ['icon-f' => 'fab fa-youtube', 'text' => '', 'url' => '#'],
          ],
          'links' => [
            ['text' => 'Contactez nous', 'url' => '#'],
            ['text' => 'inscription', 'url' => '#'],
            ['text' => 'Connexion', 'url' => '#'],
          ],
          'button-action' => [
            ['text' => 'Contactez nous', 'url' => '#', 'btn-variant' => 'btn-info']
          ]
        ];
    }

}
