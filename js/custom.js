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
			$('#resume-item').appendTo('#portfolio-item .submenu');
		} else {
			$('#resume-item').appendTo('.portfolio-menu');
		}
	}
	// call the function on dom ready and on resize
	checkNav();
	$(window).resize(checkNav);
});