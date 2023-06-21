// Assignment Code
var length;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

var generateBtn = document.querySelector("#generate");
var lower = ["a",'b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var capital = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
var numbers = [0,1,2,3,4,5,6,7,8,9] 
var character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "/", "]", "^", "_", "`", "{", "|", "}", "~"];
//arrays for different criteria

// var randomLower = Math.floor(Math.random() * lower.length);
// var randomUpper = Math.floor(Math.random() * capital.length);
// var randomNumber = Math.floor(Math.random() * numbers.length);
// var randomCharacter = Math.floor(Math.random() * character.length);

// var lowerChoice = lower[randomLower];
// var upperChoice = capital[randomUpper];
// var numberChoice = numbers[randomNumber];
// var charChoice = character[randomCharacter];
//ignore above. This was my first attempt at the randomization


function generatePassword() {
  var randomPass = [];
    // Asks user input
    length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  
    if (!length) {
        alert("You need to input a number in order to continue"); //rejects input if nothing is inputted
        return;
    } else if (length < 8 || length > 128) {
      //rejects input if number isn't between 8 and 128
    alert("You must choose between 8 and 128");
       
    return;
    } else {
        // Asks users for password criteria
        confirmNumber = confirm("Do you want your password to have numbers?");
        confirmCharacter = confirm("Do you want your password to have special characters?");
        confirmUppercase = confirm("Do you want your password to have Uppercase letters?");
        confirmLowercase = confirm("Do you want your password to have Lowercase letters?");
    };
    // Else if for 4 negative options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
       
      choices = alert("You must choose at least one option!");

    } else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

      randomPass = randomPass.concat(lower,capital,numbers,character);
      //adds all selected arrays to a new array
    } else if (confirmNumber && confirmUppercase && confirmLowercase) {

      randomPass = randomPass.concat(lower,capital,numbers);

    } else if (confirmCharacter && confirmUppercase && confirmLowercase) {

      randomPass = randomPass.concat(lower,capital,character);
    } else if (confirmCharacter && confirmNumber && confirmLowercase) {

      randomPass = randomPass.concat(lower,numbers,character);
    
    } else if (confirmCharacter && confirmNumber && confirmUppercase) {

      randomPass = randomPass.concat(capital,numbers,character);
    
    } else if (confirmCharacter && confirmNumber) {

      randomPass = randomPass.concat(numbers,character);

    } else if (confirmCharacter && confirmUppercase) {

      randomPass = randomPass.concat(capital,character);
    
    } else if (confirmCharacter && confirmLowercase) {

      randomPass = randomPass.concat(lower,character);
    
    } else if (confirmNumber && confirmUppercase) {

      randomPass = randomPass.concat(capital,numbers);
    
    } else if (confirmNumber &&confirmLowercase) {

      randomPass = randomPass.concat(lower,numbers);
    
    } else if (confirmUppercase && confirmLowercase) {

      randomPass = randomPass.concat(lower,capital);
    } else if (confirmCharacter) {

      randomPass = randomPass.concat(character);
    } else if (confirmNumber) {

      randomPass = randomPass.concat(numbers);
    
    }else if (confirmUppercase) {

      randomPass = randomPass.concat(capital);
    
    } else if (confirmLowercase) {

      randomPass = randomPass.concat(lower);
    
    }
   //above is the code used to select the different criterea for the password 
    console.log(randomPass);
    var password = [];
    for(i = 0;i<length;i++){
//generates password based on inputed length and criterea
      var randomChoice= Math.floor(Math.random() * randomPass.length);
      password.push(randomPass[randomChoice]);
    }
  
     password = password.toString();
     password = password.replaceAll(',','');  
//turns password from an array to a string and removes the commas
   return password;  //returns password to function
}
// Write password to the #password input
function writePassword() {

  var finalPassword = generatePassword();

  var passwordText = document.querySelector("#password");

  // displays password on screen
  passwordText.textContent = finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
// ```
