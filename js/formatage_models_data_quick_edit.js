Drupal.behaviors.formatage_models = {
  attach: function (context, settings) {
    function emit_data_vuejs(e, id) {
      e.preventDefault();
      const str = id.split(":");
      const st = str[1].split("=");
      if (st && st[1]) {
        const event = new CustomEvent(
          "formatage_models_data_quick_edit_vuejs",
          {
            detail: {
              entityTypeId: str[0],
              id: st[1],
            },
          }
        );
        document.dispatchEvent(event);
      }
    }
    // Use context to filter the DOM to only the elements of interest,
    // and use once() to guarantee that our callback function processes
    // any given element one time at most, regardless of how many times
    // the behaviour itself is called (it is not sufficient in general
    // to assume an element will only ever appear in a single context).
    once("formatage_models", ".formatage_models_quickly_edit", context).forEach(
      function (element, id) {
        // element.classList.add("processed-" + id);
        element.addEventListener("click", function (even) {
          emit_data_vuejs(even, element.getAttribute("data-quick-edit-id")); 
        });
      }
    );
  }, 
};
