//1

let appleBtn = document.querySelector('.apple')
let tomatoBtn = document.querySelector('.tomato')
let eggsBtn = document.querySelector('.eggs')
let clearBtn = document.querySelector('.clear')
let cart = document.querySelector('.cart')


function addToCart(event) {
  const btn = event.target
  const cartItem = document.createElement('div')
  cartItem.innerText = btn.textContent
  cart.appendChild(cartItem)
}

function clearCart() {
  cart.innerHTML = '';
}

appleBtn.addEventListener('click', addToCart)
tomatoBtn.addEventListener('click', addToCart)
eggsBtn.addEventListener('click', addToCart)
clearBtn.addEventListener('click', clearCart)

