const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  numbers.forEach(number => {
    if (number % 2 === 0) {
      document.getElementById("green").innerHTML += number + "<br>";
    } else {
      document.getElementById("red").innerHTML += number + "<br>";
    }
  });