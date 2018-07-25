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
}

control();