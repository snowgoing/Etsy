$(document).ready(function() { 

	var $app = $("#app");
	var picTemplate = $("#picTemplate").text();


	function renderDefault() {
		$app.html(Mustache.render(picTemplate, data))
	};
	
	renderDefault();

});
 
 