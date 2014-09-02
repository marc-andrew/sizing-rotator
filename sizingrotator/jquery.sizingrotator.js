/*!
jQuery Sizing Rotator, a plugin to rotate content on click.

Version 1.0.0
Full source at https://github.com/marc-andrew/sizing-rotator
Copyright (c) 2014 Marc Andrew http://marcandrew.net/sizing-rotator

MIT License (http://www.opensource.org/licenses/mit-license.html)
*/

;(function($){

	$.fn.sizingrotator = function(options){

		var infinityPushWrapper = this;

		/**
		 * Start Rotator functions
		 */

		return this.each(function() {

			var rotatorWrap				= $(this);
				rotatorSelectors		= $('.selectors');
				rotatorSelectorsLink	= $('.selectors li a');
				rotatorImage			= $('.rotating_images');
				rotatorText				= $('.rotating_txt');

			rotatorSelectors.find('li').first().find('a').addClass('selected');

			// Click function
			rotatorSelectorsLink.click(function() {

				// Get clicked index number
				var getIndex = $(this).parent().index();

				if($(this).hasClass('selected')) {
					// If this is already selected, do nothing
					return false;
				} else {
					// Else add selected class name
					$(this).parent().siblings().find('.selected').removeClass('selected');

					// Else find all li's in rotating_images and hide them
					// and find the li with the current clicked index number and show it
					rotatorImage.find('li').hide().eq(getIndex).show();

					// Else find all li's in rotating_txt and hide them
					// and find the li with the current clicked index number and show it
					rotatorText.find('li').hide().eq(getIndex).show();

					// Else add class name on current clicked item
					$(this).addClass('selected');
				}

				return false;

			});

		});

	};

})(jQuery);


