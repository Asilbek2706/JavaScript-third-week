const heading = document.createElement('h1');

const text = document.createTextNode('Subtract and Addition Module Loaded');

heading.appendChild(text);

const box = document.getElementById('box');
box.appendChild(heading);

console.log(box.parentElement)
console.log(box.children)
console.log(box.parentNode)
console.log(box.childNodes)

box.remove()