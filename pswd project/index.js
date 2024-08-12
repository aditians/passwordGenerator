const pswdresult = document.getElementById("result");
const pswdgenerate = document.getElementById("generate");
const pswdlength = document.getElementById("length");
const pswduppercase = document.getElementById("uppercase");
const pswdlowercase = document.getElementById("lowercase");
const pswdnumber = document.getElementById("numbers");
const pswdsymbol = document.getElementById("symbols");
const pswdcopy = document.getElementById("copyclipboard");
const errorEl = document.getElementById('ShowError')

const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numericChars = '0123456789';
const specialChars = '!@#$%^&*()_+[]{}|;:,.<>?';

pswdgenerate.addEventListener("click", () => {
  console.log('CLICKED')
  pswdresult.style.color = "black";
  const length = pswdlength.value;
  const lower = pswdlowercase.checked;
  const upper = pswduppercase.checked;
  const number = pswdnumber.checked;
  const symbol = pswdsymbol.checked;
  const password = generatePassword(length, lower, upper, number, symbol);
  pswdresult.innerText =  password
});
function getRandomChar(charSet) {
  const randomIndex = Math.floor(Math.random() * charSet.length);
  return charSet.charAt(randomIndex);
}
function generatePassword(length, useLowercase, useUppercase, useNumbers, useSpecialChars) {
  let charSet = '';
  if(length<4 || length>20){
    errorEl.style.color = "red"
      errorEl.innerHTML= 'You must choose only length between 4 and 20 for the password.❗❗'
      return '';
  }
  if (useLowercase) charSet += lowercaseChars;
  if (useUppercase) charSet += uppercaseChars;
  if (useNumbers) charSet += numericChars;
  if (useSpecialChars) charSet += specialChars;

  if (charSet === '') {
    errorEl.style.color = "red"
    errorEl.innerHTML= 'You must select at least one character set for the password.❗❗'
    return '';
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomChar = getRandomChar(charSet);
    password += randomChar;
  }
  errorEl.innerHTML =''
  pswdresult.style.background = "transparent";
  return password;
}
pswdcopy.addEventListener("click", () => {
  console.log(pswdresult.innerHTML)
  if(pswdresult.innerHTML.includes(' ') || pswdresult.innerHTML === "" ) return;
  pswdresult.style.background = "#0087ff5c";
  errorEl.innerHTML ='copied ✅'
  errorEl.style.color = "green"
  navigator.clipboard.writeText(pswdresult.textContent);
});
