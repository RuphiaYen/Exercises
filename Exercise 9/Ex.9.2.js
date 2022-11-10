let cmBtn = document.querySelector('.cm')
let inchBtn = document.querySelector('.inch')
let input = document.querySelector('input')

cmBtn.addEventListener('click', convertToCm)
inchBtn.addEventListener('click', convertToInch)

function convertToCm() {
  const value = input.value
  const convertedValue = value * 2.54;
  const result = document.createElement('div')
  result.innerText = convertedValue
  document.body.appendChild(result)
}

function convertToInch() {
  const value = input.value
  const convertedValue = value / 2.54
  const result = document.createElement('div')
  result.innerText = convertedValue
  document.body.appendChild(result)
}

