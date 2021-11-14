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

function chackEmail()
{
    var email = $('#email').val();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email))
    {
        $('#emailError').text('');
        return true;
    }
    else{
        $('#emailError').text('Email  must be @.gmail.com');
        return false;
    }
}
$('#email').keyup(function () { 
    chackEmail();
});


$('#registation').submit(function () { 
    return true;
 });