function login(){
  window.location.href = "login.html";
  let email=document.getElementById("login_email").value;
  let password=document.getElementById("login_password").value;
  if(email=="brrrgrrr123@gmail.com"&&password=="123456"){
    window.location.assign("index.html");
    alert("Login Successfull");
  }
  else{
    alert("invalid username or password")
  }
}

function signup(){
   window.location.href = "signup.html";
   let username=document.getElementById("signup_username").value;
   let email=document.getElementById("signup_email").value;
   let password=document.getElementById("signup_password").value;
   let validRegex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if(username==null||username==''){
     alert("Username can't be empty!");
     return false;
   }
   else if(!email.match(validRegex)){
     alert("Please enter the valid email");
     return false;
   }
   else if(password.length<6){
     alert("Password must be atleast 6 characters");
     return false;
   }
   else {
     window.location.assign("login.html");
     alert("Signup Successfull");
   }
}

function order() {
  window.location.href = "order.html";
}








