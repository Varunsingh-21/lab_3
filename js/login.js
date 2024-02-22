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
