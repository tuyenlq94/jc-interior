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

	function filterPrice() {
		var PriceMin = parseFloat( 0 );
		var PriceMax = parseFloat( 5000 );

		var currency_symbol = jQuery( ".filter-surrency-symbol" ).text();

		$( "#priceUpRange2" ).slider( {
			range: true,
			min: PriceMin,
			max: PriceMax,
			values: [ PriceMin, PriceMax ],
			slide: function ( event, ui ) {
				$( "#price_up .filter-dynamic-data-min" ).text( currency_symbol + addCommas( ui.values[ 0 ] ) );
				$( "#price_up .filter-dynamic-data-max" ).text( currency_symbol + addCommas( ui.values[ 1 ] ) );
			}
		} );

		$( "#price_up span.filter-dynamic-data-min" ).text( currency_symbol + addCommas( $( "#priceUpRange2" ).slider( "values", 0 ) ) );
		$( "#price_up span.filter-dynamic-data-max" ).text( currency_symbol + addCommas( $( "#priceUpRange2" ).slider( "values", 1 ) ) );

		$( '#priceUpRange2' ).draggable();

	}
	function addCommas( nStr ) {
		nStr += '';
		var x = nStr.split( '.' );
		var x1 = x[ 0 ];
		var x2 = x.length > 1 ? '.' + x[ 1 ] : '';
		var rgx = /(\d+)(\d{3})/;
		while ( rgx.test( x1 ) ) {
			x1 = x1.replace( rgx, '$1' + ' ' + '$2' );
		}
		return x1 + x2;
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
		$( '.rentKing-pots' ).slick( {
			slidesToShow: 4,
			dots: false,
			arrows: true,
			rows: 0,
			autoplay: false,
			prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fas fa-chevron-left'></i></button>",
			nextArrow: "<button type='button' class='slick-next pull-right'><i class='fas fa-chevron-right'></i></button>",
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 600,
					centerPadding: '0px',
					settings: {
						slidesToShow: 1,
					}
				},
			]
		} );
		$( '.slider-for' ).slick( {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			asNavFor: '.slider-nav'
		} );
		$( '.slider-nav' ).slick( {
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.slider-for',
			dots: false,
			arrows: false,
			rows: 0,
			centerMode: true,
			focusOnSelect: true
		} );
	};

	$( function () {
		$( "#accordion" ).accordion();
	} );

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
	filterPrice();
} );
