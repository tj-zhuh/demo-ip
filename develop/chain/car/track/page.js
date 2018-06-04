require.config({
	paths: config.getPaths(3)
})

define(function (require) {
	var $ = require('jquery');

	$(function () {
		$('.car').click(function (event) {
			var e = event || window.event;
			if (e.stopPropagation) {
				e.stopPropagation();
			}
			else {
				e.cancelBubble = true;
			}
			$('.window').removeClass("hide").css({ "left": event.clientX, "top": event.clientY });
		})

		$('body').click(function (event) {
			var e = event || window.event;
			if (!($('.window').hasClass("hide"))) {
				if (e.stopPropagation) {
					e.stopPropagation();
				}
				else {
					e.cancelBubble = true;
				}
				$('.window').addClass("hide");
			}
		})
	})
})