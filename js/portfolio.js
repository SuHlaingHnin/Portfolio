function loadPortfolioPage() {
	$('#portfolio').load('portfolio.html', function() {
		$("#nav_all").click(function() {
			hideAllContents();
			$("#all_content").css("display", "block");
			$("#navbar label").removeClass("active_nav");
			$("#nav_all label").addClass("active_nav");	
		});

		$("#nav_javascript").click(function() {
			hideAllContents();
			$("#javascript_content").css("display", "block");
			$("#navbar label").removeClass("active_nav");
			$("#nav_javascript label").addClass("active_nav");	
		});

		$("#nav_php").click(function() {
			hideAllContents();
			$("#php_content").css("display", "block");
			$("#navbar label").removeClass("active_nav");
			$("#nav_php label").addClass("active_nav");	
		});

		$("#nav_webdesign").click(function() {
			hideAllContents();
			$("#webdesign_content").css("display", "block");
			$("#navbar label").removeClass("active_nav");
			$("#nav_webdesign label").addClass("active_nav");	
		});
	});
}

function hideAllContents() {
	$("#all_content").css("display", "none");
	$("#javascript_content").css("display", "none");
	$("#php_content").css("display", "none");
	$("#webdesign_content").css("display", "none");
}
