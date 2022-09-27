function showPassword() {
    var x = document.getElementById("password");

    if (x.type === "password" ) {
        x.type = "text";
    } 
    else {
        x.type = "password";
    }
}

function login() {
    var password = document.getElementById("password");

    if (password.value.length >= 8) {
        window.location.replace("newpage.html");
        alert("Login Successfull !");
    }
    else {
        alert("Login failed");
    }
}