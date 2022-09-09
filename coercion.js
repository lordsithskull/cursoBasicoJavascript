/* Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor.*/

//implicita , se puede usar el "typeof variable" para saber el tipo de variable
var a = 4 + "7";
// El valor resultante será un string  con valor "47"

var a = 4 * "7";
// El valor resultante será un number con valor 28

//Explícita 
var a = 20;

var b = String(a) //Convierte el valor a String

var c = Number(b);//Convierte el valor a Numero