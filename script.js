
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///// PASSWORD // GENERATOR /////


// Source Arrays
var lowerCase = ["a", "b", "c"];
var upperCase = ["A", "B", "C"];
var number = ["1", "2", "3"];
var special = ["!", "@", "#"];


// Concatenated Array and New Password Array
var concatArray = [];
var newPassword = [];


// User Options
var hasLower = true;
var hasUpper = true;
var hasNumber = true;
var hasSpecial = true;
var passwordLength = 28;


// This function will push selected characters to Concat Array based on User Options
function hasOption(x, y) {
  if (x) {
    concatArray.push(...y);
  }
}


// This loop will populate New Password Array with 
// random Concat Array indices.
function generatePassword() {
  for (i = 0; i < passwordLength; i++) {
    newPassword.push(concatArray[Math.floor(Math.random() * concatArray.length)]);
  }
}


// This function will be invoked by the generator to
// return the status of each checkbox.
function getCheck(x) {
  var checkBox = document.querySelector(x);
  if (checkBox.checked) {
    return true;
  }
  else {
    return false;
  }
}

// Write password to the #password input
function writePassword() {
  concatArray.length = 0;
  hasLower = getCheck("#lowerbox");
  hasUpper = getCheck("#upperbox");
  hasNumber = getCheck("#numberbox");
  hasSpecial = getCheck("#specialbox");
  hasOption(hasLower, lowerCase);
  hasOption(hasUpper, upperCase);
  hasOption(hasNumber, number);
  hasOption(hasSpecial, special);
  generatePassword();
  var password = newPassword.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  newPassword.length = 0;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


///////////////////////////////////////////////////////////////////////////////////////////////////////////

///// CONSOLE /////
