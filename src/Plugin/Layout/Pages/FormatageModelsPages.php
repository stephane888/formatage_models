<?php

namespace Drupal\formatage_models\Plugin\Layout\Pages;

use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\formatage_models\Plugin\Layout\Sections\FormatageModelsSection;

class FormatageModelsPages extends FormatageModelsSection implements ContainerFactoryPluginInterface {
  
  public function build(array $regions) {
    $build = parent::build($regions);
    
    return $build;
  }
  
}