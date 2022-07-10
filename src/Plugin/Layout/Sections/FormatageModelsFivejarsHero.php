<?php

namespace Drupal\formatage_models\Plugin\Layout\Sections;

use Drupal\bootstrap_styles\StylesGroup\StylesGroupManager;
use Drupal\formatage_models\FormatageModelsThemes;

/**
 * A very advanced custom layout.
 *
 * @Layout(
 *   id = "formatage_models_fivejars_hero",
 *   label = @Translation(" fivejars Hero "),
 *   category = @Translation("Formatage Models"),
 *   path = "layouts/sections",
 *   template = "formatage-models-fivejars-hero",
 *   library = "formatage_models/formatage-models-fivejars-hero",
 *   regions = {
 *     "imagebg" = {
 *       "label" = @Translation(" Image en arriere plan "),
 *     },
 *     "title" = {
 *       "label" = @Translation("title"),
 *     },
 *     "sub_title" = {
 *       "label" = @Translation("sub title"),
 *     },
 *     "call_action" = {
 *       "label" = @Translation("Call to action"),
 *     },
 *     "svg" = {
 *       "label" = @Translation("svg"),
 *     },
 *   }
 * )
 */
class FormatageModelsFivejarsHero extends FormatageModelsSection {
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::__construct()
   */
  public function __construct(array $configuration, $plugin_id, $plugin_definition, StylesGroupManager $styles_group_manager) {
    // TODO Auto-generated method stub
    parent::__construct($configuration, $plugin_id, $plugin_definition, $styles_group_manager);
    $this->pluginDefinition->set('icon', drupal_get_path('module', 'formatage_models') . "/icones/sections/formatage-models-fivejars-hero.png");
  }
  
  /**
   *
   * {@inheritdoc}
   * @see \Drupal\formatage_models\Plugin\Layout\FormatageModels::build()
   */
  public function build(array $regions) {
    // TODO Auto-generated method stub
    $build = parent::build($regions);
    FormatageModelsThemes::formatSettingValues($build);
    return $build;
  }
  
  public function defaultConfiguration() {
    return [
      'css' => 'd-flex align-items-center text-white text-center',
      'region_tag_title' => 'h2',
      'sf' => [
        'builder-form' => true,
        'info' => [
          'title' => 'Contenu',
          'loader' => 'static'
        ],
        'fields' => [
          'title' => [
            'text_html' => [
              'label' => 'titre',
              'value' => "Ensemble, bâtissons le digitale pour grandir durablement"
            ]
          ],
          'sub_title' => [
            'text_html' => [
              'label' => 'titre',
              'value' => "Nous concevons, élaborons des stratégies et construisons des produits numériques et des solutions de pointe pour les entreprises leaders du secteur avec un impact mesurable."
            ]
          ],
          'call_action' => [
            'url' => [
              'label' => 'Call to action',
              'value' => [
                'class' => 'btn btn-outline-light btn-lg',
                'text' => 'Contacter nous'
              ]
            ]
          ],
          'svg' => [
            'text_html' => [
              'label' => 'Description',
              'value' => '<svg xmlns="http://www.w3.org/2000/svg" width="687.375" height="950.422" viewBox="0 0 687.375 950.422">
    <g id="Rigt_decoration" data-name="Rigt decoration" transform="translate(-2541.179)">
      <path id="Path_6468" data-name="Path 6468" d="M3228.052,58.1c1.057,24.837-357.23,1.057-420.643,156.42s-7.927,213.492-52.845,347.189c-30.156,89.76-116.049,98.3-190.356,126.037-35.282,13.172-27.032,65.266,10.593,66.933,341.638,15.134,492.7,158.427,609.391,192.8,77.153,22.723,48.353-121.279-67.377-274.528S3126.062.5,3228.052.5" transform="translate(0 0)" fill="none" stroke="#e7a32c" stroke-miterlimit="10" stroke-width="1" opacity="0.2"></path>
      <path id="Path_6469" data-name="Path 6469" d="M3266.472,99.915c.544,21.445-337.131-1.2-396.846,147.492-46.981,116.985-23.337,176.134-32.689,260.485a339.213,339.213,0,0,1-15.023,68.258c-27.655,84.978-107.656,94.335-177.238,121.349-33.01,12.763-25.656,61.637,8.929,63.655,313.879,18.566,446.813,153.855,560.89,186.277,74.48,21.167,58.729-96.581-34.17-233.254-7.073-10.427-14.614-20.893-22.685-31.287-47-60.529-65.683-168.272-51.736-282.754,20.633-174.268,104.871-347.7,160.568-353.706" transform="translate(-38.533 -21.658)" fill="none" stroke="#e9a72e" stroke-miterlimit="10" stroke-width="1" opacity="0.257"></path>
      <path id="Path_6470" data-name="Path 6470" d="M3304.888,141.729c.031,18.053-317.038-3.473-373.049,138.562C2888.674,389.756,2910.446,446,2902.7,526.168a315.235,315.235,0,0,1-13.441,64.421c-25.155,80.2-99.263,90.373-164.122,116.661-30.736,12.353-24.281,58.007,7.267,60.378,286.12,22,400.962,149.2,512.39,179.756,77.221,21.177,65.594-91.224-23.981-223.969-6.9-10.271-14.317-20.518-22.353-30.584-48.342-60.552-77.128-158.474-62.726-267.39,21.73-164.325,119.487-321.08,169.151-333.084" transform="translate(-77.063 -43.315)" fill="none" stroke="#eaaa30" stroke-miterlimit="10" stroke-width="1" opacity="0.314"></path>
      <path id="Path_6471" data-name="Path 6471" d="M3343.309,183.544c-.482,14.662-296.954-5.755-349.251,129.634-39.373,101.931-19.225,155.309-25.583,231.268a288.156,288.156,0,0,1-11.862,60.582c-22.653,75.415-90.812,86.55-151,111.973-28.436,12.01-22.906,54.377,5.6,57.1,258.36,25.431,355.137,144.466,463.889,173.237,79.975,21.157,72.458-85.868-13.792-214.685-6.735-10.116-14.026-20.14-22.02-29.881-49.708-60.56-88.779-148.695-73.715-252.025,22.51-154.413,134.1-294.456,177.734-312.461" transform="translate(-115.597 -64.973)" fill="none" stroke="#ecae33" stroke-miterlimit="10" stroke-width="1" opacity="0.371"></path>
      <path id="Path_6472" data-name="Path 6472" d="M3381.719,225.357c-1,11.27-276.881-8.05-325.454,120.706-35.606,94.383-17.216,144.888-22.031,216.659a267.794,267.794,0,0,1-10.281,56.745c-20.337,70.58-82.4,82.628-137.887,107.284-26.154,11.621-21.525,50.693,3.941,53.824,230.663,28.362,309.334,139.662,415.389,166.716,82.74,21.107,79.323-80.512-3.6-205.4a307.893,307.893,0,0,0-21.689-29.178c-51.1-60.553-100.44-138.912-84.7-236.661,23.264-144.5,148.718-267.831,186.318-291.838" transform="translate(-154.12 -86.631)" fill="none" stroke="#eeb135" stroke-miterlimit="10" stroke-width="1" opacity="0.429"></path>
      <path id="Path_6473" data-name="Path 6473" d="M3420.12,267.172c-1.509,7.879-256.823-10.361-301.656,111.776-31.869,86.819-15.213,134.464-18.478,202.051a245.248,245.248,0,0,1-8.7,52.907c-17.877,65.791-73.982,78.7-124.771,102.6-23.871,11.229-20.146,47.049,2.278,50.547,202.942,31.661,263.551,134.8,366.889,160.2,85.516,21.021,86.186-75.156,6.586-196.117a260.682,260.682,0,0,0-21.356-28.474c-52.519-60.528-112.121-129.125-95.693-221.3,23.986-134.577,163.333-241.206,194.9-271.215" transform="translate(-192.634 -108.289)" fill="none" stroke="#f0b537" stroke-miterlimit="10" stroke-width="1" opacity="0.486"></path>
      <path id="Path_6474" data-name="Path 6474" d="M3458.508,308.986c-2.021,4.487-236.783-12.691-277.859,102.848-28.169,79.235-13.218,124.035-14.925,187.442a223.389,223.389,0,0,1-7.12,49.069c-15.413,61-65.565,74.774-111.653,97.907-21.587,10.835-18.764,43.4.616,47.27C3222.8,828.478,3265.348,923.39,3365.954,947.2c88.3,20.9,92.795-69.633,16.777-186.832a227.491,227.491,0,0,0-21.024-27.771c-53.965-60.482-123.822-119.335-106.682-205.931,24.672-124.654,177.948-214.582,203.484-250.592" transform="translate(-231.135 -129.946)" fill="none" stroke="#f1b839" stroke-miterlimit="10" stroke-width="1" opacity="0.543"></path>
      <path id="Path_6475" data-name="Path 6475" d="M3496.878,350.8c-2.534,1.095-216.771-15.045-254.061,93.919-24.513,71.629-11.232,113.6-11.373,172.833a202.346,202.346,0,0,1-5.539,45.232c-12.945,56.221-57.148,70.838-98.537,93.219-19.3,10.438-17.38,39.759-1.047,43.993,147.563,38.251,172.029,124.888,269.888,147.157,91.1,20.731,99.648-64.271,26.966-177.549a197.983,197.983,0,0,0-20.692-27.068c-55.442-60.412-135.549-109.542-117.672-190.567C3310.125,437.238,3477.375,364.012,3496.878,322" transform="translate(-269.619 -151.604)" fill="none" stroke="#f3bc3c" stroke-miterlimit="10" stroke-width="1" opacity="0.6"></path>
      <path id="Path_6476" data-name="Path 6476" d="M3535.222,392.615c-3.047-2.3-196.8-17.427-230.264,84.99-20.911,64-9.26,103.169-7.82,158.224a182.37,182.37,0,0,1-3.958,41.394c-10.471,51.442-48.731,66.893-85.42,88.53-17.019,10.037-15.991,36.115-2.709,40.716,119.932,41.549,126.287,119.858,221.388,140.637,93.911,20.518,106.51-58.917,37.155-168.264a174.08,174.08,0,0,0-20.36-26.365c-56.947-60.315-147.308-99.749-128.661-175.2,25.9-104.809,207.18-161.333,220.651-209.346" transform="translate(-308.076 -173.262)" fill="none" stroke="#f5c03e" stroke-miterlimit="10" stroke-width="1" opacity="0.657"></path>
      <path id="Path_6477" data-name="Path 6477" d="M3573.522,434.429c-3.56-5.689-176.884-19.844-206.466,76.061-17.377,56.336-7.306,92.73-4.268,143.615a163.52,163.52,0,0,1-2.379,37.556c-7.986,46.668-40.314,62.938-72.3,83.842-14.736,9.63-14.594,32.474-4.372,37.439,92.374,44.875,80.554,114.782,172.887,134.117,96.731,20.256,113.386-53.569,47.345-158.98a154.127,154.127,0,0,0-20.028-25.662c-58.483-60.188-159.109-89.959-139.65-159.838,26.423-94.893,221.8-134.708,229.233-188.723" transform="translate(-346.489 -194.92)" fill="none" stroke="#f6c340" stroke-miterlimit="10" stroke-width="1" opacity="0.714"></path>
      <path id="Path_6478" data-name="Path 6478" d="M3611.74,476.243c-4.073-9.08-157.06-22.307-182.668,67.133-13.928,48.641-5.374,82.29-.715,129.007a146.252,146.252,0,0,1-.8,33.719c-5.49,41.9-31.9,58.967-59.185,79.153-12.456,9.216-13.186,28.843-6.036,34.162,64.926,48.3,34.829,109.663,124.387,127.6,99.561,19.937,120.273-48.23,57.533-149.7a137.18,137.18,0,0,0-19.7-24.959c-60.05-60.028-170.964-80.177-150.639-144.473,26.866-84.992,236.411-108.084,237.817-168.1" transform="translate(-384.821 -216.578)" fill="none" stroke="#f8c742" stroke-miterlimit="10" stroke-width="1" opacity="0.771"></path>
      <path id="Path_6479" data-name="Path 6479" d="M3616.066,518.057c-4.586-12.471-137.385-24.827-158.871,58.2-10.586,40.908-3.472,71.853,2.838,114.4a131.089,131.089,0,0,1,.782,29.88c-2.972,37.137-23.5,54.973-46.068,74.465-10.179,8.791-11.771,25.243-7.7,30.885,37.545,52.005-10.893,104.505,75.886,121.077,102.4,19.555,127.174-42.9,67.723-140.411a122.739,122.739,0,0,0-19.363-24.256c-61.651-59.831-182.891-70.416-161.629-129.109,27.212-75.118,251.026-81.459,246.4-147.477" transform="translate(-389.259 -238.235)" fill="none" stroke="#faca44" stroke-miterlimit="10" stroke-width="1" opacity="0.829"></path>
      <path id="Path_6480" data-name="Path 6480" d="M3608.154,556.847c-5.1-15.863-117.977-27.422-135.073,49.276-7.386,33.135-1.61,61.424,6.391,99.79a119.14,119.14,0,0,1,2.363,26.043c-.423,32.377-15.119,50.952-32.951,69.777-7.914,8.354-10.4,21.688-9.361,27.608,9.807,56.115-56.61,99.31,27.387,114.557,105.248,19.1,134.236-37.663,77.913-131.128a109.632,109.632,0,0,0-19.031-23.552c-63.284-59.592-194.913-60.7-172.619-113.744,27.442-65.294,265.642-54.834,254.984-126.854" transform="translate(-381.46 -256.869)" fill="none" stroke="#fcce47" stroke-miterlimit="10" stroke-width="1" opacity="0.886"></path>
      <path id="Path_6481" data-name="Path 6481" d="M3600.216,592.487c-5.612-19.255-99.108-30.109-111.276,40.346-4.375,25.332.2,51.016,9.943,85.181a112.822,112.822,0,0,1,3.944,22.205c2.176,27.613-6.788,46.9-19.835,65.088-5.668,7.9-9.09,18.1-11.024,24.33-18.614,59.95-102.326,94.081-21.114,108.037,108.107,18.578,141.1-32.307,88.1-121.843a99.005,99.005,0,0,0-18.7-22.85c-64.953-59.307-207.063-51.053-183.608-98.379,27.535-55.559,280.257-28.21,263.566-106.232" transform="translate(-373.636 -272.353)" fill="none" stroke="#fdd149" stroke-miterlimit="10" stroke-width="1" opacity="0.943"></path>
      <path id="Path_6482" data-name="Path 6482" d="M3592.248,627.982c22.723,84.023-244.671,39.634-272.15,85.608s163.29,19.552,212.964,105.161,12.682,130.526-98.292,112.559,137.4-61.828,83.495-201.338S3584.451,599.152,3592.248,627.982Z" transform="translate(-365.781 -287.691)" fill="none" stroke="#ffd54b" stroke-miterlimit="10" stroke-width="1"></path>
    </g>
  </svg>'
            ]
          ],
          'imagebg' => [
            'img_bg' => [
              'label' => 'Image background',
              'fids' => []
            ]
          ]
        ]
      ]
    ] + parent::defaultConfiguration();
  }
  
}
