(function($){
	$(document).ready(function(){
		var carret = $(".carret");

		setTimeout(function() {
			carret.addClass("type");
		}, 2000);

		carret.on('animationend', function(e){
			setTimeout(function() {
				carret.removeClass("type");
				carret.addClass("untype");
			}, 2000);
		});
	});
})(jQuery)