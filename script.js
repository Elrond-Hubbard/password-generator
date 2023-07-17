
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
var passwordLength = 8;


// Push selected characters to Concat Array based on User Options
function hasOption(x, y) {
  if (x) {
    concatArray.push(...y);
  }
}
hasOption(hasLower, lowerCase);
hasOption(hasUpper, upperCase);
hasOption(hasNumber, number);
hasOption(hasSpecial, special);


// Populate New Password Array with random Concat Array Indices
function generatePassword() {
  for (i = 0; i < passwordLength; i++) {
    newPassword.push(concatArray[Math.floor(Math.random() * concatArray.length)]);
  }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////

///// INTERFACE /////


// Validate Checkbox Input
function getCheck() {
  var checkBox = document.querySelector("#lowerbox");
  if (checkBox.checked) {
    console.log("lowercase true");
    return true;
  }
  else {
    console.log("lowercase false");
    return false;
  }
}

// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = newPassword.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(password);
  newPassword.length = 0;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


///////////////////////////////////////////////////////////////////////////////////////////////////////////

///// CONSOLE /////
