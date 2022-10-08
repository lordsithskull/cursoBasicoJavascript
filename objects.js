//objeto
var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio:2020,
    //método
    detalleDelAuto: function () {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
} 

//Funcion constructor 
function auto (marca, modelo, annio){
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

//NUEVAS INSTANCIAS DE AUTO 
var autoNuevo = new auto("volkswagen", "Vocho",1980) ;
var autoNuevo2 = new auto("Tesla", "Model X",2018) ;
var autoNuevo3 = new auto("Toyota", "Corolla",2020) ;

