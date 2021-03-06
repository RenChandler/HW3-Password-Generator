//Global Variables
var lowercase = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
var Uppercase = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
var numerics = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialchar = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

//Function to get user input
function passwordPrompt() {
  //Variable to store the link of the password

  var length = parseInt(prompt("How many characters would you like the password to be?"));

  if (length < 8 || length > 128) {
    alert("Password has to be between 8 and 128 characters");
    return;
  }

  var checkLowercase = confirm("Do you want lowercase characters? If so, click okay");
  var checkUppercase = confirm("Do you want uppercase characters? If so, click okay");
  var checkNumerics = confirm("Do you want numeric characters? If so, click okay");
  var checkSpecialchar = confirm("Do you want special characters? If so, click okay");

  if (
    checkLowercase === false &&
    checkUppercase === false &&
    checkNumerics === false &&
    checkSpecialchar === false
  ) {
    alert("Password must include at least one character type");
    return;
  }

  //Store all the variables in an object
  var passwordChar = {
    length: length,
    lower: checkLowercase,
    upper: checkUppercase,
    num: checkNumerics,
    spec: checkSpecialchar,
  }
  return passwordChar
}

//Gets random element from array that passes through it
function randomizer(array){
  var index = Math.floor(Math.random() * array.length);
  var randEl = array[index]
  return randEl
}


function generatePassword(){
  //Variable to get user input from password prompt function
  var pwInput = passwordPrompt()
  //Store password
  var pwResult = []
  // Store character choices
  var charChoices =[]
  // Actual characters used
  var charChosen = []


  // Push random lowercase characters into charChosen array if user chooses lowercase array
  if (pwInput.lower){
    charChoices = charChoices.concat(lowercase);
    charChosen.push(randomizer(lower));
  }

  // Push random uppercase characters into charChosen array if user chooses uppercase array
  if (pwInput.upper){
    charChoices = charChoices.concat(uppercase);
    charChosen.push(randomizer(upper));
  }

  // Push random numerical characters into charChosen array if user chooses numeric array
  if (pwInput.num){
    charChoices = charChoices.concat(numerics);
    charChosen.push(randomizer(num));
  }

  // Push random special characters into charChosen array if user chooses specal array
  if (pwInput.spec){
    charChoices = charChoices.concat(specialchar);
    charChosen.push(randomizer(spec));
  }

  for (var i=0; i <pwInput.length; i++){
    var charChoice = randomizer(charChoices)
    pwResult.push(charChoice)
  }

  for (var i){
    pwResult[i]= charChoice
    return pwResult.join(' ')
  }
}

var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
