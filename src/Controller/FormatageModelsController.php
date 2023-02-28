<?php

namespace Drupal\formatage_models\Controller;

use Drupal\Core\Controller\ControllerBase;
use Stephane888\DrupalUtility\HttpResponse;
use Stephane888\Debug\ExceptionDebug;
use Stephane888\Debug\ExceptionExtractMessage;
use Symfony\Component\HttpFoundation\Request;
use Drupal\Component\Serialization\Json;

/**
 * Returns responses for formatage models routes.
 */
class FormatageModelsController extends ControllerBase {
  
  /**
   * Cree les nouveaux entitées et duplique les entites existant.
   *
   * @param Request $Request
   * @param string $entity_type_id
   * @return \Symfony\Component\HttpFoundation\JsonResponse
   */
  public function SaveEntity(Request $Request, $entity_type_id) {
    $entity_type = $this->entityTypeManager()->getStorage($entity_type_id);
    $values = Json::decode($Request->getContent());
    //
    if ($entity_type && !empty($values)) {
      try {
        /**
         */
        $entity = $entity_type->create($values);
        if ($entity->id()) {
          $OldEntity = $this->entityTypeManager()->getStorage($entity_type_id)->load($entity->id());
          if (!empty($OldEntity)) {
            foreach ($values as $k => $value) {
              $OldEntity->set($k, $value);
            }
            $OldEntity->save();
            return HttpResponse::response($OldEntity->toArray());
          }
        }
        else {
          $entity->save();
          return HttpResponse::response($entity->toArray());
        }
        throw new \Exception("Erreur d'execution");
      }
      catch (\Exception $e) {
        $user = \Drupal::currentUser();
        $errors = ExceptionExtractMessage::errorAllToString($e);
        $errors .= '<br> error create : ' . $entity_type_id;
        $errors .= '<br> current user id : ' . $user->id();
        $this->getLogger('formatage_models')->critical($e->getMessage() . '<br>' . $errors);
        return HttpResponse::response(ExceptionExtractMessage::errorAll($e), 400, $e->getMessage());
      }
    }
    else {
      $this->getLogger('formatage_models')->critical(" impossible de creer l'entité : " . $entity_type_id);
      return HttpResponse::response([], 400, "erreur inconnu");
    }
  }
  
}
