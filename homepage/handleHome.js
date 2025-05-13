let username = document.getElementById("user");
let password = document.getElementById("pass");
let passwordConfirmed = document.getElementById("word");

function createAccStorage() {
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
    for (let i=1;i<=1000;i++) {
        if (username.value == localStorage.getItem(`username${i}`) && password.value == localStorage.getItem(`password${i}`)) {
            window.location.href = "studypages/userstart.html"
            sessionStorage.setItem("loggedIn", username.value);
        } else { 
            console.error("error");
        }
    }
}