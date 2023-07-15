// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

////////////////////////////////////////////////////////////////////////////////////////////

//Source Arrays
var lowerCase = ["a", "b", "c"];
var upperCase = ["A", "B", "C"]
var number = ["1", "2", "3"];
var special = ["!", "@", "#"];

console.log(lowerCase);
console.log(upperCase);
console.log(number);
console.log(special);