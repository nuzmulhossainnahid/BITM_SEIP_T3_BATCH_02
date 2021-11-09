var submit = document.getElementById("submit");
        submit.onclick= function(){
            var enNam = document.getElementById("input_number").value;
            if(enNam%2!=0){
                document.getElementById("result").innerHTML="Odd";
            }
            else{
                document.getElementById("result").innerHTML="Even";
            }
        }