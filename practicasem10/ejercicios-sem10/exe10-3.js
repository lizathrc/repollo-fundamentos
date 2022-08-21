const numeros  = [1, 2, 2, 3, 4, 4, 5];
let duplicados = [];
const tempArray = [...numeros].sort();

for (let i = 0; i < tempArray.length; i++) {
  if (tempArray[i + 1] === tempArray[i]) {
    duplicados.push(tempArray[i]);
  }
}

console.log(duplicados);