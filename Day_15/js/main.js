var submit = document.getElementById("submit");
        submit.onclick= function(){
            var enNam = document.getElementById("input_number").value;

            var i;
            var result = 'prime'
            for(i = 2; i< enNam; i++){
                if(enNam%i == 0)
                {
                    result = 'Not Prime';
                    break;
                }
                else
                {
                    continue;
                }
            }
            
        }
        
        // console.log(watch);
        // console.log(result);
        // Time
        // set interval
        // set time out
        function test(){
            var dateTime = new Date();
        var month = ['January','February','March','Aprile','May','June','July','August','September','October','November','December'];
        var day=['Sunday','Monday','Tuesday','Wednesday','Thusday','Friday','Saterday'];
        var hour = dateTime.getHours();
        var minute = dateTime.getMinutes();
        var secound = dateTime.getSeconds();
        var year = dateTime.getFullYear();

        var result = day[dateTime.getDay()]+','+month[dateTime.getMonth()]+','+year;
        var watch = hour + ':'+minute +':'+ secound;

        document.getElementById("watch").innerHTML = result +"|"+watch;

        }
        test();
        setInterval(test, 1000);