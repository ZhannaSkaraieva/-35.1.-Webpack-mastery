

import '../styles/style.scss';
 
export function createButton1()  {
 const button1 = document.createElement('button');
 button1.textContent = 'hi Click Me!';
 button1.onclick = greet;  // Привязка функции greet к событию click
 document.body.appendChild(button1);
};

function greet() {
    alert('Hello!')
};