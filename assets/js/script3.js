const N = parseInt(prompt("Inserisci un numero:"));

for (let i = 0; i < N; i++) {
  const array = [];
  for (let j = 0; j < 10; j++) {
    array.push(Math.floor(Math.random() * 100) + 1);
  }
  console.log("Array", i + 1 + ":", array);
}
