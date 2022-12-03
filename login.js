

function validate() {
    var user = document.getElementById('user').value;
    var password = document.getElementById('password').value;

       if (user == "admin" && password == "admin") {
        window.open ('app.html')
        return false
    }
}