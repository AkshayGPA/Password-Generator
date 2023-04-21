const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generatePassword() {

  // Trying to figure out how to restrict 'generate passwords' from being activated a second time without resetting the results of the first
  
  // if (firstPassword.value != "") {
  //   passwordLenEl.value = null;
  //   firstPassword.value = null;
  //   secondPassword.value = null;
  // }

  let passwordLenEl = document.getElementById("input-Length");
  console.log(passwordLenEl.value);
  // console.log(typeof(passwordLenEl.value));

  let firstPassword = document.getElementById("password1");
  let secondPassword = document.getElementById("password2");

  if (passwordLenEl.value === null || passwordLenEl.value > 15 || passwordLenEl.value < 6) {
    alert("Password must be 6-15 characters long");
    passwordLenEl.value = ""; 
  }

  for (let i=0 ; i<passwordLenEl.value ; i++) {
    firstPassword.value += randomChar();
    secondPassword.value += randomChar();
  }

  // As I have used input elements for storing the generated passwords, disabling the element once the password is generated, thus avoiding accidental addition/deletion of characters by user

  firstPassword.disabled = true;
  secondPassword.disabled = true;
}

// function to only obtain a random number
function getRandomNumber() {
  let num =  (Math.floor(Math.random() * characters.length));
  // console.log(num);
  return num;
}

// function to pick a random character from the character array
function randomChar() {
  let char = characters[getRandomNumber()];
  return char;
}

