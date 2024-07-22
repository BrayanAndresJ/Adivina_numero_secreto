let numeroSecreto = 0;                                                        // LLamar la función de numero secreto
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 6; 

// Declarando la funciones--------------------------------------------------------------------------------------------
function asignarTextoElemento(elemento, texto){ 
    let elementoHTML = document.querySelector(elemento);                                         // Asigna un valor a la variable document.querySelector() es un método que devuelve el primer elemento del documento que coincide con el selector CSS especificado
    elementoHTML.innerHTML = texto                                                              // Modifica el HTML
    return;                         
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);              // Asignar variable al numero que ingrese el usuario               
    
    if(numeroSecreto === numeroDeUsuario){                                                      // El tripe igual se utiliza para comparar en valor y tipo al mismo tiempo
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ?  'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if(numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        else {
            asignarTextoElemento('p','El número secreto es menor');
        }
        intentos++;
        limpiarCaja();
    }                                        
    return;  
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;   // random*10+1 crea el número aleatorio de 1 a 10 y floor lo lleva a una parte entera
   
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p',"Ya se sortearon todos los números posibles");
    }

    else {
   // Si el número generado está incluido en la lista  
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();    } 
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }        
    }
                                             
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; 
     
 }
 
 function condicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto!');                                     // Asignar a los titulos o parrafos un texto descriptivo
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo} `);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
 function reiniciarJuego() {
 // Limpiar caja
 limpiarCaja();
 // Parámetros iniciales
 condicionesIniciales();
 // Deshabilitar el botón de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');
 }

 condicionesIniciales();