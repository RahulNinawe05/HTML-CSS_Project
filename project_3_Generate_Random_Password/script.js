const passwordBox = document.getElementById("Password");
const length = 8;

const UpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LowerCase = "abcdefghijklmnopqrstuvwxyz";
const Number = "0123456789";
const Symbol = "-=[];',./'!#$%^&*()_+{}:@";

const allChars = UpperCase + LowerCase + Number + Symbol;

function createrPassword() {
  let Password = "";
  Password += UpperCase[Math.floor(Math.random() * UpperCase.length)];
  Password += LowerCase[Math.floor(Math.random() * LowerCase.length)];
  Password += Number[Math.floor(Math.random() * Number.length)];
  Password += Symbol[Math.floor(Math.random() * Symbol.length)];

  while (length > Password.length) {
    Password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passwordBox.value = Password;
}

function copyPassword() {
  passwordBox.select();
//   document.execCommand("copy"); // this is old way
  document.navigator.clipboard.writeText("copy"); // this is new way
}
