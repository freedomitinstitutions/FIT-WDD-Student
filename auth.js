const API = "PASTE_YOUR_DEPLOY_URL";

function login() {
  fetch(API, {
    method: "POST",
    body: JSON.stringify({
      action:"login",
      email:email.value,
      password:password.value
    })
  })
  .then(res=>res.text())
  .then(data=>{
    if(data==="Invalid"){
      alert("Invalid Login");
    }else{
      localStorage.setItem("student",data);
      window.location="dashboard.html";
    }
  });
}
