/**
 *
 */
(function($, Drupal) {
	function emit_data_vuejs(e, id) {
		e.preventDefault();
		const str = id.split(':');
		const st = str[1].split('=');
		if (st && st[1]) {
			const event = new CustomEvent('formatage_models_data_quick_edit_vuejs', {
				detail: {
					entityTypeId: str[0],
					id: st[1],
				}
			});
			document.dispatchEvent(event);
		}

	}
	function quick_edit_perform(context) {
		var icons = context.getElementsByClassName('formatage_models_quickly_edit');
		Array.prototype.filter.call(
			icons,
			(testElement) => {
				testElement.addEventListener('click', function(even) {
					emit_data_vuejs(even, testElement.getAttribute('data-quick-edit-id'));
				});
			},
		);
	};


	/**
	 *
	 */
	Drupal.behaviors.someArbitraryKey = {
		attach: function(context, settings) {
			quick_edit_perform(context);
		}
	};
}(jQuery, Drupal)); 
