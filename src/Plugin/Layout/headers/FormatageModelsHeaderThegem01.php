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
class FormatageModelsHeaderThegem01 extends FormatageModels
{

	function defaultConfiguration()
	{
		return [
				'css' => 'bg-dark text-white',
				'load_libray' => true,
				'infos' => [
						'builder-form' => true,
						'info' => [
								'title' => 'Texte information'
						],
						'fields' => [
								'f1' => [
										'icon-f' => 'fas fa-map-marker-alt',
										'text' => ' 19th Ave New York, NY 95822, USA'
								],
								'f2' => [
										'icon-f' => 'fas fa-phone-alt',
										'text' => ' +237 694-900-622 '
								]
						]
				],
				'social-items' => [
						'builder-form' => true,
						'info' => [
								'title' => 'Social icone'
						],
						'fields' => [
								'f1' => [
										'icon-f' => 'fab fa-facebook-f',
										'text' => 'Facebook',
										'url' => '#'
								],
								'f2' => [
										'icon-f' => 'fab fa-linkedin-in',
										'text' => 'Linkedin',
										'url' => '#'
								],
								'f3' => [
										'icon-f' => 'fab fa-twitter',
										'text' => 'Twitter',
										'url' => '#'
								],
								'f4' => [
										'icon-f' => 'fab fa-instagram',
										'text' => 'Instagram',
										'url' => '#'
								],
								'f5' => [
										'icon-f' => 'fab fa-pinterest',
										'text' => 'Pinterest',
										'url' => '#'
								],
								'f6' => [
										'icon-f' => 'fab fa-youtube',
										'text' => 'Youtube',
										'url' => '#'
								]
						]
				],
				'links' => [
						'builder-form' => true,
						'info' => [
								'title' => 'Link action'
						],
						'fields' => [
								'f1' => [
										'text' => 'Contactez nous',
										'url' => '#'
								],
								'f2' => [
										'text' => 'inscription',
										'url' => '#'
								],
								'f3' => [
										'text' => 'Connexion',
										'url' => '#'
								]
						]
				],
				'button-action' => [
						'builder-form' => true,
						'info' => [
								'title' => 'Button action'
						],
						'fields' => [
								'f1' => [
										'text' => 'Join now',
										'url' => '#',
										'btn-variant' => 'btn btn-info'
								]
						]
				]
		];
	}
}
