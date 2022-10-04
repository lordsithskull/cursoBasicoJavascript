var opcUSR = 0;
var opcCPU = (Math.floor(Math.random() * 3));
var opc = ["piedra", "papel", "tijera"];
/*opciones 
0 = piedra
1 = papel
2 = tijeras
*/

var juego = function ( opcUSR , opcCPU) {
     //Empate 
        if ((opcUSR === opcCPU) &&  (opcUSR >= 0 || opcUSR <= 2)){
                console.log("Empate, ambos jugadores eligieron " + opc[opcUSR]);
            }
        else{
            switch (opcUSR) {
                //Piedra
                case 0:
                    if (opcCPU == 1){
                        console.log("Gana el jugador 2, el " + opc[opcCPU] + " envuelve a la piedra")
                    }
                    else if (opcCPU == 2){
                        console.log("Gana el jugador 1, la " + opc[opcUSR] + " rompe a las tijeras")
                    }                    
                    break;
                
                //Papel
                case 1:
                    if (opcCPU == 0){
                        console.log("Gana el jugador 1, el " + opc[opcUSR] + " envuelve a la piedra")
                    }
                    else if (opcCPU == 2){
                        console.log("Gana el jugador 2, las " + opc[opcCPU] + " cortan al papel")
                    }                                                       
                    break;

                //Tijeras
                case 2:
                    if (opcCPU == 0) {
                        console.log("Gana el jugador 2, la " + opc[opcCPU] + " rompe a las tijeras")
                    }
                    else if (opcCPU == 1){
                        console.log("Gana el jugador 1, las " + opc[opcUSR] + " cortan al papel")
                    }

                    break;                    
                
                default:
                    console.log("Esa opción no es válida, juguemos de nuevo")
                    break;
            }
        }
    }

juego (opcUSR, opcCPU);