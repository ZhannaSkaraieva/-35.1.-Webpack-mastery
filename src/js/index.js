import { greet } from './test.js';// Импорт функции из другого JS файла
import { sumArray } from '../ts/index1.ts';
import '../styles/style.css';
import { createButton1 } from './button1.js';
import '../styles/style.less';

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = 'Click Me!';
  button.onclick = greet;  // Привязка функции greet к событию click
  document.body.appendChild(button);
  const button1 = createButton1();
  document.body.appendChild(button1);
});


  console.log("Hello !"),
  
  console.log(sumArray)