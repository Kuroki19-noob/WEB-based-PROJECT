const form = document.getElementById('form');
const errorDisplay = document.getElementById('error-msg');

form.addEventListener('submit', (e) => {
    // Prevent the form from actually submitting so we can check errors
    e.preventDefault();

    // Grab values and remove leading/trailing whitespace
    const usernameInput = document.getElementById('username-input');
    const emailInput = document.getElementById('email-input');
    const passwordInput = document.getElementById('password-input');
    const repeatPasswordInput = document.getElementById('repeat-password-input');

    const user = usernameInput?.value.trim() || '';
    const email = emailInput?.value.trim() || '';
    const pass = passwordInput?.value || '';
    const repeatPass = repeatPasswordInput?.value || '';

    // Check if this is a signup form (username field exists)
    const isSignupPage = usernameInput !== null;

    if (isSignupPage) {
        getSignupError(user, email, pass, repeatPass);
    } else {
        getLoginError(email, pass);
    }
});
   
    function getSignupError(user, email, pass, repeatPass) {
    let errors = [];// for submit

    let missingFields = [];//for wrong inputs

    let longpass = [];

    if (user.includes(" ") || pass.includes(" ")) {
        errors.push("Username and Password cannot contain spaces.");
    }

    if (pass != repeatPass) {
        errors.push("Passwords do not match.");
    }
 
    if (pass.length > 0 && pass.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }

    
    
    if (user === "") {
    missingFields.push("Username");
    }
    if (email === "") {
    missingFields.push("Email");
    }
    if (pass === "") {
    missingFields.push("Password");
    }
    if (repeatPass === "") {
    missingFields.push("Repeat Password");
    }
    if (pass.length >= 15){
        missingFields.push("Password exceed to 15 characters")
    }


    if (missingFields.length > 0) {
 
    let combinedError = missingFields.join(", ") + " must be filled.";
    
    
    errors.push(combinedError);
    }
     

    //condition if submit is clicked
    if (errors.length != 0) {
    errorDisplay.style.color = "red";
    errorDisplay.innerHTML = errors.join("<br>");   
    } 
    else {
    submitted = true;
    errorDisplay.style.color = "green";
    errorDisplay.innerHTML = "Form submitted successfully!";
    
    alert("Account succesfully made redirecting to log in")
     
    window.location.href = "Login.html";
    }
}

    function getLoginError(email,  pass){
    let errors = []
    let missingFields = []
    
    if (email === "") {
    missingFields.push("Email");
    }
    if (pass === "") {
    missingFields.push("Password");
    }
    if (pass.length >= 15){
        missingFields.push("Password exceed to 15 characters")
    }

    if (missingFields.length > 0) {
 
    let combinedError = missingFields.join(", ") + " must be filled.";
    
    
    errors.push(combinedError);
    }
    
    if (errors.length != 0) {
    errorDisplay.style.color = "red";
    errorDisplay.innerHTML = errors.join("<br>");   
    } 
    else {
    submitted = true;
    errorDisplay.style.color = "green";
    errorDisplay.innerHTML = "Log in successfully!";
    
    alert("Account succesfully made redirecting to log in")
     
    window.location.href = "index.html";
    }
    


    return errors
}
