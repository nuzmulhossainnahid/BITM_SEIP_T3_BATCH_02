var sub = document.getElementById("submit");
   sub.onclick= function(){
       var strNamber= Number(document.getElementById('strNamber').value);
       var endNumber = Number(document.getElementById('endNumber').value);
       var choice = document.getElementsByName('choice');
       var tamp = '';
       if(choice[0].checked==true){
        temp = 'odd';
        }
        else{
            temp= 'even';
        }


       if(strNamber<=endNumber){
           if(temp=='even'){
            for (var i=strNamber; i<= endNumber;i++){
                if(i/2==0){
                    document.getElementById('result').innerHTML += i +',';
                }
               
            }
           }
           else{
            for (var i=strNamber; i<= endNumber;i++){
                document.getElementById('result').innerHTML += i +',';
            }
           }
           
       
    }
    else
    {
        if(temp=='odd'){
            for (var i=strNamber; i>= endNumber;i--)
            {
                if(i%2 != 0){
                    document.getElementById('result').innerHTML += i +',';
                }
                
            }
        }else{
            for (var i=strNamber; i>= endNumber;i--)
            {
                document.getElementById('result').innerHTML += i +',';
            }
        }
        
       
    }
    
   }
    