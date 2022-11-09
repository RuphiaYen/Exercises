function changeText() {
document.getElementById('change-button').innerText = 'Done';
}


function changeOtherText() {
  let button = document.getElementById('change2-button');
  button.innerText = 'Changed';
}


const btn = document.querySelector('.btn');

btn.addEventListener('click', changeText);

function changeText() {
  btn.innerText = 'Done';
}


//2




let count = 0;

function increment() {
  count = count + 1
  updateCount();
}

//3

function decrement() {
  count = count - 1;
  updateCount();
}

function updateCount() {
 let counter = document.getElementById('counter'); 
 console.log(count);
  counter.innerText = count;
}

//4

const inputBtn = document.querySelector('.inputbtn');
const input = document.querySelector('.input');
const output = document.querySelector('.output');

inputBtn.addEventListener('click', displayContent)



function displayContent() {
  let text = input.value
  let div = document.createElement('div')
  div.innerText = text
  document.body.appendChild(div)
}

