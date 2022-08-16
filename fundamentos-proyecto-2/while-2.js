// problema 2

let num1 = parseInt(process.argv.slice(2));
let num2 = 0;
let sumatoria = 0;

while (num2 <= num1) {
  sumatoria+=num2;
  num2+=2;
}
console.log('la sumatoria es ' + sumatoria);