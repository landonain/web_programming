$(document).ready(function()
{
	$('#index > li').bind('mouseover', mopen);
	$('#index > li').bind('mouseout', mclosetime); 
	var timeout    = 2000;
	var closetimer    = 0;
	var ddmenuitem    = 0;

	// open hidden layer
	function mopen()
	{    
		// cancel close timer
		mcancelclosetime();
		// close old layer
		mclose();
		ddmenuitem = $(this).find('ul').eq(0).css('visibility', 'visible');
	}
	// close showed layer
	function mclose()
	{
		if(ddmenuitem) ddmenuitem.css('visibility', 'hidden');
	}

	// go close timer
	function mclosetime()
	{
		closetimer = window.setTimeout(mclose, timeout);
	}

	// cancel close timer
	function mcancelclosetime()
	{
		if(closetimer)
		{
			window.clearTimeout(closetimer);
			closetimer = null;
		}
	}

	// close layer when click-out




	document.onclick = mclose;
 });


