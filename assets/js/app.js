(function(){
	var app = angular.module("portfolio", []);

	app.directive("portfolioHeader", function(){
		return {
			restrict: "E",
			templateUrl: "assets/templates/header.html"
		};
	});

})();