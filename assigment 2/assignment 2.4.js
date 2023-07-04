// 4. Write a JS Function to validate Email Address
// Must contains @
// Must ends with .com/.org/.edu

function validateEmail() {
    var email = prompt("Enter the email address");
    if(email.includes("@") && (email.includes(".com") || email.includes(".org") || email.includes(".edu"))) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

// validateEmail();
