/*Hoisting es la llamada de una variable antes de declararla.
Ejemplos*/

//En este tipo de situaciones el programa  regresará un undefine
//Es decir la variable obtendrá un valor de tipo undefine ya que no esta declarada
var miNombre;
miNombre = "Miguel"; 


/*El Hosting también se genera en variables */
hey();
function hey () {
    console.log("Hola " + miNombre)
}

var miNombre = "Miguel";

// La salida de esto seria "Hola undefined", aún cuando el valor de miNombre 
//esté asignado