function auto (MARCA, MODELO, ANNIO) {
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

var autos = [];

//La instrucción let declara una variable de alcance local con ámbito de bloque(blockscope)
for (let i = 0; i < 3; i++){
    // prompt muestra un diálogo con mensaje opcional, que solicita al usuario que introduzca un texto.
    var marca = prompt("Ingresar marca del auto");
    var modelo = prompt("Ingresar modelo del auto");
    var annio = prompt("Ingresar año del auto");

    autos.push(new auto (marca, modelo, annio))
}

for (let i = 0; i < autos.length; i++){
    console.log(autos[i]);
}