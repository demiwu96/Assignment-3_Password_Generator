// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = ['\"', '\'', '!', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', ']', '^', '_', '`', '{', '|', '}', '~'];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q"
  , "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generate random number
function randomNum(array) {
  var listLength = array.length;
  var randomIndex = Math.floor(Math.random() * listLength);
  return randomIndex;
}

function generatePassword() {
  // Length variable gives the length of the password user desires
  var length = prompt("How long is the password? (minimum 8, maximum 128 characters)");

  // Only continue when the input is a number
  if (!isNaN(length)) {
    // Only continue when the input is in the range
    if (parseInt(length) > 7 && parseInt(length) < 129) {
      // Check the preference for password
      var confirmLower = confirm("Do you want lowercase letters?");
      var confirmUpper = confirm("Do you want uppercase letters?");
      var confirmNum = confirm("Do you want numbers?");
      var confirmSpecial = confirm("Do you want special characters?");

      // Make a choices list for generating password according to criteria
      var choices = [];
      if (confirmLower) {
        choices.push(lowercase);
      }
      if (confirmUpper) {
        choices.push(uppercase);
      }
      if (confirmNum) {
        choices.push(numbers);
      }
      if (confirmSpecial) {
        choices.push(specialChar);
      }

      // Generating password with randomizing character types and indexes 
      var newPassword = [];
      for (var i = 0; i < length; i++) {
        var list = choices[randomNum(choices)];
        newPassword.push(list[randomNum(list)]);
      }

      return newPassword.join("");
    }

    // if the input is not in the range, ask the user to try again
    alert("Please enter a number from 8 to 128. Try again!");
    return "********No password generated********";
  } else {

    // if the input is not a number, ask the user to try again
    alert("Not a number! Please try again!");
    return "********No password generated********";
  }
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
