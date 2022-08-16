// problema 4
let j = 2;
let num = parseInt(process.argv.slice(j));
let cont = 0;
let sumatoria = 0;

while (num != 0 && cont < process.argv.length - 2) {
  sumatoria += num;
  cont ++;
  j ++;
  num = parseInt(process.argv.slice(j));
}
console.log(sumatoria / cont);