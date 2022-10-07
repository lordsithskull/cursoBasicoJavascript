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