const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generatePassword() {

  let passwordLenEl = document.getElementById("input-Length");

  let firstPassword = document.getElementById("password1");
  let secondPassword = document.getElementById("password2");

  firstPassword.textContent = "";
  secondPassword.textContent = "";

  if (passwordLenEl.value === null || passwordLenEl.value > 15 || passwordLenEl.value < 6) {
    alert("Password must be 6-15 characters long");
    passwordLenEl.textContent = ""; 
  }

  for (let i=0 ; i<passwordLenEl.value ; i++) {
    firstPassword.textContent += randomChar();
    secondPassword.textContent += randomChar();
  }

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

