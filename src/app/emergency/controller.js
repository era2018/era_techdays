
var alerts = {};

alerts[0] = "";
alerts[1] = "Betty off road";
alerts[2] = "Betty in traffic jam";
alerts[3] = "Betty in fender bender";
alerts[4] = "Pick up";
alerts[5] = "Drop off";

function display(data)
{
		console.log(data.eventCode);
		document.getElementById('data').innerHTML = alerts[data.eventCode];
}

function poll()
{
	$.get("http://localhost:8080/event", display);
	setTimeout(poll, 1000);
}

$(document).ready(poll);