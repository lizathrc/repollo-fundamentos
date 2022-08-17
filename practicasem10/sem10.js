let list = parseInt(process.argv.slice(2));
let ciclo = 1;

for (let i = 0; i < list.length; i++) {
  if (process.argv.slice(2) [i] != ',') {
    console.log(list [0]);
    ciclo = parseInt(list [i]) * ciclo;
  }
} console.log(ciclo);