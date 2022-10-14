# BASIC JS Course
This tutorial is based on Mozilla Tutorial about JavaScript available [here](https://developer.mozilla.org/pt-BR/docs/Learn/Getting_started_with_the_web/JavaScript_basics">).

## 1. First Run
### Shows an alert message on the page

```
<script lang="javascript">
  alert('This is the first JavaScript running!')
</script>
```

## 2. Declare const and change an element

### Select an element on the page and change its value

#### **`index.html`**
``` html
<script lang="javascript" src="js/first-file.js"></script>
```

#### **`js/first-file.js`**
``` js
// First example override page title
const myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello world!'
```

## 3.Variables
### 
```js
let myVariable;
myVariable = "Bob";
let myVariable = "Bob";
```