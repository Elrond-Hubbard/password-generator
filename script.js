


///// PASSWORD // GENERATOR /////

// Source Arrays
var lowerCase = ["a", "b", "c"];
var upperCase = ["A", "B", "C"]
var number = ["1", "2", "3"];
var special = ["!", "@", "#"];

// Concatenated Array and Generated Password Array
var concatArray = [];
var generatePassword = [];

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

// Populate Password Array with random Concat Array Indices
for (i = 0; i < passwordLength; i++) {
  generatePassword.push(concatArray[Math.floor(Math.random() * concatArray.length)]);
}

// Convert Generated Password to String
var password = generatePassword.join("")

///// ASSIGNMENT // CODE /////

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);