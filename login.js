var attempt = 3;

const validate = () => {
  const user = document.getElementById("user").value;
  const password = document.getElementById("password").value;
  const submit = document.getElementById("submit").value;
 

  if (user == "admin" && password == "admin") {
    window.open("app.html");
    return false;
  } else {
    attempt--;
    alert("You have "+attempt+" left attempt");
    if (attempt == 0) {
      document.getElementById("user").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("submit").disabled = true;
      return false;
    }
  }
}