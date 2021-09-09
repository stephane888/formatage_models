<?php

namespace Drupal\formatage_models\Plugin\Layout\Products;

use Drupal\formatage_models\Plugin\Layout\FormatageModels;


/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_product_teaser",
 *   label = @Translation(" Product teaser "),
 *   category = @Translation("Formatage Models"),
 *   description = "",
 *   path = "layouts/products",
 *   template = "formatage-models-product-teaser",
 *   library = "formatage_models/formatage-models-product-teaser",
 *   default_region = "titre",
 *   regions = {
 *     "image" = {
 *       "label" = @Translation(" Content image "),
 *     },
 *     "title" = {
 *       "label" = @Translation(" Content titre "),
 *     },
 *     "reference" = {
 *     	 "label" = @Translation(" Content reference "),
 *     },
 *     "smalldescription" = {
 *       "label" = @Translation(" Content small description "),
 *     },
 *     "price" = {
 *       "label" = @Translation(" Content price "),
 *     },
 *     "stocks" = {
 *       "label" = @Translation(" Content stocks "),
 *     },
 *     "button" = {
 *     		"label" = @Translation(" Content button "),
 *     }
 *   }
 * )
 */
class ProductTeaser extends FormatageModels
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
		$this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-product-teaser.png");
	}
}