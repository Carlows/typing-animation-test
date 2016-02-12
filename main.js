(function($){
	function textAnimation(message) {
		var deferred = $.Deferred();
		var carret = $(".carret");
		var animationText = $("#animationText");
		var carret = $("<span class='carret'>&nbsp;</span>");
		animationText.html(message);
		animationText.append(carret);
		console.log(message);

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

					deferred.resolve();
				}
				console.log("transitionend");
			}, 2000);
		});

		return deferred.promise();
	}

	$(document).ready(function(){
		textAnimation("Hi, I'm Carlos.")
		.then(textAnimation("And this is sparta!"));
	});
})(jQuery)