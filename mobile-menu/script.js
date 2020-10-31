const menu = document.querySelector('.contain');
const list = document.querySelector('.list');

const topBar = document.querySelector('.top');
const midBar = document.querySelector('.mid');
const botBar = document.querySelector('.bot');

menu.addEventListener('click', () => {
	topBar.classList.toggle('changeTop');
	midBar.classList.toggle('changeMid');
	botBar.classList.toggle('changeBot');
	
list.classList.toggle('hidden')
});