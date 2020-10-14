const button = document.querySelector('button');

function generateColor() {
    const color = Math.floor(Math.random()*16777215).toString(16);
    const colorTwo = Math.floor(Math.random()*16777215 - 10).toString(16);
    const colorThree = Math.floor(Math.random()*16777215 - 40).toString(16);
    const valueOne = document.querySelector('.value-one');
    const valueTwo = document.querySelector('.value-two');
    const valueThree = document.querySelector('.value-three');
    valueOne.style.backgroundColor = `#${color}`;
    valueOne.textContent = `#${color}`;
    valueTwo.style.backgroundColor = `#${colorTwo}`;
    valueTwo.textContent = `#${color}`;
    valueThree.style.backgroundColor = `#${colorThree}`;
    valueThree.textContent = `#${color}`;
}

button.addEventListener('click', () => {
    generateColor();
});