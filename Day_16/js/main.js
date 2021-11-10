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

//first to last name
$('#btnOne').click(function(){
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();

    var result = firstName+' '+lastName;
    $('#fullName').val(result);
});

var products = [
    {id:1, name:'Shirt', price:2000},
    {id:2, name:'Saee', price:4000},
    {id:3, name:'T-shirt', price:1200},
    {id:4, name:'Football', price:1500},
];
var select ='';
select += '<select>';

$.each(products, function(key, value){
    select +='<option>'+value.name+'</option>';
});

select += '</select>';

$('#tdOne').append(select);

$('#addBtn').click(function(){
    var tr ='';
    tr += '<tr>';
    tr += '<td>Name</td>';
    tr += '<td>200</td>';
    tr += '<td>2</td>';
    tr += '<td>400</td>';
    tr += '<td><button type="button" class="remove-btn">-</button></td>';
    tr +='</tr>';
    $('#res').append(tr);
    
});
$(document).on('click', '.remove-btn', function(){
   $(this).closest('tr').remove();
});