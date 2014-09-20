// JavaScript Document
<!-- 
var timer_id;
function scroll_iframe(dir)
{
	if (window.frames['scrolling'])
	{
		if ( dir  > 0 )
		{
			window.frames['scrolling'].scrollBy( 0, 5 );
		}
		else
		{
			window.frames['scrolling'].scrollBy( 0, -5 );
		}
	}
	else
	{
		alert("Could not find scrolling window, Please contact your Support" );
	}
}

function startScroll( dir ) { timer_id = setInterval( "scroll_iframe( "+ dir +" )", 80 ); }
function stopScroll() { if (timer_id) clearInterval(timer_id); }

//-->