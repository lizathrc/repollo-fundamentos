// problema 5

let j = 2;
let num = parseInt(process.argv.slice(j));
let resultado = 0;
let contador = 0;

while (resultado != 1 && contador < process.argv.length - 2) {
  if (num %2 == 0) {
    resultado = num/2;
    console.log(resultado);
  } else {
    resultado = (num * 3) + 1;
    console.log(resultado); 
  } 
  contador++;
  j++;
  num = parseInt(process.argv.slice(j));
};