// Global Selection
var Name_Input = document.querySelector(".Name-Input");
var Email_Input = document.querySelector(".Email_Input");
var Pass_Input = document.querySelector(".Pass_Input");
var signUP_btn = document.querySelector(".signUP_btn");
var signIN_auth_email = document.querySelector(".signIN-auth-email");
var signIN_auth_pass = document.querySelector(".signIN-auth-pass");
var login_btn = document.querySelector(".login_btn");
var login_btn_link = document.querySelector(".anchor2");
var SignUp_btn_link = document.querySelector(".anchor");
var alert = document.querySelector(".alert");
var alertUP = document.querySelector(".alertUP");
// var pass_text = document.querySelector(".pass_text");
var shop = document.getElementById("shop");
 var sweetNum = 0;
 var count = document.querySelector(".count");
 var log_out_btn = document.querySelector(".log-out-btn");
var Customers;

// Load all users in Customers
window.addEventListener("load", function () {
  if (localStorage.getItem("userInfo") != undefined) {
    Customers = JSON.parse(localStorage.getItem("userInfo"));
    // to display them without perform add fun
  } else {
    Customers = [];
  }
});
// Sign up Function
function SignUP_fun() {
  if (
    validate_Name(Name_Input.value) &&
    validate_Email(Email_Input.value) &&
    validate_pass(Pass_Input.value)
  ) {
    if (existed_data()) {
      existed_data();
    } else {
      userInfo = {
        userName: Name_Input.value,
        userEmial: Email_Input.value,
        userpass: Pass_Input.value,
      };
      Customers.push(userInfo);
      localStorage.setItem("userInfo", JSON.stringify(Customers));
      SignUp_btn_link.setAttribute("href", "home.html");
      clear_inputs();
    }
  }
}
// SIGN In function
function signin_fun() {
    
  for (var i = 0; i < Customers.length; i++) {
    if (
      Customers[i].userEmial == signIN_auth_email.value &&
      Customers[i].userpass == signIN_auth_pass.value
    ) {
      login_btn_link.setAttribute("href", "home.html");
    } else if (signIN_auth_email.value == "" || signIN_auth_pass.value == "") {
      Swal.fire("Please Enter Your Data!");
    } else {
      alert.innerHTML =
        "The username or password is incorrect";
    }
  }
  
}

// Clear Inputs
function clear_inputs() {
  Name_Input.value = "";
  Email_Input.value = "";
  Pass_Input.value = "";
}
// Vlaidte  Name
function validate_Name(User_name) {
  var userNameRegex = /^[A-z]{1,30}$/;
  if (userNameRegex.test(User_name) == false) {
    Swal.fire("Please Enter Valid Name!");
  }
  return userNameRegex.test(User_name);
}
// Validate Email
function validate_Email(User_email) {
  var userEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (userEmailRegex.test(User_email) == false) {
    Swal.fire("Please Enter Valid Email!");
  }
  return userEmailRegex.test(User_email);
}
// validate Password
function validate_pass(Pass_pass) {
  var userPassRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  if (userPassRegex.test(Pass_pass) == false) {
    Swal.fire("Please Enter Valid Password!");
  }
  return userPassRegex.test(Pass_pass);
}
// IF user signed up with exist email
function existed_data() {
  for (var i = 0; i < Customers.length; i++) {
    if (
      Customers[i].userName == Name_Input.value &&
      Customers[i].userEmial == Email_Input.value &&
      Customers[i].userpass == Pass_Input.value
    ) {
      //   login_btn_link.setAttribute("href", "home.html");

      alertUP.innerHTML = "This account is already existed !";
      return true;
    }
  }
}
// show password
function show_password()
{
    if ( signIN_auth_pass.type==="password")
    {
       signIN_auth_pass.setAttribute("type", "text");
    }else if(signIN_auth_pass.type === "text"){
         signIN_auth_pass.setAttribute("type", "password");
    }
   
}
// show password in sign up 
function show_up_pass()
{
     if (Pass_Input.type === "password") {
       Pass_Input.setAttribute("type", "text");
     } else if (Pass_Input.type === "text") {
       Pass_Input.setAttribute("type", "password");
     }
}

// Slider 
// when click on any img chenge #lightboxcontainer =>(display from none to flex)

var imgs = Array.from(document.querySelectorAll(".slide-img"));
var imageIndex;
for (var i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    imageIndex = imgs.indexOf(e.target); // get num of img from all images

    var imgSrc = e.target.getAttribute("src"); // get src of current img
    document.querySelector("#lightboxcontainer").style.display = "flex";
    document.querySelector(
      "#lightboxitem"
    ).style.backgroundImage = `url(${imgSrc})`; // put trageted image
  });
}
// Close icon

var close_i = document.querySelector("#close");
function Close() {
  document.querySelector("#lightboxcontainer").style.display = "none";
}
close_i.addEventListener("click", Close);

// next icon

function next() {
  imageIndex++;
  if (imageIndex == imgs.length) {
    imageIndex = 0;
  }
  var imgSrcc = imgs[imageIndex].getAttribute("src");
  document.querySelector(
    "#lightboxitem"
  ).style.backgroundImage = `url(${imgSrcc})`;
}
document.querySelector("#next").addEventListener("click", next);

// prev icon

function previous() {
  imageIndex--;
  if (imageIndex == -1) {
    imageIndex = imgs.length - 1;
  }
  var imgSrcc = imgs[imageIndex].getAttribute("src");
  document.querySelector(
    "#lightboxitem"
  ).style.backgroundImage = `url(${imgSrcc})`;
}

document.querySelector("#prev").addEventListener("click", previous);

document.body.addEventListener("keyup", function (e) {
  console.log(e.code);
  if (e.code == "ArrowRight") {
    next();
  } else if (e.code == "ArrowLeft") {
    previous();
  } else if (e.code == "Space") {
    Close();
  }
});
// Shopping Function
function shopping()
{
     sweetNum+=1;
    count.innerHTML=`${sweetNum}`

}
// Log OUT 
function log_out()
{
   log_out_btn.setAttribute("href", "index.html");
}
