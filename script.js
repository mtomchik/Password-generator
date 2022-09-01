// Assignment Code
var generateBtn = document.querySelector("#generate");

var numerals =["0","1","2","3","4","5","6","7","8","9"];
var specialChar = ["!","@","#","$","%","^","&","*"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];


function randomInt(min, max) {
if (!max) {
  max = min
  min = 0
}
var rand= Math.random()
return Math.floor(min*(1 - rand) + rand*max);
}

function getRandomitem(list) {
  return list [randomInt(list.length)];
}


function generatePassword() {

  var passSize = window.prompt("How many characters long would you like your password to be (8-128)?");

  var passLength = parseInt(passSize);

  if (isNaN(passLength)) {
    window.alert("Enter a number please!");
    return
  }

  if (passLength < 8) {
    window.alert("Must be at least 8 characters");
    return
  }

  if (passLength > 128) {
    window.alert("Must be no more than 128 characters!");
    return
  }
  
  var number= window.confirm("Would you like your password to contain numbers?");
  var special = window.confirm("Would you like your password to contain special characters?");
  var lower = window.confirm ("Would you like your password to include lowercase letters?");
  var upper = window.confirm ("Would you like your password to include uppercase letters?");

  var selection = []

if (number === true) {
  selection.push(numerals);
}

if (special === true) {
  selection.push(specialChar);
}

if (lower === true) {
  selection.push(lowerCase);
}

if (upper === true) {
selection.push(upperCase);
  }

if (selection.length === 0){
  selection.push(upperCase);
  }

var generatedPassword = ""

for (var i = 0; i < passLength; i++) {
var randomList = getRandomitem(selection);
var randomChar = getRandomitem(randomList);
generatedPassword += randomChar
  }
  return generatedPassword

}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
