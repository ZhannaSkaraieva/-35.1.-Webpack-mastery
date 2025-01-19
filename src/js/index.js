import { greet } from './test.js';// Импорт функции из другого JS файла
import{sumArray} from '../ts/index1.ts'

document.addEventListener('DOMContentLoaded', () => {
  const button = document.createElement('button');
  button.textContent = 'Click Me!';
  button.onclick = greet;  // Привязка функции greet к событию click
  document.body.appendChild(button);
});

console.log("Hello !")
  
console.log(sumArray)