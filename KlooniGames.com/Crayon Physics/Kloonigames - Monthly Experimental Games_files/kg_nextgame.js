
function kg_days_in_month(month,year) 
{
	var dd = new Date(year, month, 0);
	return dd.getDate();
} 

function kg_days_left_in_month()
{
	var now = new Date();
	var today = now.getDate();
	var max = kg_days_in_month( now.getMonth() + 1, now.getYear() );
	        
	var left = ( max - today );
	return left;
}

function kg_game_already_released()
{
	var now = new Date();
	var today = now.getDate();
	if( now.getMonth() + 1 == 3 && now.getYear() == 108 )
		return true;
	
	return false;
}

function kg_nextgame()
{
	var output_string = "";
	var now = new Date();
	var today = now.getDate();
	var game_released_already = kg_game_already_released();
	
	if( now.getDate() == 1 && now.getMonth() + 1 == 4 && now.getYear() == 108 )
		today = 2;

	var left = kg_days_left_in_month();
	
	// gamma hack!
	if( ( now.getDate() <= 15 && now.getMonth() + 1 == 10 && now.getYear() == 108 ) || 
	    ( now.getMonth() + 1 == 9 && now.getYear() == 108 ) )
	{
		var target_date = new Date( "10/15/2008 1:00 AM" );
		var left_date = new Date( target_date - now );
		left = left_date.getDate() + kg_days_in_month( now.getMonth() + 1, now.getYear() )  * left_date.getMonth();
		left -= 1;
		if( left != 1 )
			today = 2;
	}
	
	if( today == 1 )
	{
		output_string = "A new game should be released today(ish). Unless I'm slacking off.";		
	}
	else
	{
		
		if( game_released_already ) 
			left += kg_days_in_month( now.getMonth() + 2, now.getYear() );
		left++;
		
		if( left != 1 )
		{
			output_strings = new Array();
			output_strings[ 0 ] = "New game should be released in ";
			output_strings[ 1 ] = "New prototype should be done in ";	
			output_strings[ 2 ] = "My monthly thing will happen in ";
			output_strings[ 3 ] = "A new game will appear ";
			output_strings[ 4 ] = "Spanking shiny new game will be released in ";
			output_strings[ 5 ] = "If I'm not slacking off, then new game here in ";
			output_strings[ 6 ] = "Petri quit playing <a href=\"http://forums.tigsource.com/index.php?topic=4017.0\">Spelunky</a>, because your new game should be out in ";
			output_strings[ 7 ] = "Next game will be released in ";
			output_strings[ 8 ] = "New monthly prototype will be released in ";
			output_strings[ 9 ] = "New 7 day game should be released in ";
			
			output_string = output_strings[ left % 10 ] + left  + " days.";
		}
		else
		{
			output_string = "Next game will be released tomorrow.";
		}
	}
	
	// output_string = "There won't be monthly games until <a href=\"http://www.kloonigames.com/crayon/\" style=\"color:#ffffff;\">Crayon Physics Deluxe</a> is finished.";
	return output_string;
	
}

function kg_do_the_nextgame()
{
	document.write( kg_nextgame() );	
}

kg_do_the_nextgame();

