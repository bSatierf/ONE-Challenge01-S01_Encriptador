
const body = document.querySelector('body');
const html = document.querySelector('html')
const toggle = document.querySelector('.toggle');
const text = document.querySelector('.indicator')
toggle.onclick = function() {
        toggle.classList.toggle('dark-mode');
        body.classList.toggle('dark-mode');
        html.classList.toggle('dark-mode');
}







