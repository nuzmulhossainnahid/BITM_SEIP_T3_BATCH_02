var products = [
    {id:1, name:'Shirt', price:2000},
    {id:2, name:'Saee', price:4000},
    {id:3, name:'T-shirt', price:1200},
    {id:4, name:'Football', price:1500},
    {id:5, name:'Mobile', price:55000},
];
var select ='';
select += '<select basis ="1" onchange="priceQuantyTotalPrice(this.value,this)">';
select += '<option disabled selected> -- Select Product -- </option>'


$.each(products, function(key, value){
    select +='<option value="'+value.id+'">'+value.name+'</option>';
});

select += '</select>';

$('#tdOne').append(select);

//new row add
var index =2;

$('#addBtn').click(function(){
    var tr ='';
    tr += '<tr>';

    tr += '<td>';
    tr += '<select basis ="'+index+'" onchange="priceQuantyTotalPrice(this.value,this)">';
    tr += '<option disabled selected> -- Select Product -- </option>'

    $.each(products, function(key, value){
        tr +='<option value="'+value.id+'">'+value.name+'</option>';
    });
    tr += '</td>';

    tr += '<td><input type="number" name="" basis="'+index+'"id="price'+index+'"></td>';
    tr += '<td><input type="number" name="" basis="'+index+'" id="qty'+index+'"></td>';
    
    tr += '<td><input type="text" readonly name="" basis="'+index+'" id="total'+index+'"></td>';
    
    tr += '<td><button type="button" class="remove-btn">-</button></td>';
    tr +='</tr>';
    $('#res').append(tr);
    index++;
    
});
$(document).on('click', '.remove-btn', function(){
   $(this).closest('tr').remove();
});

//value = product id
function priceQuantyTotalPrice(value, select)
{
    var index = $(select).attr('basis');
    var product = products.find(bitm=> {return bitm.id == value});

    $('#price'+index).val(product.price),
    $('#qty'+index).val(1),
    $('#total'+index).val(product.price*1)

}