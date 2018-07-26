<<<<<<< Updated upstream
function control(){
$(document).ready(function() {
		$.ajax({
			url: "http://localhost:8080/event"
		}).then(function(data){ 
			console.log(data);
			console.log(data.eventCode)
			var d = new Date();
			console.log(+d.getFullYear()+" "+(d.getMonth()+1)+" "+d.getHours()+" "+d.getMinutes)
			if(data.eventCode == 1){
				document.getElementById('data').innerHTML = "Betty Off Road  "+d.getFullYear()+":"+(d.getMonth()+1)+":"+d.getHours()+":"+d.getMinutes();
			}
		    else if(data.eventCode == 2){
				document.getElementById('data').innerHTML = "Betty in traffic jam  "+d.getFullYear()+":"+(d.getMonth()+1)+":"+d.getHours()+":"+d.getMinutes();
			}
			else if(data.eventCode== 3){
				document.getElementById('data').innerHTML = "Betty in fender bender  "+d.getFullYear()+":"+(d.getMonth()+1)+":"+d.getHours()+":"+d.getMinutes();
			}
			else{
				document.getElementById('data').innerHTML = "Lane Departure  "+d.getFullYear()+":"+(d.getMonth()+1)+":"+d.getHours()+":"+d.getMinutes();
					
			}
			
	
		});


	});
	setTimeout(control, 5000);
=======
var lastEvent = 0;
var list = "";
var alerts = {};

alerts[1] = "Betty swerved off the road";
alerts[2] = "Betty is in a traffic jam";
alerts[3] = "Betty was involved in a fender bender";

function display(data)
{ 
	if(data.eventCode != lastEvent) {
		lastEvent = data.eventCode;
		
		if(data.eventCode >= 1 && data.eventCode <= 4 ) {
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

function control() {
    $(document).ready(function() {
        $.ajax({
                url: "http://localhost:8080/event"
        }).then(display);
    });
	setTimeout(control, 500);
>>>>>>> Stashed changes
}

control();