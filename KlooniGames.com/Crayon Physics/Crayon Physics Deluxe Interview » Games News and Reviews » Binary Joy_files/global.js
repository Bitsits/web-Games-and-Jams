// homepage animation stuff
var review_current 	= 1;
var review_time 	= 0;
var review_scroll 	= 0;

var review_delay	= 25;
var review_rate     = 5.0;
var review_data		= new Array( 5 );

// initialize animation data
function reviews_init() {

	if( document.getElementById( 'reviewJump' ) == null ) { return; }

	var reviews	= document.getElementById( 'reviewJump' ).getElementsByTagName( 'a' );
	i = 0;
	for( var y = 0; y < reviews.length; y++ ) {
 		if( reviews[ y ].innerHTML != "Reviews" ) {
			review_data[ i ] = reviews[ y ];
			i++;
		}
	}
	
	document.getElementById( 'reviewList' ).scrollTop = 0;
	review_time	= setTimeout( "nextReview();", review_delay * 1000 );

}

function nextReview() {

 	review_current ++;
	if( review_current > 5 ) { review_current = 1; }
	setReview( review_current );

}

function setReview( newReview ) {

	review_current = newReview;
	clearTimeout( review_time );
	clearTimeout( review_scroll );
	
	for( y = 0; y < 5; y++ ) { review_data[ y ].className = ""; }
	review_data[ newReview - 1 ].className = "selected";

	updateReview();

}

function updateReview() {

	current		= document.getElementById( 'reviewList' ).scrollTop;
	target		= ( review_current - 1 ) * 180.0;
	scrollPos	= current + ( ( target - current ) / review_rate );
	
	clearTimeout( review_scroll );
	clearTimeout( review_time );
	
	if( current <= target && current > ( target - review_rate ) ) {
	    scrollPos		= target;
		review_time		= setTimeout( "nextReview();", review_delay * 1000 );
	} else {
		review_scroll	= setTimeout( "updateReview();", 10 );
	}
	
	document.getElementById( 'reviewList' ).scrollTop = scrollPos;

}

/*
Creates an Element for insertion into the DOM tree.
From http://simon.incutio.com/archive/2003/06/15/javascriptWithXML
*/
function createElement(element) {
	if (typeof document.createElementNS != 'undefined') {
		return document.createElementNS('http://www.w3.org/1999/xhtml', element);
	}
	if (typeof document.createElement != 'undefined') {
		return document.createElement(element);
	}
	return false;
}

/* from http://www.quirksmode.org/js/events_properties.html */
function getEventTarget(e) {
	var targ;
	if (!e) {
		e = window.event;
	}
	if (e.target) {
		targ = e.target;
	} else if (e.srcElement) {
		targ = e.srcElement;
	}
	if (targ.nodeType == 3) { // defeat Safari bug
		targ = targ.parentNode;
	}

	return targ;
}
