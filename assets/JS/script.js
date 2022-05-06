/* Section darkMode */
const body = document.querySelector('body');
const html = document.querySelector('html');
const toggle = document.querySelector('.toggle');
const themeText = document.querySelector('#theme-mode');
const eptBtnDarkMode = document.querySelector('#encrypt');
const dptBtnDarkMode = document.querySelector('#decrypt');
const copyBtnDarkMode = document.querySelector('#copy');

toggle.onclick = function darkMode() {
  toggle.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
  html.classList.toggle('dark-mode');
  eptBtnDarkMode.classList.toggle('dark-mode');
  dptBtnDarkMode.classList.toggle('dark-mode');
  copyBtnDarkMode.classList.toggle('dark-mode');
  const classTheme = toggle.className;
  if (classTheme.indexOf('dark-mode') !== -1) {
    themeText.innerHTML = 'Dark Mode';
  } else {
    themeText.innerHTML = 'Light Mode';
  }
};

/* End Section darkMode */

/* Script para criptografia */

const textArea = document.querySelector('#text-area');
const resultText = document.querySelector('.result-text');
const result = document.querySelector('.result');
const resultArea = document.querySelector('.result-area');
const encryptButton = document.querySelector('#encrypt');
const decryptButton = document.querySelector('#decrypt');
const copy = document.querySelector('#copy');

/* function encrypt/decrypt */

function encrypt(encryptedText) {
  const encryptKey = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
  encryptedText = encryptedText.toLowerCase();

  for (let i = 0; i < encryptKey.length; i++) {
    if (encryptedText.includes(encryptKey[i][0])) {
      encryptedText = encryptedText.replaceAll(encryptKey[i][0], encryptKey[i][1]);
    }
  }

  return encryptedText;
}

function decrypt(decryptedText) {
  const encryptKey = [['enter', 'e'], ['imes', 'i'], ['ai', 'a'], ['ober', 'o'], ['ufat', 'u']];
  decryptedText = decryptedText.toLowerCase();

  for (let i = 0; i < encryptKey.length; i++) {
    if (decryptedText.includes(encryptKey[i][0])) {
      decryptedText = decryptedText.replaceAll(encryptKey[i][0], encryptKey[i][1]);
    }
  }

  return decryptedText;
}
/* End section encrypt/decrypt */

/* The showResults function is used to show the result of encryption/decryption. */

function showResult() {
  const resultAreaClass = resultArea.className;
  const textAreaValue = textArea.value;

  if (resultAreaClass.indexOf('hide') !== -1 && textAreaValue.length !== 0) {
    result.classList.toggle('hide');
    resultArea.classList.toggle('hide');
  }
}

/* The eraseText function is used to erase the input text, which has been encrypted/decrypted. */

function eraseText() {
  document.querySelector('#text-area').value = '';
}

/* triggers */

encryptButton.addEventListener('click', () => {
  const text = textArea.value;
  const encryptText = encrypt(text);
  resultText.innerText = encryptText;
  if (text.length >= 1) {
    showResult();
    eraseText();
  } else {
    alert('Por favor, insira um texto!');
  }
});

decryptButton.addEventListener('click', () => {
  const text = textArea.value;
  const decryptText = decrypt(text);
  resultText.innerText = decryptText;
  if (text.length !== 0) {
    showResult();
    eraseText();
  } else {
    alert('Por favor, insira um texto!');
  }
});

copy.addEventListener('click', () => {
  const copyText = document.querySelector('.result-text').innerText;
  // const popup = document.querySelector('copy-alert');
  navigator.clipboard.writeText(copyText);
  alert('Texto Copiado!');
});
