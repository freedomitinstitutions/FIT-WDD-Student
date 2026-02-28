const API_URL = "PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE";

function showRegister() {
  document.getElementById("registerBox").style.display = "block";
}

function register() {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({
      action: "register",
      fullname: document.getElementById("fullname").value,
      email: document.getElementById("email").value,
      mobile: document.getElementById("mobile").value,
      fathername: document.getElementById("fathername").value,
      roll: document.getElementById("roll").value,
      regno: document.getElementById("regno").value,
      password: document.getElementById("password").value
    })
  })
  .then(res => res.text())
  .then(data => {
    alert("Registration Successful");
  });
}

function login() {
  fetch(API_URL, {
    method: "POST",
    body: JSON.stringify({ action: "getStudents" })
  })
  .then(res => res.json())
  .then(data => {
    let email = document.getElementById("loginEmail").value;
    let pass = document.getElementById("loginPassword").value;

    for (let i = 1; i < data.length; i++) {
      if (data[i][1] == email && data[i][6] == pass) {
        localStorage.setItem("student", JSON.stringify(data[i]));
        window.location.href = "dashboard.html";
      }
    }
  });
}