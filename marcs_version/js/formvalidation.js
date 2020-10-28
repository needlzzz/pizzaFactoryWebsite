//all the form fields saved as variables
const form = document.getElementById("form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const text = document.getElementById("text");

//eventlistener - it listens to the submit event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  checkInputs();
});

function checkInputs() {
  //get Values from the inputs
  const nameValue = name.value.trim();
  const emailValue = email.value.trim();
  const textValue = text.value.trim();
  
  if (nameValue === "") {
    //showerror
    //add error class
    setErrorFor(name, "Please fill out your name");
  }
   else {
    //add success class
    setSuccessFor(name);
  }
  if (emailValue === "") {
    setErrorFor(email, "Please fill out your e-mail");
  }
  else if (!isEmail(emailValue)) {
    setErrorFor(email, "E-mail is not valid");
  }
  else {
    //add success class
    setSuccessFor(email);
  }
  if (textValue <= 50) {
    setErrorFor(text, "Please enter at least 50 characters");
  }
  else{
      setSuccessFor(text);
  }

}
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  
  
  small.innerText = message;
  
  
  formControl.className ="col-75 error";
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className ="col-75 success";
}

function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
