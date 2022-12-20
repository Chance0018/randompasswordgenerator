// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//function that generates the random password
function generatePassword(){
  var password = "";
  for(var i = 0; i < charLength; i++) {
    var randomchar = Math.floor(Math.random() * picked.length);
    password = password + picked[randomchar];
  }
  return password;
}

//function that receives user inputs to determine requirements for password
function passPrompts(){
  charLength = parseInt(prompt("How many characters do you need for the password? (between 8 - 128)"));
//ensures users input is valid/meets basic requirements 
  if(charLength > 128 || charLength < 8 || !Number(charLength)) {
    alert("Invalid select, please try again");
    return;
  }
//allows user to select which requirments the password needs
  if(confirm("Do you need special characters?")) {
      picked = picked.concat(special)
  }
  if(confirm("Do you need numbers?")) {
      picked = picked.concat(number)
  }
  if(confirm("Do you need lowercase letters?")) {
      picked = picked.concat(lower)
  }
  if(confirm("Do you need uppercase letters?")) {
      picked = picked.concat(upper)
  }
  return true;
}
// logs users selection
var picked = []
//all characters in array to be used for random password
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];

// the function that calls the prompt to request users requirments & calls to generate the password
function writePassword() {
  var promptDone = passPrompts();

  if (promptDone) {
  var finalPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = finalPassword;
  }

}