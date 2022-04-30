/* Teste darkMode */
const body = document.querySelector('body');
const html = document.querySelector('html');
const toggle = document.querySelector('.toggle');
// const text = document.querySelector('.indicator');

toggle.onclick = function darkMode() {
  toggle.classList.toggle('dark-mode');
  body.classList.toggle('dark-mode');
  html.classList.toggle('dark-mode');
};

// Script para criptografia

let textArea = document.getElementById('textArea');
let resultText = document.querySelector('.result-text');
const encryptButton = document.querySelector('#encrypt');
const decryptButton = document.querySelector('#decrypt');
let copy = document.querySelector('#copy');


// const teste = text.value;



function encrypt(letter) {
  letter = letter.replaceAll('e', 'enter');
  letter = letter.replaceAll('i', 'imes');
  letter = letter.replaceAll('a', 'ai');
  letter = letter.replaceAll('o', 'ober');
  letter = letter.replaceAll('u', 'ufat');

  return letter;
}

function decrypt(letter) {
  letter = letter.replaceAll('enter', 'e');
  letter = letter.replaceAll('imes', 'i');
  letter = letter.replaceAll('ai', 'a');
  letter = letter.replaceAll('ober', 'o');
  letter = letter.replaceAll('ufat', 'u');

  return letter;
}

let contentText = '';

function showResult() {
  let resultText = document.querySelector('.result-text');
  let result = document.querySelector('.result');
  resultText.classList.toggle('hide');
  result.classList.toggle('hide');
};

encryptButton.addEventListener('click', () => {
  let text = textArea.value;
  let encryptText = encrypt(text);
  console.log(encryptText);
  resultText.innerText = encryptText;
  contentText = encryptText;
  text = '';
  showResult();
});

decryptButton.addEventListener('click', () => {
  let text = textArea.value;
  let decryptText = decrypt(text);
  console.log(decryptText);
  resultText.innerText = decryptText;
  contentText = decryptText;
  text = '';
  showResult();
});

/* function moveDiv(text) {
        let textArea = document.querySelector('#text').value;
        let divTest = document.querySelector('.result-text');

        console.log(textArea)

        document.divTest.appendChild(textArea.value);

} */
