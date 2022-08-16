// problema 1

let num1 = parseInt(process.argv.slice(2));
let num2 = parseInt(process.argv.slice(3));
cont = 0;
 if (num1 < num2){
  console.log('el numero menor es ' + num1)
  while (num1 <= num2 ) {
    console.log(num1);
    num1++;
  }
 }else if (num2 < num1){
  console.log('el numero menor es ' + num2)
  while (num2 <= num1 ) {
    console.log(num2);
    num2++;
 }
}