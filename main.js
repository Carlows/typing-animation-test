(function($){
	function textAnimation(message) {
		var deferred = $.Deferred();
		var carret = $(".carret");
		var container = $(".container");
		var heading = $("<h1 id='animationText'></h1>");
		var carret = $("<span class='carret'>&nbsp;</span>");

		container.html(heading);
		heading.html(message);
		heading.append(carret);

		var timingFunctionValue = "steps(" + message.length + ", end)"
		carret.css("transition-timing-function", timingFunctionValue);

		setTimeout(function() {
			if(!carret.hasClass("typing"))
				carret.addClass("typing");
		}, 2000);

		carret.on('transitionend', function(e){
			setTimeout(function() {
				if (carret.hasClass("typing")){
					carret.removeClass("typing");
					carret.addClass("untyping");
				} else if (carret.hasClass("untyping")) {
					carret.removeClass("untyping");
					container.empty();
					deferred.resolve();
				}
			}, 2000);
		});

		return deferred.promise();
	}

	$(document).ready(function(){
		textAnimation("Hi, I'm Carlos.").done(function(){
			textAnimation("And this is sparta!");
		});
	});
})(jQuery)