let username = document.getElementById("user");
let password = document.getElementById("pass");
let passwordConfirmed = document.getElementById("word");

function createAccStorage() {
    const usernameRegex = /^.{1,10}$/;

    if (!usernameRegex.test(username.value)) {
        alert("Username must be 10 characters or fewer");
        return;
    }

    if (password.value !== passwordConfirmed.value) {
        alert("Ensure Your Password Matches");
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        let num = localStorage.key(i);
        if (num.startsWith("username") && localStorage.getItem(num) === username.value) {
            alert("Username already taken");
            return;
        }
    }

    let randomUserId;
    do {
        randomUserId = Math.floor(Math.random() * 1000); 
    } while (localStorage.getItem(`username${randomUserId}`) !== null);

    // Store the new user
    localStorage.setItem(`username${randomUserId}`, username.value);
    localStorage.setItem(`password${randomUserId}`, password.value);

    alert("Account created");

    username.value = '';
    password.value = '';
    passwordConfirmed.value = '';
}


function authorizeAcc() {
    try {
        for (let i=1;i<=1000;i++) {
        if (username.value == localStorage.getItem(`username${i}`) && password.value == localStorage.getItem(`password${i}`)) {
            window.location.href = "studypages/userstart.html";
            sessionStorage.setItem("loggedIn", username.value);
        } else { 
            console.error("error");
        }
    }} catch {
        console.error("error");
    }
}

function deleteAcc() {
    let deletedAcc = prompt("Enter Your Username To Delete Your Account");
    let deletedPassword = prompt("Enter Your Password To Confirm");

    for (let i=1; i<=1000;i++) {
        if ((deletedAcc) == localStorage.getItem(`username${i}`) && (deletedPassword) == localStorage.getItem(`password${i}`)) {  
            console.log(i)
            localStorage.removeItem(`username${i}`);
            localStorage.removeItem(`password${i}`);
            alert('Your account has been removed.');
            break;
        } else { 
            if (i !== 1000) continue;
            console.error("error");
            alert('Invalid. Your account still stands.');
            break;
        }}
}