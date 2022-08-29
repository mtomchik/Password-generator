// Assignment Code
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
return Math.floor(Math.random()*(max - min) + min)
}

function getRandomitem(list) {
  return list[randomInt(0 , list.length - 1)]
}

function generatePassword() {

  var passwordSize = window.prompt("How many characters long would you like your password to be (8-128)?")

  var passwordLength = parseInt(passwordSize)

  if (isNaN(passwordLength)) {
    window.alert("That's not a number!")
    return
  }

  if (passwordLength < 8) {
    window.alert("Must be at least 8 characters")
    return
  }

  if (passwordLength > 128) {
    window.alert("Must be no more than 128 characters!")
    return
  }
  
  
  var number= window.confirm("Would you like your password to contain numbers?")
  var special = window.confirm("Would you like your password to contain special characters?")
  var lower = window.confirm ("Would you like your password to include lowercase letters?")
  var upper = window.confirm ("Would you like your password to include uppercase letters?")

  
  var numerals =["0","1","2","3","4","5","6","7","8","9"]
  var specialChar = ["!","@","#","$","%","^","&","*"]
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  /*can also be written
  var upperCase =[]
  for (var i=0; i< lowerCase.length; i++) {
    upperCase[i] =lowerCase[i].toUpperCase()
  }
  */

//this is our "shopping cart" for what we want in our password
var selection = []

if (number) {
  selection.push(numerals)

  var num = Math.floor(Math.random() * numerals.length)
}

if (special) {
  selection.push(specialChar)
}

if (lower) {
  selection.push(lowerCase)
}

if (upper) {
selection.push(upperCase)
  }

  var generatedPassword =""

  for (var i=0; i< passwordLength; i++) {
var randomList = getRandomitem(selection)
var randomChar = getRandomitem(randomList)
  }

}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


/*
if (lower){
  var lc = Math.floor(Math.random() * lowerCase.length)
}


if (upper){
  var uc = Math.floor(Math.random() * upperCase.length)
}
if (special) {
  var spec = Math.floor(Math.random() * specialChar.length)
}

}*/