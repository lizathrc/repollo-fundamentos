const numeros = [1, 2, 2, 3, 4, 4, 5];

Array.prototype.unicos = function () {
  return this.filter((valor, indice) => {
    return this.indexOf(valor) === indice;
  });
}

console.log(numeros.unicos());