
var alerts = {};

alerts[0] = "Betty got picked up";
alerts[1] = "All passengers have been picked up";
alerts[2] = "Entering Deadzone";
alerts[3] = "Exiting Deadzone";
alerts[4] = "Betty got dropped off";


var lastEvent = false;
var counter = 0;

function update(data)
{
	var isEvent = true;
	if( data.eventCode < 4)
	{
		isEvent = false;
	}
	
	if( isEvent != lastEvent)
	{
		lastEvent = isEvent;
		if( isEvent )
		{
			document.getElementById('data').innerHTML = alerts[counter];
			counter = counter + 1;
		}
	}
}

function poll()
{
	$.post("http://localhost:8080/event", update);
	setTimeout(poll, 500);
}

%(document).ready(poll);
