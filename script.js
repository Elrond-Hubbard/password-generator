
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///// PASSWORD // GENERATOR /////


// Source Arrays
var lowerCase = ["a", "b", "c"];
var upperCase = ["A", "B", "C"];
var number =    ["1", "2", "3"];
var special =   ["!", "@", "#"];


// Concatenated Array and New Password Array
var concatArray = [];
var newPassword = [];


// Checkbox & Slider Options
var hasLower =    true;
var hasUpper =    true;
var hasNumber =   true;
var hasSpecial =  true;
var passwordLength = 8;


// Return the status of each checkbox.
function getCheck(x) {
  var checkBox = document.querySelector(x);
  if (checkBox.checked) {
    return true;
  }
  else {
    return false;
  }
}


// Return the value of the range slider.
var range = document.querySelector("#range");
var rangeLabel = document.querySelector("#rangeLabel");
range.addEventListener("input", updateRange)
function updateRange() {
  rangeLabel.innerHTML = range.value;
}


// Push selected checkbox options to Concat Array.
function hasOption(x, y) {
  if (x) {
    concatArray.push(...y);
  }
}


// Populate New Password Array with 
// random Concat Array indices.
function generatePassword() {
  for (i = 0; i < passwordLength; i++) {
    newPassword.push(concatArray[Math.floor(Math.random() * concatArray.length)]);
  }
}

// This is the main password generation function.
// First concatArray is emptied so it can be repopulated.
// getCheck is called four times for each checkbox input.
// hasOption is called to populate concatArray based on getCheck returns.
// Password length is set using slider value.
// The password is then generated and joined into a string.
// Finally, newPassword is emptied so it can be repopulated.
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
  passwordLength = range.value;
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
