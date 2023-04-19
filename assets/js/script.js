// declare global variables
const generateBtn = document.querySelector("#generate");
let newPasswd = "";
const charlib = [];
let passlen = 0;
let up = "";
let low = "";
let isValid = false;
const lowletters = "abcdefghijklmnopqrstuvwxyz"
const upletters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const specialchars = "!@#$%^&*(){}[]=<>/,."
const numbs = "0123456789"
let hasLow = false;
let hasUp = false;
let hasSpec = false;
let hasNumb = false;
const typesCount = hasLow + hasUp + hasSpec + hasNumb;

//get user parameters for password
function getParams() {

  passlen = prompt("Enter a number from 8-128");

  // passlen = parseInt(passlen);
  console.log(passlen);
  console.log(typeof (passlen));
  if (validLen()) {


    hasLow = confirm("Do you want lower case letters?");
    hasUp = confirm("Do you want upper case letters?");
    hasNumb = confirm("Do you want numbers?");
    hasSpec = confirm("Do you want special characters?");
    alert("Your parameters are \n" + "Has lower case:" + hasLow + "\n" + "Has upper case:" + hasUp + "\n" + "Has numbers case:" + hasNumb + "\n" + "Has special characters:" + hasSpec);
    console.log("number of  params:" + typesCount);
    isAcceptable();
  } else {
    getParams()
  }
}


// check if there is a valid choice
function isAcceptable() {
  if (hasLow || hasUp || hasSpec || hasNumb) {
      createpool();
    }
   else {
    alert("invalid selection try again");
    getParams();
  }
}

//check password lenth is greater than 8 and less than 128
function validLen() {
  if (isNaN(passlen) || passlen < 8 || passlen > 128) {
    alert("invalid selction detected")
    return false
  }
  else {
    return true
  }
}





//if the variable for upper, lower, number and special are all not false continue othewise request addition information from user




// password types: uppercase letter, lowercase letter, special character, number

// generating Functions
//Generate lower Char
function getRandomLower() {
  if(hasLow){
  return lowletters.charAt(Math.floor(Math.random() * lowletters.length));
  }
}

//Generate upper Char
function getRandomUpper() {
  if(hasUp){
  return upletters.charAt(Math.floor(Math.random() * upletters.length));
  }
}

//Generate random whole number
function getRandomNumber() {
  if(hasNumb){
  return numbs.charAt(Math.floor(Math.random() * numbs.length));
}
}
//Generate random symbol
function getRandomSymbol() {
if(hasSpec){
  return specialchars.charAt(Math.floor(Math.random() * specialchars.length));
}
}
function initPass(){
  newPasswd.concat(getRandomLower)
  newPasswd.concat(getRandomUpper)
  newPasswd.concat(getRandomNumber)
  newPasswd.concat(getRandomSymbol)
}

function generatePassword() {
  getParams()
  initPass()
  console.log(newPasswd)
  while (newPasswd.length < passlen){
    
  }

  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
