<?php

namespace Drupal\formatage_models\Plugin\views\display;

use Drupal\views\Plugin\views\display\Page;
use Drupal\Core\Form\FormStateInterface;

/**
 * The plugin that handles a full page.
 *
 * @ingroup views_display_plugins
 *
 * @ViewsDisplay(
 *   id = "page_render",
 *   title = @Translation("Page render"),
 *   help = @Translation("Display the view as a page, with a URL and menu links."),
 *   uses_menu_links = TRUE,
 *   uses_route = TRUE,
 *   contextual_links_locations = {"page"},
 *   theme = "views_view_render_page",
 *   admin = @Translation("Page")
 * )
 */
class PageRender extends Page {
  
  /**
   *
   * {@inheritdoc}
   */
  protected function defineOptions() {
    $options = parent::defineOptions();
    $options['view_row_css'] = [
      'default' => ''
    ];
    $options['view_header_css'] = [
      'default' => ''
    ];
    $options['view_form_css'] = [
      'default' => ''
    ];
    $options['view_footer_css'] = [
      'default' => ''
    ];
    
    return $options;
  }
  
  /**
   * Permet d'afficher le resumer.
   * Provide the summary for page options in the views UI.
   *
   * This output is returned as an array.
   */
  public function optionsSummary(&$categories, &$options) {
    parent::optionsSummary($categories, $options);
    $view_row_css = trim($this->getOption('view_row_css'));
    if (!$view_row_css) {
      $view_row_css = $this->t('None');
    }
    $options['view_row_css'] = [
      'category' => 'other',
      'title' => $this->t(' view rows css '),
      'value' => $view_row_css
    ];
    //
    $key = 'view_header_css';
    $css = trim($this->getOption($key));
    if (!$css) {
      $css = $this->t('None');
    }
    $options[$key] = [
      'category' => 'other',
      'title' => $this->t(' View header css '),
      'value' => $css
    ];
    //
    $key = 'view_form_css';
    $css = trim($this->getOption($key));
    if (!$css) {
      $css = $this->t('None');
    }
    $options[$key] = [
      'category' => 'other',
      'title' => $this->t(' View form css '),
      'value' => $css
    ];
    //
    $key = 'view_footer_css';
    $css = trim($this->getOption($key));
    if (!$css) {
      $css = $this->t('None');
    }
    $options[$key] = [
      'category' => 'other',
      'title' => $this->t(' View footter css '),
      'value' => $css
    ];
  }
  
  /**
   * Provide the default form for setting options.
   */
  public function buildOptionsForm(&$form, FormStateInterface $form_state) {
    parent::buildOptionsForm($form, $form_state);
    switch ($form_state->get('section')) {
      case 'view_row_css':
        $form['#title'] .= $this->t(' view css rows ');
        $form['view_row_css'] = [
          '#title' => $this->t(' view css rows '),
          '#type' => 'textfield',
          '#default_value' => $this->getOption('view_row_css')
        ];
        break;
      //
      case 'view_header_css':
        $form['#title'] .= $this->t(' view css header ');
        $form['view_header_css'] = [
          '#title' => $this->t(' view css header '),
          '#type' => 'textfield',
          '#default_value' => $this->getOption('view_header_css')
        ];
        break;
      //
      case 'view_form_css':
        $form['#title'] .= $this->t(' view css form ');
        $form['view_form_css'] = [
          '#title' => $this->t(' view css form '),
          '#type' => 'textfield',
          '#default_value' => $this->getOption('view_form_css')
        ];
        break;
      //
      case 'view_footer_css':
        $form['#title'] .= $this->t(' view css footer ');
        $form['view_footer_css'] = [
          '#title' => $this->t(' view css footer '),
          '#type' => 'textfield',
          '#default_value' => $this->getOption('view_footer_css')
        ];
        break;
    }
  }
  
  /**
   * Perform any necessary changes to the form values prior to storage.
   *
   * There is no need for this function to actually store the data.
   */
  public function submitOptionsForm(&$form, FormStateInterface $form_state) {
    parent::submitOptionsForm($form, $form_state);
    $section = $form_state->get('section');
    switch ($section) {
      case 'view_row_css':
      case 'view_header_css':
      case 'view_form_css':
      case 'view_footer_css':
        $this->setOption($section, $form_state->getValue($section));
        break;
    }
  }
  
}