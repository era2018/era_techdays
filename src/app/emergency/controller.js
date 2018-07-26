var x = 0;
function control(i){
$(document).ready(function() {
		$.ajax({
			url: "http://localhost:8080/event"
		}).then(function(data){ 
			console.log(data);
			
			var d = new Date();
			
			if(data[i] == 1){
				document.getElementById('data').innerHTML = "Betty Off Road  "+d.getFullYear()+":"+(d.getMonth()+1)+":"+d.getHours()+":"+d.getMinutes();	
			}
			else if(data[i] == 2){
				document.getElementById('data').innerHTML = "Betty in traffic jam  "+d.getFullYear()+":"+(d.getMonth()+1)+":"+d.getHours()+":"+d.getMinutes();
			}
			else if(data[i] == 3){
				document.getElementById('data').innerHTML = "Betty in fender bender  "+d.getFullYear()+":"+(d.getMonth()+1)+":"+d.getHours()+":"+d.getMinutes();
			}
			else{
				document.getElementById('data').innerHTML = "Lane Departure  "+d.getFullYear()+":"+(d.getMonth()+1)+":"+d.getHours()+":"+d.getMinutes();
					
			}
			
	
		});


	});
	setTimeout(control(i++), 30000);
}

control();