// Assignment Code
var generateBtn = document.querySelector("#generate");
var buttons = document.querySelector(".buttons");
var conditions = {"Lowercase": true, "Uppercase": true, "Numbers": true, "Special": true}

onsole.log(buttons.childNodes)

buttons.childNodes.forEach(button => {
  button.addEventListener("click", function() {
    conditions[this.textContent] = !conditions[this.textContent];
    if (conditions[this.textContent]) {
      this.style = "";
    }
    else {
      this.style = "background-color: #DC143C;";
    }
  })
});

// Write password to the #password input
function writePassword() {
  g = false;
  for (const key in conditions) {
    if(conditions[key]) {
      g = true;
      break
    }
  }

  if (!g) {
    alert("Please select one or more criteria");
    return
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
