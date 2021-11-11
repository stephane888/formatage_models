<?php

namespace Drupal\formatage_models\Plugin\Layout\Teasers;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;


/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_realisation_big",
 *   label = @Translation(" Realisation card big "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/teasers",
 *   template = "formatage-models-realisation-big",
 *   library = "formatage_models/formatage-models-realisation-big",
 *   default_region = "titre",
 *   regions = {
 *     "bgimage" = {
 *       "label" = @Translation("Bg Image"),
 *     },
 *     "date" = {
 *       "label" = @Translation("Date"),
 *     },
 *     "titre" = {
 *       "label" = @Translation("Titre")
 *     },
 *     "url" = {
 *       "label" = @Translation("Url sur l'affichage")
 *     },
 *     "listes" = {
 *     	 "label" = @Translation("Listes")
 *     }
 *   }
 * )
 */
class FormatageModelsRealisationBig extends FormatageModels
{

	/**
	 *
	 * {@inheritdoc}
	 * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
	 */
	public function __construct(array $configuration, $plugin_id, $plugin_definition)
	{
		// TODO Auto-generated method stub
		parent::__construct($configuration, $plugin_id, $plugin_definition);
		$this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-realisation-big.png");
	}
}