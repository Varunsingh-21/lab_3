function checkUsername(e) {                         // Declare function
    var elMsg = document.getElementById('feedback');    // Get feedback element
    if (this.value.length < 8) {                        // If username too short
      elMsg.textContent = 'Username must be 8 characters or more';  // Set msg
    } else {     ``                                   // Otherwise
      elMsg.textContent = '';                           // Clear message
    }
  }

  var elemUsername = document.getElementById('username'); // Get username input
  elemUsername.onblur = checkUsername;  // When it loses focus call checkuserName()x