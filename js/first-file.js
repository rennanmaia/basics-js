// First example override page title
const myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello world!'

function showAlert() {
  let myVariable = 'Value to show'
  alert(myVariable)
}

function sum(a, b) {
  let c = a + b
  const resultSumObject = document.getElementById('sum_result')
  resultSumObject.textContent = c
}

function ifExample() {
  let iceCream = 'chocolate'

  if (iceCream === 'chocolate') {
    alert('Yay, I love chocolate ice cream!')
  } else {
    alert('Awwww, but chocolate is my favorite…')
  }
}

function multiply(el, num1, num2) {
  let result = num1 * num2
  el.innerHTML = result
  // return result
}

function changeImage(myImage) {
  const mySrc = myImage.getAttribute('src')
  if (mySrc === 'images/example.jpg') {
    myImage.setAttribute('src', 'images/article-image.jpg')
  } else {
    myImage.setAttribute('src', 'images/example.jpg')
  }
}
