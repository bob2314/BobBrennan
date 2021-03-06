

/*===========================================================*/
/*	Stick Navigation & Separators
/*===========================================================*/

$(document).ready(function() {
    $("#navigation").sticky({
        topSpacing: 0
    });

    $("ul#menu").click(function() {
        if ($("ul#menu li").css('display') != 'inline') {
            if ($("ul#menu").hasClass('showmenu')) {
                $("ul#menu").removeClass('showmenu');
                $("ul#menu li").css('display', 'none');
            } else {
                $("ul#menu").addClass('showmenu');
                $("ul#menu li").css('display', 'block');
            }
        }
    });

    $(window).resize(function() {
        if ($(window).width() >= 960) {
            if (($("ul#menu li").css('display') == 'none') || ($("ul#menu li").css('display') == 'block'))
                $("ul#menu li").css('display', 'inline');
        } else {
            $("ul#menu li").css('display', 'none');
        }
    });

});

function initMap(){
  console.log('google map loaded!');
}

$(document).ready(function(){

		//.parallax(xPosition, speedFactor, outerHeight) options:
		//xPosition - Horizontal position of the element
		//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
		//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
		$('.separator1-bg').parallax("50%", 0.2);
		$('.separator2-bg').parallax("50%", 0.2);
		$('.separator3-bg').parallax("50%", 0.2);
		$('.separator4-bg').parallax("100%", 0.1);
		$('#navigation ul').localScroll(1000);
	});




/*===========================================================*/
/*	Full screen slider
/*===========================================================*/

 $(function(){
    $('#maximage').maximage({
        cycleOptions: {
            fx: 'fade',
            speed: 1000, // Has to match the speed for CSS transitions in jQuery.maximage.css (lines 30 - 33)
            timeout: 4000,
            prev: '#arrow_left',
            next: '#arrow_right',
            pause: 1,
        },
        onFirstImageLoaded: function(){
            jQuery('#cycle-loader').hide();
            jQuery('#maximage').fadeIn('slow');
        }
    });

    // Helper function to Fill and Center the HTML5 Video
    jQuery('video,object').maximage('maxcover');

    // To show it is dynamic html text
    jQuery('.in-slide-content').delay(1200).fadeIn();
});



/*===========================================================*/
/*	Colorbox
/*===========================================================*/

$(document).ready(function(){
	//Examples of how to assign the ColorBox event to elements
	$(".group1").colorbox({rel:'group1',
		transition:"fade",
		speed: 1700,
		onComplete:function(){
			$('.flexslider').flexslider({
			animation: "slide",
			controlNav: false,
			directionNav: true,

		  });
		}
	});
});



/*===========================================================*/
/*	Portfolio Isotope
/*===========================================================*/
$(window).load(function() {

    var $container = $('.portfolio');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 550,
            easing: 'linear',
            queue: false,
        }
    });

    $('nav.primary ul a').click(function() {
        var selector = $(this).attr('data-filter');
        console.log('nav selector clicked: ' + selector);

        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    var $optionSets = $('nav.primary ul'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function() {
      console.log('optionLinks clicked: ' + $optionLinks);
        var $this = $(this);
        console.log('nav.primary ul a -- clicked');
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('nav.primary ul');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
    });

});



/*===========================================================*/
/*	Google Map
/*===========================================================*/
function initialize() {

    // var latlng = new google.maps.LatLng(34.0116634, -118.492752);
    // var settings = {
    //     zoom: 16,
    //     center: latlng,
    //     mapTypeControl: false,
    //     scrollwheel: false,
    //     mapTypeControlOptions: {
    //         style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
    //     },
    //     navigationControl: false,
    //     navigationControlOptions: {
    //         style: google.maps.NavigationControlStyle.SMALL
    //     },
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    // };

    // var map = new google.maps.Map(document.getElementById("map_canvas"), settings);

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h2 id="firstHeading" class="firstHeading">Bob</h2>' +
        '<div id="bodyContent">' +
        '<p>Another sunny day at the beach!</p>' +
        '</div>' +
        '</div>';
}

/*===========================================================*/
/*	Automatically Highlights Navigation Item
/*===========================================================*/

function calculateScroll() {

    var topRange = 400;
    var contentTop = [];
    var contentBottom = [];
    var winTop = $(window).scrollTop();

    //rangeTop is used for changing the class a little sooner that reaching the top of the page
    //rangeBottom is similar but used for when scrolling bottom to top
    var rangeTop = 200;
    var rangeBottom = 500;

    $('#navigation').find('a.intern').each(function() {
        contentTop.push($($(this).attr('href')).offset().top);
        contentBottom.push($($(this).attr('href')).offset().top + $($(this).attr('href')).height());
    })

    $.each(contentTop, function(i) {

        if (winTop > contentTop[i] - rangeTop && winTop < contentBottom[i] - rangeBottom) {
            $('#navigation li')
                .removeClass('current')
                .eq(i).addClass('current');
        }
    })
}

$(document).ready(function() {
    calculateScroll();
    $(window).scroll(function(event) {
        calculateScroll();
    });

});



/*===========================================================*/
/*	Carousel
/*===========================================================*/
$(function() {
    $('#testimonials-carousel').carouFredSel({
        auto: true,
        prev: {
            button: "#prev",
            key: "left",
            items: 1,
            duration: 750
        },
        next: {
            button: "#next",
            key: "right",
            items: 1,
            duration: 750
        },
        mousewheel: false,
        swipe: {
            onMouse: false,
            onTouch: true
        }
    });
});





