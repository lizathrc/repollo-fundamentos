let numbers = [12, 75, 150, 180, 145, 525, 50];
let empty = [];

for (let i = 0; i < numbers.length ; i++) {
  if ((numbers [i]% 5 == 0) && (numbers [i] <= 150)) {
    empty.push(numbers [i]);
  } 
  else if (numbers [i]> 500){
    break;
  }
} console.log(empty);