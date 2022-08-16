// problema 3

let cont = 2;
let i = 0;
let cont2 = 0;
let num = parseInt(process.argv.slice(cont));

while (i < (process.argv.length-2)){
  if (num == 0) {
    i += process.argv.length;
  }else{
    cont2 ++;
    i ++;
    cont ++;
    num = parseInt(process.argv.slice(cont));
  }
}
console.log("La cantidad de numeros ingresados =",cont2);

