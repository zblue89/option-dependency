(function($) {
	var optionDependencyCount = 0;
	$.fn.dependedBy = function(childElement) {
		optionDependencyCount++;
		$(this).attr('data-depended-by', childElement).attr(
				'data-dependency-count', optionDependencyCount);

		if ($(childElement).children('optgroup').length > 0) {
			
			$(childElement).children('optgroup').each(
					function() {
						var optionId = 'options-for-' + optionDependencyCount
								+ '-' + $(this).prop('label');
						
						$('body').append(
								'<div style="display:none;" id="' + optionId
										+ '"></div>');
						$(this).children('option').each(
								function() {
									$('#' + optionId).append(
											'<option value="' + $(this).val()
													+ '">' + $(this).html()
													+ '</option>');
								});
						$(this).remove();
					});
		}
		
		$(childElement).children('option').each(function(){
			var optionId = 'options-for-' + optionDependencyCount+ '-';
			if($(this).attr('data-parent-val')){
				optionId += $(this).attr('data-parent-val');
			} else {
				optionId += 'others';
			}
			if($('#'+optionId).length == 0){
				$('body').append(
						'<div style="display:none;" id="' + optionId
								+ '"></div>');
			}
			$('#'+optionId).append(
					'<option value="' + $(this).val()
							+ '">' + $(this).html()
							+ '</option>');
		});
		
		$(childElement).html('');
		return $(this).change(
				function() {
					var childEle = $(this).attr('data-depended-by');
					if ($(this).val() == '') {
						$(childEle).html('').prop('disabled', true);
					} else if ($(this).attr('data-dependency-count')) {
						var dependencyCount = $(this).attr(
								'data-dependency-count');
						var optionId = '#options-for-' + dependencyCount + '-' + $(this).val();
						
						if($(optionId).length == 0){
							optionId = '#options-for-' + dependencyCount + '-others';
						}
						console.debug('opt group: '+optionId);
						$(childEle).html($(optionId).html()).prop('disabled', false);
					}
					$(childEle).trigger('change');
				}).trigger('change');
	}
})(jQuery);