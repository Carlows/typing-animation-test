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
		}, 500);

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
		textAnimation("Hi, I'm Carlos.").then(function(){
			textAnimation("Hi, I'm Johan!").then(function(){
				textAnimation("Hi, I'm Adonis!").then(function(){
					textAnimation("Hi, I'm BATMAN!!!");
				});
			});
		});
	});
})(jQuery)