// Full Name: Varun Deep Singh
// Student Id:100865156
// Date Completed:Feb 22,2024




// function to be invoked when the register form is submitted 
$(function() {
    // on submitting the form 
    $('#form-registration').on('submit', function(e) {

        // creating the error div using jquery
    var $errordiv = $('<div id="ErrorMessage" style="display: none;"></div>');
    // adding the div before the form
    $('#form-registration').prepend($errordiv);

        e.preventDefault(); // Prevent the form from submitting i.e the default behavior (point f)
    

        // assuming evrey user entered data will be valid
        var ValidData = true; 
        var Message = []; // Initialize rMessage array as empty


// variable for user entered data
        var fName = $('#fName').val().trim();
        var lName = $('#lName').val().trim();
        var email = $('#emailadd').val().trim(); 
        var password = $('#password').val();
        var cPassword = $('#cpassword').val();



        // validation for each specific data field

        if(fName.length<2){
            Message.push('First Name must be 2 characters or longer.');
        }
        if(lName.length<2){
            Message.push('Last Name must be 2 characters or longer.');
        }
        if (email.length < 8 || !email.includes('@')) {
            Message.push('Email must be at least 8 characters long and include a @ symbol.');
        }

        if (password !== cPassword) {
            Message.push('Passwords are not the same');
        }
        if (password.length < 6 || cPassword.length < 6) {
            Message.push('Password must be at least 6 characters long.');
        }


// is the message is not emoty that means some error occured 
        if(Message!=""){
            // changing the data validation variable to false
            ValidData=false;
        }
        // Show or hide the error message based on form validity
        if (!ValidData) {
            // showing the error div with the error messages
            $('#ErrorMessage').html(Message.join('<br>')).show();
        } else {
            // otherwise creating the user instance
            var username=lName+fName[0];
            var user = new User(fName, lName, username, email, password);
            console.log(user);
            $(this).find('input[type="text"], input[type="password"]').val('');
            $('#ErrorMessage').hide();
        }
    })
    
});
