// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt user for password criteria
  //  length 8 < 128, lowercase, uppercase, numbers, special characters
  // Validate input
  // Generate Password
  // Display password on the page

  return "Generated Password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
