
var lastEvent = 0;
var list = "";

function display(data)
{ 
	if( data.eventCode != lastEvent)
	{
		lastEvent = data.eventCode;
		
		str = "";
		
		var d = new Date();
		console.log(+d.getFullYear()+" "+(d.getMonth()+1)+" "+d.getHours()+" "+d.getMinutes)
		if(data.eventCode == 1){
			str = "Betty Off Road  ";
		}
		else if(data.eventCode == 2){
			str = "Betty in traffic jam  ";
		}
		else if(data.eventCode== 3){
			str = "Betty in fender bender  ";
		}
		else{
			str = "Lane Departure  ";
				
		}
		
		str = str + d.getFullYear()+":"+(d.getMonth()+1)+":"+d.getHours()+":"+d.getMinutes() +"</br>"
		
		list = str + list;
		
		document.getElementById('data').innerHTML = list
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
	setTimeout(control, 3000);
}

control();