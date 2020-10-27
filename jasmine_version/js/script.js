// JavaScript - Form Validation
// Basic Validation − First of all, the form must be checked to make sure all the mandatory fields are filled in. It would require just a loop through each field in the form and check for data.
// Data Format Validation − Secondly, the data that is entered must be checked for correct form and value.

// Input fields
const name = document.getElementById("name")
const email = document.getElementById("email")
const text = document.getElementById("text")
// Form 
const form = document.getElementById("myForm")
const errorElement = document.getElementById("error")
// Validation colors
const green = "#4CAF50"
const red = "#F44336"

// Handle form
form.addEventListener("submit", function(event) {
   // prevent default behaviour
   event.preventDefault()
   if (
       validateName() && validateEmail()
   )
} )


// Validators
function validateName(){
   // check if is empty
   if(checkIfEmpty(name)) return;
   // check if it has only letters
   if(!checkIfOnlyLetters(name)) return  // if it doesnt have only letters we return
   return true
}


function validateEmail() {
   if(checkIfEmpty(email)) return
   if(!containsCharacters(email, 1)) return   // Nr. 1 steht für 1. Regel (siehe unten)
   return true 
}



// Funktionen 
function checkIfEmpty(field) {
   if(isEmpty(field.value.trim())){
      // set field invalid
      setInvalid(field, `${field.name} must not be empty`)
      return true
   } else {
      // set field valid
      setValid(field)
      return false
   }
}

function isEmpty(value){
   if(value === "") return true 
   return false
}

function setInvalid(field, message){
   field.calssName = "invalid"
   field.nextElementSibling.innerHTML = message
   field.nextElementSibling.style.color = red
}

function setValid(field){
   field.calssName = "valid"
   field.nextElementSibling.innerHTML = ""
   // field.nextElementSibling.style.color = green // muss nicht stehen, weil es  sowieso valid ist. 
}

function checkIfOnlyLetters(field) {
   if(/^[a-zA-Z] +$/.test(field.value)){  // if it returns true, means there are only corret letters 
      setValid(field)
      return true
   } else {
      setInvalid(field, `${field.name} must contain only letters`)
   return false
   }
}


case 1:
   // Email pattern 
   RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   return matchWithRegEx(regEx, field, "Must be a valid email address")
   default
   return false










