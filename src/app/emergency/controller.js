function control(){
$(document).ready(function() {
		$.ajax({
			url: "http://localhost:8080/event"
		}).then(function(data){ 
			console.log(data);
			console.log(data.eventCode);
			if(data.eventCode == 1){
				document.getElementById('data').innerHTML = "Betty Off Road";
			}
		    else if(data.eventCode == 2){
				document.getElementById('data').innerHTML = "Betty in traffic jam";
			}
			else if(data.eventCode== 3){
				document.getElementById('data').innerHTML = "Betty in fender bender";
			}
			else{
				document.getElementById('data').innerHTML = "Lane Departure";
					
			}
			
	
		});


	});
	setTimeout(control, 3000);
}

control();