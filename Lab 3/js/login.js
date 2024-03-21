// Full Name: Varun Deep Singh
// Student Id:100865156
// Date Completed:Feb 22,2024

// function to be invoked when the login button is clicked
$(document).ready(function() {
    $('.login-button').click(function(e) {
        e.preventDefault(); // Prevent the default button click action
        
        var username = $('input[type="text"]').val();
        var password = $('input[type="password"]').val();
        
        // Here, add your logic to validate the username and password.
        // For this example, we'll just print to the console.
        console.log("Username: " + username + ", Password: " + password);
        
        // You could also add an AJAX request here to check credentials against a server.
    });
});





(document).ready(function() {
    $('#loginForm').submit(function(event) {
        event.preventDefault(); 
        
        var username = $('#contactName').val(); 

        if(username.trim() !== '') { 
            var listItem = $('<li>', { class: 'nav-item', id: 'username' }).append(
                $('<a>', { class: 'nav-link navbar-text', href: '#', text: username })
            );

            
            $('#contact').after(listItem);
            
            listItem.after($('<li>', { class: 'nav-item' }).append($('<span>', { class: 'navbar-text', text: ' | ' })));


            $('#login').html('<a class="nav-link" href="login.html"><i class="fas fa-sign-out-alt"></i> Logout</a>');
            $('#login').attr('id', 'logout'); 
        }
    });
});