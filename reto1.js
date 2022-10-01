var opcUSR = 3;
var opcCPU = 2;
var opc = ["piedra", "papel", "tijeras"];   

var juego = function ( opcUSR , opcCPU) {
        //empate
        if (( opcUSR === opcCPU) && ((opcUSR >= 2) || (opcUSR <= 0) ))
        {
            console.log("Empate, ambos jugadores eligieron "+ opc[opcUSR]);
        }
        //caso piedra    
        else if (opcUSR == 0 && opcCPU != 0)
        {
            //vs papel
            if ((opcUSR == 0) && (opcCPU == 1)) {
                console.log("Jugador 1 pierde, el "+ opc[opcCPU] + " envuelve a la " +opc[opcUSR] );
            }
            //vs tijeras
            else if ((opcUSR == 0) && (opcCPU == 2)) {
                console.log("Jugador 1 gana, la "+opc[opcUSR] + " rompe a las "+ opc[opcCPU] );
            }
        }
        //caso papel
        else if (opcUSR == 1 && opcCPU != 1)
        {
            //vs piedra
            if ((opcUSR == 1) && (opcCPU == 0)) {
                console.log("Jugador 2 pierde, el "+ opc[opcUSR] + " envuelve a la " +opc[opcCPU] )
            }
            //vs tijeras
            else if ((opcUSR == 1) && (opcCPU == 2)) {
                console.log("Jugador 2 gana, las "+opc[opcCPU] + " cortan el "+ opc[opcUSR] )
            }
        }
        //caso tijeras
        else if (opcUSR == 2 && opcCPU != 2)
        {
            //vs piedra
            if ((opcUSR == 2) && (opcCPU == 0)) {
                console.log("Jugador 1 pierde, la "+ opc[opcCPU] + " rompe a las " +opc[opcUSR] );
            }
            //vs papel
            else if ((opcUSR == 2) && (opcCPU == 1)) {
                console.log("Jugador 1 gana, las "+opc[opcUSR] + " cortan el "+ opc[opcCPU] );
            }
        }
        //caso el USR eligio una opción que no existe
        else
        {
            console.log("No es una opción válida, volvamos a jugar");
        }
}