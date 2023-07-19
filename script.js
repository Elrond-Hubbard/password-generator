
///////////////////////////////////////////////////////////////////////////////////////////////////////////

///// PASSWORD // GENERATOR /////


// Source Arrays
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const number =    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special =   ["!", "@", "#", "$", "%", "^", "&", "*", "_", "+"];


// Return the status of each checkbox option.
function getCheck(optionBox) {
  checkBox = document.querySelector(optionBox);
  if (checkBox.checked) {
    return true;
  }
  else {
    return false;
  }
}


// Return the value of the range slider.
function updateRange() {
  const range = document.querySelector("#range");
  const rangeLabel = document.querySelector("#rangeLabel");
  rangeLabel.innerHTML = range.value;
}
range.addEventListener("input", updateRange)


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
function writePassword() {
  
  // concatArray will hold all selected Source Arrays for the password.
  concatArray = []; 
  
  // getCheck is called to define checkbox states.
  hasLower = getCheck("#lowerbox"); 
  hasUpper = getCheck("#upperbox");
  hasNumber = getCheck("#numberbox");
  hasSpecial = getCheck("#specialbox");
  
  // concatPush is called to populate concatArray based on getCheck returns.
  concatPush(hasLower, lowerCase);
  concatPush(hasUpper, upperCase);
  concatPush(hasNumber, number);
  concatPush(hasSpecial, special);
  
  // newPassword array is created, populated, and joined into a string.
  newPassword = [];
  generatePassword();
  password = newPassword.join("");
  
  // Finally, the string is written to the page.
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);


///////////////////////////////////////////////////////////////////////////////////////////////////////////
