jQuery( function ( $ ) {

	var clickEvent = 'ontouchstart' in window ? 'touchstart' : 'click';

	function toggleMenu() {
		const nav = document.querySelector( '.nav' );
		if ( !nav ) {
			return;
		}

		const menu = nav.querySelector( 'ul' ),
			button = document.querySelector( '.menu-toggle' );

		menu.setAttribute( 'aria-expanded', 'false' );
		button.addEventListener( 'click', () => {
			if ( nav.classList.contains( 'is-open' ) ) {
				button.setAttribute( 'aria-expanded', 'false' );
				menu.setAttribute( 'aria-expanded', 'false' );
			} else {
				button.setAttribute( 'aria-expanded', 'true' );
				menu.setAttribute( 'aria-expanded', 'true' );
			}
			nav.classList.toggle( 'is-open' );
		} );
	}

	function closeMenu() {
		$( '.icon-close' ).click( function () {
			if ( $( '#navBar' ).hasClass( 'is-open' ) ) {
				$( '#navBar' ).removeClass( 'is-open' );
			} else {
				$( '#navBar' ).addClass( 'is-open' );
				return false;
			}
		} );
	}

	let slickSlide = () => {
		$( '.slider-hero' ).slick( {
			slidesToShow: 1,
			arrows: false,
			dots: true,
			rows: 0,
			autoplay: true,
			autoplaySpeed: 5000,
		} );
		$( '.tab-section_0' ).slick( {
			slidesPerRow: 4,
			dots: false,
			arrows: true,
			rows: 2,
			autoplay: false,
			prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'></button>",
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 1023,
					settings: {
						slidesPerRow: 3,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesPerRow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesPerRow: 1,
					}
				},
			]
		} );
	};
	let slickProject = ( tab_id ) => {
		//console.log( tab_id );
		$( '.' + tab_id ).slick( {
			slidesPerRow: 4,
			dots: false,
			arrows: true,
			rows: 2,
			autoplay: false,
			prevArrow: "<button type='button' class='slick-prev pull-left'></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'></button>",
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 1023,
					settings: {
						slidesToShow: 1,
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesPerRow: 2,
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesPerRow: 1,
					}
				},
			]
		} );
	};

	function tab() {
		$( 'ul.tabs li a' ).click( function () {
			var tab_id = $( this ).attr( 'data-tab' );
			//console.log( tab_id );
			$( 'ul.tabs li a' ).removeClass( 'current' );
			$( '.tab-content' ).removeClass( 'current' );

			$( this ).addClass( 'current' );
			$( "#" + tab_id ).addClass( 'current' );
			slickProject( tab_id );
		} );
	}

	function scrollToTop() {
		var $window = $( window ),
			$button = $( '.scroll-to-top' );
		$window.scroll( function () {
			$button[ $window.scrollTop() > 100 ? 'removeClass' : 'addClass' ]( 'hidden' );
		} );
		$button.on( 'click', function ( e ) {
			e.preventDefault();
			$( 'body, html' ).animate( {
				scrollTop: 0
			}, 500 );
		} );
	}

	toggleMenu();
	closeMenu();
	scrollToTop();
	slickSlide();
	tab();
} );
