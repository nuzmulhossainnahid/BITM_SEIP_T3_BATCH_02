var submit = document.getElementById("submit");
        submit.onclick= function(){
            var enNam = document.getElementById("input_number").value;

            var i;
            var result = 'prime'
            for(i = 2; i< enNam; i++){
                if(enNam%i == 0){
                    result = 'Not Prime';
                    break;
                }
                else{
                    continue;
                }
            }
            document.getElementById('result').innerHTML=result;
        }