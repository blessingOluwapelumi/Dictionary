/*
const moodButton = document.getElementsByClassName('imageButton');
console.log(moodButton);

const moodButtonImage = document.getElementsByClassName('switchImage');
console.log(moodButtonImage);
*/


// the two events that can be done usining 
// button are click and hover


// Querry: means to find

const moodButton = document.querySelector('.imageButton');
const container = document.querySelector('.container')
const body = document.querySelector('body')


moodButton.addEventListener('click', () => {
    moodButton.classList.toggle('sunImage')
    container.classList.toggle('darkContainer')
    body.classList.toggle('dark-mode')
})