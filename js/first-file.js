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
