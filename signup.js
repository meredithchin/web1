//Theme
var icon = document.getElementById("icon");

icon.onclick = function() {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./Pic/sun.png";
  }
  else {
    icon.src = "./Pic/moon.png";
  }
}

document.getElementById("signupform").addEventListener("submit", function (event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
      alert("Passwords Do Not Match.");
      return;
  }

  function setCookie(name, value, days) {
      var expires = "";
      if (days) {
          var date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          expires = "; expires=" + date.toUTCString();
      }
      document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  setCookie("name", name, 7);
  setCookie("email", email, 7);
  setCookie("password", password, 7);

  alert("Sign Up Successful");
  window.location.href = "home.html";
  alert("Welcome! " + name);
});


