
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///// PASSWORD // GENERATOR /////


// Source Arrays
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const number =    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special =   ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+"];


// concatArray will hold all selected Source Arrays for the password.
// newPassword will contain the final generated password.
var concatArray = [];
var newPassword = [];

// Return the status of each checkbox.
function getCheck(optionBox) {
  var checkBox = document.querySelector(optionBox);
  if (checkBox.checked) {
    return true;
  }
  else {
    return false;
  }
}


// Return the value of the range slider.
range.addEventListener("input", updateRange)
function updateRange() {
  var range = document.querySelector("#range");
  var rangeLabel = document.querySelector("#rangeLabel");
  rangeLabel.innerHTML = range.value;
}


// Push selected checkbox options to Concat Array.
function concatPush(checkOption, sourceArray) {
  if (checkOption) {
    concatArray.push(...sourceArray);
  }
}


// Populate New Password Array with 
// random Concat Array indices.
function generatePassword() {
  for (i = 0; i < range.value; i++) {
    newPassword.push(concatArray[Math.floor(Math.random() * concatArray.length)]);
  }
}

// This is the main password generation function.
// First concatArray is emptied so it can be repopulated.
// getCheck is called four times for each checkbox input.
// concatPush is called to populate concatArray based on getCheck returns.
// Password length is set using slider value.
// The password is then generated and joined into a string.
// Finally, newPassword is emptied so it can be repopulated.
function writePassword() {
  var hasLower = true;
  var hasUpper = true;
  var hasNumber = true;
  var hasSpecial = true;
  concatArray.length = 0;
  hasLower = getCheck("#lowerbox");
  hasUpper = getCheck("#upperbox");
  hasNumber = getCheck("#numberbox");
  hasSpecial = getCheck("#specialbox");
  concatPush(hasLower, lowerCase);
  concatPush(hasUpper, upperCase);
  concatPush(hasNumber, number);
  concatPush(hasSpecial, special);
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

///// MATRIX RAIN EFFECT /////

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight * 0.4;
