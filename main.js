(function($){
	function carlosAnimation() {
		var carret = $(".carret");

		setTimeout(function() {
			carret.addClass("type");
		}, 2000);

		carret.on('transitionend', function(e){
			setTimeout(function() {
				carret.removeClass("type");
				carret.addClass("untyping");
			}, 2000);
		});
	}

	$(document).ready(function(){
		carlosAnimation();
	});
})(jQuery)