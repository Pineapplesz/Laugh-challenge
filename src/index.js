import generate from './generate'
import './styles/main.scss'
import laughing from './img/laughing.svg'

let laugh = document.querySelector('#laugh');
laugh.src = laughing;

let jokeBtn = document.querySelector('#jokeBtn')
jokeBtn.addEventListener('click', generate)