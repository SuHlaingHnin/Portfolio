function loadHomePage() {
	$('#home').load('home.html', function() {		
		$('#view_work').on({
			'mouseenter' : function() {
				$(this).removeClass('btn-outline-light').addClass('custom-bg-cyan');
				$('#view_work > i').removeClass('fa-arrow-right').addClass('fa-arrow-down');
			},

			'mouseleave' : function() {
				$(this).removeClass('custom-bg-cyan').addClass('btn-outline-light');
				$('#view_work > i').removeClass('fa-arrow-down').addClass('fa-arrow-right');
			}
		});
	});
}