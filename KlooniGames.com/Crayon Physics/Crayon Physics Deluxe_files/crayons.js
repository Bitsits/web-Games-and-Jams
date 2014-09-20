

function move_igf_prize()
{
	var igfprize = document.getElementById('igf_prize');
	if( igfprize )
	{
		var extra_move = ( document.body.clientWidth - 815 ) * 0.5;
		
		igfprize.style.left = 634 + extra_move;
		igfprize.style.top = 57;
	}
}

function onmouseover_igf()
{
	var igfprize = document.getElementById('igf_prize');
	if( igfprize )
	{
		var extra_move = ( document.body.clientWidth - 815 ) * 0.5;
		
		igfprize.style.left = 634 + extra_move;
		igfprize.style.top = 53;
	}
}

function onmouseout_igf()
{
	move_igf_prize();
}

if (document.images) {
    button_main_up       = new Image();
    button_main_up.src   = "http://crayonphysicsdeluxe.s3.amazonaws.com/crayonphysics.com/images/link_main_high.gif" ;
    button_main_down      = new Image();
    button_main_down.src   = "http://crayonphysicsdeluxe.s3.amazonaws.com/crayonphysics.com/images/link_main_low.gif" ;

    button_about_up       = new Image();
    button_about_up.src   = "http://crayonphysicsdeluxe.s3.amazonaws.com/crayonphysics.com/images/link_about_high.gif" ;
    button_about_down      = new Image();
    button_about_down.src   = "http://crayonphysicsdeluxe.s3.amazonaws.com/crayonphysics.com/images/link_about_low.gif" ;

    button_blog_up       = new Image();
    button_blog_up.src   = "http://crayonphysicsdeluxe.s3.amazonaws.com/crayonphysics.com/images/link_blog_high.gif" ;
    button_blog_down      = new Image();
    button_blog_down.src   = "http://crayonphysicsdeluxe.s3.amazonaws.com/crayonphysics.com/images/link_blog_low.gif" ;

    button_forums_up       = new Image();
    button_forums_up.src   = "http://crayonphysicsdeluxe.s3.amazonaws.com/crayonphysics.com/images/link_forums_high.gif" ;
    button_forums_down      = new Image();
    button_forums_down.src   = "http://crayonphysicsdeluxe.s3.amazonaws.com/crayonphysics.com/images/link_forums_low.gif" ;
}

function buttondown( buttonname )
{
    if (document.images) {
      document[ buttonname ].src = eval( buttonname + "_down.src" );
    }
}
function buttonup ( buttonname )
{
    if (document.images) {
      document[ buttonname ].src = eval( buttonname + "_up.src" );
    }
}

