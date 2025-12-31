'use strict'
const element = document.getElementById('sarlavha');
element.textContent = 'DOM bilan ishlash';


const inputElement = document.getElementById('username');
inputElement.value = 'Asilbek';
inputElement.placeholder = 'Ismingizni kiriting';

const changeHTML = document.getElementById('sarlavha');
changeHTML.innerHTML = '<i>DOM bilan ishlash</i>';