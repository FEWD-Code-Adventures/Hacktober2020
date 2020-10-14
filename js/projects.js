let mainButton = document.querySelector('.project-button');
let codetext = document.querySelector('#code-text');

mainButton.addEventListener('click', () => {
    codetext.textContent = 'Lets Code!';
})