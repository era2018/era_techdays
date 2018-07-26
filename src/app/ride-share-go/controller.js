function control(){
            var counter = 0;
            var counter2 = 0;
            $(document).ready(function() {
                    $.ajax({
                        url: "http://localhost:8080/event"
                    }).then(function(data) {
                        console.log(data.event);
                        if (data.event == 4 && counter == 0 && counter2 == 0){
                            document.getElementById('data').innerHTML = "Betty got picked up";
                            counter++;
                        }
                        else if (data.event == 5 && counter == 1 && counter2 == 0){
                            document.getElementById('data').innerHTML = "All passengers have been picked up";
                            counter2++;
                        }
                        else if(data.event == 4 && counter == 1 && counter2 == 1){
                            document.getElementById('data').innerHTML = "Entering Deadzone";
                            counter++;
                        }
                        else if(data.event == 5 && counter == 2 && counter2 == 1){
                            document.getElementById('data').innerHTML = "Exiting Deadzone";
                            counter2++;
                        }
                        else if(data.event== 5 && counter == 2 && counter2 == 2){
                            document.getElementById('data').innerHTML = "Betty got dropped off";
                        }
                    });
            });
            setTimeout(control, 3000);
        }
 control();