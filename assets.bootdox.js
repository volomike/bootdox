var BootDox = {};

BootDox.scrollTo = function(sSection) {
	var t = 0;
	try {
		t = $('SECTION[rel="' + sSection + '"]').offset().top - 20;
	} catch(e) {}
	$('html, body').animate({ scrollTop: t}, 300);
};

$(document).ready(function(){

	$('#layout #picker LI A').click(function(e){
		e.preventDefault();
		if (($(this).parent().has('UL').length > 0) || ($(this).parent().parent().parent().parent().has('DIV').length > 0)) {
			$('#layout #picker .list-unstyled .list-unstyled').hide();
		}
		$('#layout #picker LI').removeClass('active');
		$(this).parent().addClass('active');
		var sSection = $(this).attr('rel');
		BootDox.scrollTo(sSection);
		return false;
	});

	$('#layout #picker .list-unstyled LI:has(UL) > A').click(function(e){
		e.preventDefault();
		$(this).parent().find('UL').show();
		return false;
	});
	
	$('NAV #langpicker LI A').click(function(e){
		e.preventDefault();
		$('NAV #langpicker LI').removeClass('active');
		$(this).parent().addClass('active');
		var s = $(this).text();
		s = s.toLowerCase();
		s = s.replace(/[^0-9a-z]+/gi,'');
		$('.choose,.choose-default').hide();
		$('.choose-' + s).show();
		return false;
	});

});
