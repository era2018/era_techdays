function control(){
$(document).ready(function() {
		$.ajax({
			url: "http://localhost:8080/event"
		}).then(function(data) {
			console.log(data.event);
			if(data.event == 1){
				document.getElementById('data').innerHTML = "Betty Of Road"
				for(var x = 0; x < 10000; x++){}
			}
		    else if(data.event == 2){
				document.getElementById('data').innerHTML = "Betty in trafic jam"
			}
			else if(data.event== 3){
				document.getElementById('data').innerHTML = "Betty in fender bender"
			}
			else if(data.event == 4){
				document.getElementById('data').innerHTML = "pick up"
					
			}
			else{
				document.getElementById('data').innerHTML = "drop off"
			}
			
	
		});
    
});

setTimeout(control, 3000);

}
control();