<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_hero_thegem_18",
 *   label = @Translation(" Hero Thegem 18 "),
 *   category = @Translation("Formatage Models [entete]"),
 *   path = "layouts/sections",
 *   template = "formatage-models-hero-thegem-18",
 *   library = "formatage_models/formatage-models-hero-thegem-18",
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
class FormatageModelsHeroThegem18 extends FormatageModels {
	function defaultConfiguration(){
		return [
				'load_libray'=> true,
				'infos'=> [
						'builder-form'=> true,
						'info'=> [
								'title'=> 'Texte information'
						],
						'fields'=> [
								'title'=> [
										'text_html'=> ' 19th Ave New York, NY 95822, USA'
								],
								'description'=> [
										'text_html'=> ' 19th Ave New York, NY 95822, USA'
								],
								'bg_image'=> [
										'img_bg'=> [
												'fid'=> '',
												'url'=> ''
										]
								]
						]
				]
		];
	}
}
