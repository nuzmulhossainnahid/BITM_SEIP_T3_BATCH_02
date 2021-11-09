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


        var img1 = document.getElementById("img1");
        img1.onclick = function(){
            var mainImage = document.getElementById("mainImage");
            var imgurl1= img1.getAttribute('src');
            mainImage.setAttribute('src', imgurl1);
        }
        var img2 = document.getElementById("img2");
        img2.onclick = function(){
            var mainImage = document.getElementById("mainImage");
            var imgurl2= img2.getAttribute('src');
            mainImage.setAttribute('src', imgurl2);
        }
        var img3 = document.getElementById("img3");
        img3.onclick = function(){
            var mainImage = document.getElementById("mainImage");
            var imgurl3= img3.getAttribute('src');
            mainImage.setAttribute('src', imgurl3);
        }
        var img4 = document.getElementById("img4");
        img4.onclick = function(){
            var mainImage = document.getElementById("mainImage");
            var imgurl4= img4.getAttribute('src');
            mainImage.setAttribute('src', imgurl4);
        }



        var data =['img/2.jpeg','img/3.jpg','img/4.jpg','img/1.jpg'];
        var sliderMainImage = document.getElementById('simage-1');
        var index = 0;
        function changeImage(){
            sliderMainImage.setAttribute('src', data[index]);
            index++;
            if(index==data.length)
            {
                index=0;
            }
        }
        setInterval(changeImage, 1000);

       var submit = document.getElementById("submit");
       submit.onclick= function(){
           var height = document.getElementById("height").value;
           var width = document.getElementById("width").value;
           var color = document.getElementById("color").value;
           var float = document.getElementById("float").value;
           var borderRedious = document.getElementById("borderRedious").value;

           var div = document.createElement('div');
           div.style.height= height + 'px';
           div.style.width= width + 'px';
           div.style.backgroundColor= color;
           div.style.borderRedious= borderRedious;
           div.style.float= float;
           var custome = document.getElementById("custom");
           custome.append(div);

        
       } 