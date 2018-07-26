
var lastEvent = 0;
var list = "";
var alerts = {};

alerts[1] = "Betty swerved off the road  ";
alerts[2] = "Betty is in a traffic jam  ";
alerts[3] = "Betty was involved in a fender bender  ";

function display(data)
{ 
	if( data.eventCode != lastEvent)
	{
		lastEvent = data.eventCode;
		
		if( data.eventCode >= 1 && data.eventCode <= 3 )
		{
			var date = new Date();
			str = alerts[data.eventCode] + date.toLocaleString() + "</br>";
			//date.getFullYear()+"-"+(date.getMonth()+1)+" "+date.getHours()+":"+date.getMinutes() +"</br>";
			
			list = str + list;
			document.getElementById('data').innerHTML = list
		}		
	}
	
	console.log(data);
	console.log(data.eventCode)
}
	


function control(){
$(document).ready(function() {
		$.ajax({
			url: "http://localhost:8080/event"
		}).then(display);
	});
	setTimeout(control, 500);
}

control();