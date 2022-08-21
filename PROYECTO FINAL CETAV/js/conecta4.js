const matriz = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0], // 0 es vacio
  [0, 0, 0, 0, 0, 0, 0, 0],// matriz que declara independiente cada casilla
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
];


var turno = 0; 
var nuevaFila=0;                                                                                                                          
function transpose() {
  for (var i = 0; i < matriz.length; i++)                                                                                                                
  {
      for (var j = 0; j < i; j++)
      {
          const tmp = matriz[i][j];
          matriz[i][j] = matriz[j][i];   //le da vuelta a la matriz  para acomodarlo fila y columna osea vertical
          matriz[j][i] = tmp;
      }
  }
}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

transpose(matriz);
//darle click a la fila 
document.getElementById("1").addEventListener("click", () => {
  main(0);
  
});

document.getElementById("2").addEventListener("click", () => {
  main(1);                                                       
});

document.getElementById("3").addEventListener("click", () => {
  main(2);
});

document.getElementById("4").addEventListener("click", () => {
  main(3);
});

document.getElementById("5").addEventListener("click", () => {
  main(4);
});

document.getElementById("6").addEventListener("click", () => {
  main(5);
});

document.getElementById("7").addEventListener("click", () => {
  main(6);
});

document.getElementById("8").addEventListener("click", () => {
  main(7);
});












// ganador
function ganador(tablero, jugador,  fila, columna)
{
  //Vertical
  let encontrado = false;
  let total = 0;

  for(let i = 0; i < matriz.length; i++)
  {
      if(encontrado)
      {
          if(tablero[i][columna] == jugador)
          {
              total++;
          }
          else
          {
              encontrado = false;
              total = 0;
          }
      }
      if(tablero[i][columna] == jugador && !encontrado)
      {
          encontrado = true;
          total++;
      }

      if(total == 4)
      {
       
          return true;
      }
  }

  encontrado = false;
  total = 0;

  for(var i = 0; i < matriz.length; i++)
  {
      if(encontrado)
      {
          if(tablero[fila][i] == jugador)
          {
              total++;
          }
          else
          {
              encontrado = false;
              total = 0;
          }
      }
      if(tablero[fila][i] == jugador && !encontrado)
      {
          encontrado = true;
          total++;
      }

      if(total == 4)
      {
          
          return true;
      }
  }

  //Diagonal \
  //Obtener Coordenadas donde inicia la diagonal en base a fila - columna
  nuevaFila = fila;
  nuevaColumna = columna;
  encontrado = false;
  total = 0;


  while((nuevaFila != 0 || nuevaColumna != 0))
  {
      nuevaFila--;
      nuevaColumna--;

      if(nuevaFila == 0 || nuevaColumna == 0)
      break;
  }


  do
  {
      if(nuevaFila >= matriz.length)
      break;

      if(encontrado)
      {
          if(tablero[nuevaFila][nuevaColumna] == jugador)
          {
              total++;
          }
          else
          {
              encontrado = false;
              total = 0;
          }
      }
      if(tablero[nuevaFila<0 ?0:nuevaFila ][nuevaColumna] == jugador && !encontrado) 
      // lo que hace es que si nueva fila es negativo lo convierta en 0 para que no repita el turno
      
      //operador ternario javascript ecmascript 2016
      {
          encontrado = true;
          total++;
      }

      if(total == 4)
      {
          
          return true;
      }

      nuevaFila++;
      nuevaColumna++;

  }while(nuevaFila < matriz.length);



  //Diagonal /
  nuevaFila = fila;
  
  nuevaColumna = columna;
  encontrado = false;
  total = 0;
  console.log(i)

  while((nuevaFila != 0 || nuevaColumna != matriz.length))
  {
      nuevaFila--;
      nuevaColumna++;

      if(nuevaFila == 0 || nuevaColumna == matriz.length)
      break;
  }


  do
  {
      if(nuevaFila >= matriz.length)
      break;

      if(encontrado)
      {
          if(tablero[nuevaFila<0 ?0:nuevaFila][nuevaColumna] == jugador)
          {
              total++;
          }
          else
          {
              encontrado = false;
              total = 0;
          }
      }
      if(tablero[nuevaFila<0 ?0:nuevaFila][nuevaColumna] == jugador && !encontrado) //operador ternario javascript ecmascript 2016
      {
          encontrado = true;
          total++;
      }

      if(total == 4)
      {
        
          return true;
      }

      nuevaFila++;
      nuevaColumna--;

  }while(nuevaFila < matriz.length);

  return false;
}
if (matriz.length == 0)	//No hay ningún movimiento legal
  empate();


function empate(){
console.log("Empate");
alert("Empate");
//TODO
pResultado.style.visibility = "visible";
}

function main(fila) {
  function recursivoPila(vector, indexultimo) {
      if (indexultimo == 0)
      {
          return -1; //bug para despues ver como hago para matar la funcion y que la persona
      }
      if (vector[indexultimo] == 0) //ver donde esta el 0 mas cercano
      {
          return indexultimo;
      }

      return recursivoPila(vector, indexultimo - 1);
  }

  ceromascercano = recursivoPila(matriz[fila], matriz.length);

  valores1 = document.querySelectorAll("[id='1']"); //ponerle un nombre al id
  valores2 = document.querySelectorAll("[id='2']");
  valores3 = document.querySelectorAll("[id='3']");
  valores4 = document.querySelectorAll("[id='4']");
  valores5 = document.querySelectorAll("[id='5']");
  valores6 = document.querySelectorAll("[id='6']");
  valores7 = document.querySelectorAll("[id='7']");
  valores8 = document.querySelectorAll("[id='8']");

  if(turno % 2 == 0)  //si el turno es impar osea el primero que el color amarillo
  {
          switch (fila)
          {
              case 0:
                  valores1[ceromascercano].style.background = "yellow";
                  break;
              case 1:
                  valores2[ceromascercano].style.background = "yellow";
                  break;
              case 2:
                  valores3[ceromascercano].style.background = "yellow";
                  break;
              case 3:
                  valores4[ceromascercano].style.background = "yellow";
                  break;
              case 4:
                  valores5[ceromascercano].style.background = "yellow";
                  break;
              case 5:
                  valores6[ceromascercano].style.background = "yellow";
                  break;
              case 6:                                                      //para los colores
                  valores7[ceromascercano].style.background = "yellow";
                  break;
              case 7:
                  valores8[ceromascercano].style.background = "yellow";
                  break;
          }
          matriz[fila][ceromascercano] = 1;

  }else{ //si es par entonces el segundo turno que sea azul
       switch (fila)
          {
              case 0:
                  valores1[ceromascercano].style.background = "blue";
                  break;
              case 1:
                  valores2[ceromascercano].style.background = "blue";
                  break;
              case 2:
                  valores3[ceromascercano].style.background = "blue";
                  break;
              case 3:
                  valores4[ceromascercano].style.background = "blue";
                  break;
              case 4:
                  valores5[ceromascercano].style.background = "blue";
                  break;
              case 5:
                  valores6[ceromascercano].style.background = "blue";
                  break;
              case 6:
                  valores7[ceromascercano].style.background = "blue";
                  break;
              case 7:
                  valores8[ceromascercano].style.background = "blue";
                  break;
          }
          matriz[fila][ceromascercano] = 2;

  }
  debugger


  validacion(matriz,(turno % 2) + 1,fila,ceromascercano) //es para sasber si es par o no entonces cuando vaya el segundo jugador va a dar 1 y se le sumaria 1 y con el primer jugador daria 0 y sumaria 1
  turno++
}
function validacion(matriz,turno,fila, columna) {
  let hayganador =ganador(matriz,turno,fila,columna)
  if (hayganador) {                                      //para el mensaje de que hay un ganador
        alert("El jugador "+turno+" gana!");
    
  }
  

}