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
<<<<<<< HEAD
    valueTwo.textContent = `#${colorTwo}`;
    valueThree.style.backgroundColor = `#${colorThree}`;
    valueThree.textContent = `#${colorThree}`;
=======
    valueTwo.textContent = `#${color}`;
    valueThree.style.backgroundColor = `#${colorThree}`;
    valueThree.textContent = `#${color}`;
>>>>>>> 7e12c38ec169385f5587b2f18e58e37bb418b951
}

button.addEventListener('click', () => {
    generateColor();
});