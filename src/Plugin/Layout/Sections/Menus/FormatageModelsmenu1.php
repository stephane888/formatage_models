<?php
namespace Drupal\formatage_models\Plugin\Layout\Sections\Menus;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_menu1",
 *   label = @Translation(" Menu 1 (modele) "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections/menus",
 *   template = "formatage-models-menu1",
 *   default_region = "site_main_menu",
 *   regions = {
 *     "site_main_menu" = {
 *       "label" = @Translation("menu principal site "),
 *     }
 *   }
 * )
 */
class FormatageModelsmenu1 extends FormatageModelsSection
{

    /**
     *
     * {@inheritdoc}
     * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
     */
    public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager)
    {
        // TODO Auto-generated method stub
        parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
        $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/formatage-models-menu1.png");
    }

    public function defaultConfiguration()
    {
        // $SiteConfig = $this->configFactory->getEditable("site.config");
       
        return parent::defaultConfiguration() + [
            'css' => 'bg-light'
        ];
    }
}