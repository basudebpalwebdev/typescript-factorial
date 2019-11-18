// Import stylesheets
import "./style.css";

// Factorial function in TypeScript
function factorial(n: number): number {
  if (Number.isInteger(n) && n >= 0) 
    return n < 2 ? 1 : n * factorial(n - 1);
  else 
    throw new Error("Invalid input");
}

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");
appDiv.innerHTML = `<p>Factorial of 9 is ${factorial(9)}</p>`;
