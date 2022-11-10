const receipt = document.getElementById('receipt')

function displayReceipt(cartArray) {
  receipt.innerHTML = '';
  
  cartArray.forEach(function (item) {
  const receiptLine = document.createElement('div');
  receiptLine.textContent = 'Receipt Line: ' + item.name + ' $' + item.price + '*' + item.quantity;
    receipt.appendChild(receiptLine);
  })
  
  let cartTotal = 0;
  cartArray.forEach(function (item) {
    cartTotal = cartTotal + item.price * item.quantity;
  })
  
  const totalLine = document.createElement('div');
  totalLine.textContent = 'Cart Total = ' + cartTotal;
  receipt.appendChild(totalLine);
}


displayReceipt([
  { name: 'Apple', price: 4, quantity: 5 },
  { name: 'Orange', price: 3, quantity: 7 }
]);
