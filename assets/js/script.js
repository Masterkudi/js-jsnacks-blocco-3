let array = [];
let sum = 0;

while (sum < 50) {
  let number = parseInt(prompt("Inserisci un numero:"));
  array.push(number);
  sum += number;
}

console.log("Array:", array);
console.log("Somma degli elementi:", sum);


