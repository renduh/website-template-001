// Javascript file

//Make all ancors scroll to
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: (target.offset().top)-50
        }, 600);
    }
});

//After jquery has loaded do this
$(function () {
    // Do stuff to the DOM
	$("#header-burger").click(function () {
	    $("#menu").animate({"right": "0px"}, 300);
	    $("#menu-on-overlay").animate({"opacity": "0.5"}, 300);
	    $("#menu-on-overlay").css("pointer-events", "auto");
	});
	$("#menu-close").click(function () {
	    $("#menu").animate({"right": "-300px"}, 300);
	    $("#menu-on-overlay").animate({"opacity": "0"}, 300);
	    $("#menu-on-overlay").css("pointer-events", "none");
	});
	$("#menu-on-overlay").click(function () {
	    $("#menu").animate({"right": "-300px"}, 300);
	    $("#menu-on-overlay").animate({"opacity": "0"}, 300);
	    $("#menu-on-overlay").css("pointer-events", "none");
	});
});




//scrollmagic stuff

// init
var ctrl = new ScrollMagic.Controller({
    globalSceneOptions: {
        triggerHook: '0.95'
    }
});
 

$('p, h1, h2, figure, blockquote').each(function(){
    var currentItem = this;

    var tweenItem = new TimelineMax()
        .fromTo(currentItem, 0.65, {opacity: 0, y: "+=50"},{opacity: 1, y: "0"});

    var scene = new ScrollMagic.Scene({triggerElement: currentItem})
        .setTween(tweenItem)
        .addTo(ctrl);
});
 
