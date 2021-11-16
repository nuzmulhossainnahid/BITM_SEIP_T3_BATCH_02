//Frist Name
function chackFirstName()
{
    var firstName = $('#firstName').val();
    var regex = /^[a-zA-Z-_ ]{2,15}$/;
    if(regex.test(firstName))
    {
        $('#firstNameError').text('');
        return true;
    }
    else{
        $('#firstNameError').text('First Name must be Letter and 2-15 charcater');
        return false;
    }
}
$('#firstName').keyup(function () { 
    chackFirstName();
});
//Last Name
function chacklastName()
{
    var lastName = $('#lastName').val();
    var regex = /^[a-zA-Z-_ ]{2,15}$/;
    if(regex.test(lastName))
    {
        $('#lasttNameError').text('');
        return true;
    }
    else{
        $('#lasttNameError').text('Last Name must be Letter and 2-15 charcater');
        return false;
    }
}
$('#lastName').keyup(function () { 
    chacklastName();
});
//Email
function chackEmail()
{
    var email = $('#email').val();
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if(re.test(email))
    {
        $('#emailError').text('');
        return true;
    }
    else{
        $('#emailError').text('Email  is not valid');
        return false;
    }
}
$('#email').keyup(function () { 
    chackEmail();
});
//Password
function chackPassword()
{
    var password = $('#password').val();
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if(regularExpression.test(password))
    {
        $('#passwordError').text('');
        return true;
    }
    else{
        $('#passwordError').text('Password  is not valid');
        return false;
    }
}
$('#password').keyup(function () { 
    chackPassword();
});

//show password
$('#showHide').click(function(){
    var typeval = $('#password').attr('type');
   if(typeval == 'password'){
       $('#password').attr('type','text');
   }
   else{
       $('#password').attr('type','password');
   }
});
//conform password
function checkconformPassword(){
   var password =  $('#password').val();
   var compass = $('#conformPassword').val();
   if(password == compass)
   {
       $('#comformPasswordError').text(' ');
   }
   else
   {
    $('#comformPasswordError').text('Sorry, Password not match ');
   }

}
$('#conformPassword').keyup(function () { 
    checkconformPassword();
});

//Phone Number
function chackPhoneNumber()
{
    var phoneNumber = $('#phoneNumber').val();
    const regex = /^\+?(88)?0?1[3456789][0-9]{8}\b/g;
    if(regex.test(phoneNumber))
    {
        $('#phoneNumberError').text('');
        return true;
    }
    else{
        $('#phoneNumberError').text('Phone Number  is not valid');
        return false;
    }
}
$('#phoneNumber').keyup(function () { 
    chackPhoneNumber();
});

//District
function checkDistrictName(){
    var districtName = $('#districtName').val();
    if(districtName == null)
    {
        $('#districtNameError').text('sorry, you dont select any one');
        return false;
    }
    else
    {
        $('#districtNameError').text('');
        return true;
    }
}
//Gender
function checkGender(){
   var gender =  $('input[name="genger"]:checked').val();
    if(gender != 0){
        $('#genderError').text('');
        return true;
    }
    else
    {
        $('#genderError').text('Please select your gender');
        return false;
    }
}






$('#registation').submit(function () { 
    if(chackFirstName() && chacklastName() && chackEmail() && chackPassword() && checkconformPassword() && chackPhoneNumber() && checkDistrictName() && checkGender())
    {
        return true;
    }
    else
    {
        return false;
    }
 });