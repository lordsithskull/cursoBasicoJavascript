/**
 * Los bucles o loops ejecutan un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

for - recorre un bloque de código N veces  */

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes (estudiantes) {
    console.log(`Hola, ${estudiantes}`);
}

for (var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

/* 
for/of - recorre los valores de un array e itera con base a los elememtos del array */

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola, ${estudiante}`);

}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);
}

/*while - recorre un bloque de código mientras se cumple una condición específica*/

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while (estudiantes.length > 0) {
    console.log(estudiantes)
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}


/*do/while - también recorre un bloque de código mientras se cumple una condición específica  */