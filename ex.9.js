//1

let appleBtn = document.querySelector('.apple')
let tomatoBtn = document.querySelector('.tomato')
let eggsBtn = document.querySelector('.eggs')
let clearBtn = document.querySelector('.clear')
let cart = document.querySelector('.cart')


function addToCart(food) {
console.log('food', food)
  const cartItem = document.createElement('div')
  /*cartItem.innerText = food
  cart.appendChild(cartItem)
  if (btn === appleBtn) {
    return 'apple'
  } else if (btn === tomatoBtn) {
    return 'tomato'
  } else if (btn === eggsBtn) {
    return 'eggs'
  }
  */
  
}

function clearCart() {
  cart.innerHTML = '';
}

appleBtn.addEventListener('click', addToCart)
tomatoBtn.addEventListener('click', addToCart)
eggsBtn.addEventListener('click', addToCart)
clearBtn.addEventListener('click', clearCart)

