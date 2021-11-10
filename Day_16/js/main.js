// function createElement(){
//     var inputOne = document.createElement("input");
//     var inputTwo = document.createElement("input");
//     var div = document.createElement("div");

//     div.appendChild(inputOne);
//     div.appendChild(inputTwo);

//     inputOne.style.marginRight = '5px';
//     div.style.margin = '5px 0px'

//     var wrapper = document.getElementById("wrapper");
//     wrapper.appendChild(div);



// }
// var btn = document.getElementById("btn");
// btn.onclick = function()
// {
//  createElement();
// }

// $("#h1").click(
//     function(){
//         $(this).css('color','red');

//     });

$('#btn').click(function(){
    var div ='';
    div +='<div>' ;
    div +='<input type="text"/>';
    div +='<input type="text"/>';
    div +='</div>';
    $('#wrapper').append(div);


});

$('#btnOne').click(function(){
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();

    var result = firstName+' '+lastName;
    $('#fullName').val(result);
});