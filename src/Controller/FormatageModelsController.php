<?php

namespace Drupal\formatage_models\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Returns responses for formatage models routes.
 */
class FormatageModelsController extends ControllerBase {

  /**
   * Builds the response.
   */
  public function build() {    

    $build['content'] = [
      '#type' => 'item',
      '#markup' => $this->t('It works!'),
    ];

    return $build;
  }

}
