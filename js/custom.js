/**
 * Custom JS written for Justin Kodama
 */

$( document ).ready(function() {

	/* Fade in effect on header banner area */
	$bannerContent = $('#header .wrapper');
	$bannerContent.css( {'opacity':0} );
	
	setTimeout(function(){
	   $bannerContent.animate({
		'opacity':1.0
	   }, 500);
	}, 500);

	/* Slide down menu */
    $('#portfolio-menu').click(function(){
		$('.dropdown').stop( true, true ).slideToggle();	
	});
	
	/* Mobile Menu */
	function checkNav(){
		if( $('#mobile-menu-icon').css('display') == 'block' ){
			$('#resume-item').appendTo('#portfolio-item .submenu'); // Move the resume link to the menu dropdown
		} else {
			$('#resume-item').appendTo('.portfolio-menu'); // Move the resume link back up to the main nav bar
			$('#header .nav ul li ul').show();
		}
	}
	// call the function on dom ready and on resize
	checkNav();
	$(window).resize(checkNav);
	
	// mobile menu controls
	$('#mobile-menu-icon').click(function(){
		if($(this).hasClass('open')){
			$(this).find('i').removeClass('fa-chevron-up').addClass('fa-chevron-down');
			$(this).removeClass('open');
			$('#header .nav ul li ul').hide();			
		}else {
			$(this).find('i').removeClass('fa-chevron-down').addClass('fa-chevron-up');
			$(this).addClass('open');
			$('#header .nav ul li ul').show();
		}
	});


});