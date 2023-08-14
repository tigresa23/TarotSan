
// crear la función que cambia el texto del h2 del HTML

var cambiarTextoh = true; //esta variable inicia en true, y cambia a false luego de tocar el boton "Tirada"
var contador = 1;
//var texto1 = setInterval(cambiarTextoh2,0);
var texto = setInterval(cambiarTextoh2,24000);

//con la idea de que el cambio de texto varie cada cierto tiempo, voy a hacer uso de un contador
// y en números impares se imprimirá el texto1
// y en números pares se imprimirá el texto2
function cambiarTextoh2(){
    if(cambiarTextoh == true && (contador%2 != 0)){
        document.getElementById("pregunta").innerHTML="Concentrate en esa pregunta que te intriga... "    //texto1
        contador ++;
            } else if (cambiarTextoh == true && (contador%2 == 0)){
                document.getElementById("pregunta").innerHTML="pulsa el boton 'tirada' y obtendrás tu consejo ";//texto2
                contador++; 
    }
}

 
function finalizaTarot(){
    cambiarTextoh = false; // este cambio de valor detiene el setInterval
    document.getElementById("pregunta").innerHTML="El consejo del Tarot es..."   
    imprimeCartas();
    imprimeConsejo();
    console.log(nombre);
    nroAleatorio = 0;
    totalSignos = 0;
}

function reiniciarTarot(){
    cambiarTextoh = true; // este cambio de valor inicia el setInterval
    document.getElementById("pregunta").innerHTML="Concentrate en esa pregunta que te intriga... "  
    borraConsejo();
    borraCartas();
    cartasElegidas(mazoCartas); //genera mazo  aleatorio
    console.log(totalSignos);
}

//-------- función inicia ------------

function inicia(){
    cambiarTextoh2(); 
    cartasElegidas(mazoCartas); //genera mazo  aleatorio
    console.log(nombre);
}



//------- ARRAY ----------//
// variable que contenga al mazo de cartas
// utilizaré un array de objetos
// el signo será 1 cuando la carta este derecha y -1 cuando la carta este invertida

const mazoCartas = [
    {
        posicion: 0,
        nombre: 'ElCarro',
        tipo: ' Movimiento', 
        signo: 1,
    },
    {
        posicion: 1,
        nombre: 'ElCarro-1', 
        tipo: ' Mediocridad',
        signo: -1,
    },
    {
        posicion: 2,
        nombre: 'ElColgado',
        tipo: ' Sabiduría', 
        signo: 1,
    },
    {
        posicion: 3,
        nombre: 'ElColgado-1', 
        tipo: ' Egoísmo',
        signo: -1,
    },
    {
        posicion: 4,
        nombre: 'ElDemonio',
        tipo: ' Dominio', 
        signo: 1,
    },
    {
        posicion: 5,
        nombre: 'ElDemonio-1', 
        tipo: ' Toxicidad',
        signo: -1,
    },
    {
        posicion: 6,
        nombre: 'ElEmperador',
        tipo: ' Liderazgo', 
        signo: 1,
    },
    {
        posicion: 7,
        nombre: 'ElEmperador-1', 
        tipo: ' Avaricia',
        signo: -1,
    },
    {
        posicion: 8,
        nombre: 'ElErmitaño',
        tipo: ' Introsprección', 
        signo: 1,
    },
    {
        posicion: 9,
        nombre: 'ElErmitaño-1', 
        tipo: ' Miedo',
        signo: -1,
    },
    {
        posicion: 10,
        nombre: 'ElHierofante',
        tipo: ' Sabiduría', 
        signo: 1,
    },
    {
        posicion: 11,
        nombre: 'ElHierofante-1', 
        tipo: ' Servidumbre',
        signo: -1,
    },
    {
        posicion: 12,
        nombre: 'ElJuicio',
        tipo: ' Pasado', 
        signo: 1,
    },
    {
        posicion: 13,
        nombre: 'ElJuicio-1', 
        tipo: ' Negación',
        signo: -1,
    },
    {
        posicion: 14,
        nombre: 'ElLoco',
        tipo: ' Espontaneidad', 
        signo: 1,
    },
    {
        posicion: 15,
        nombre: 'ElLoco-1', 
        tipo: ' Negligencia',
        signo: -1,
    },
    {
        posicion: 16,
        nombre: 'ElMago',
        tipo: ' Habilidoso', 
        signo: 1,
    },
    {
        posicion: 17,
        nombre: 'ElMago-1', 
        tipo: ' Descomprometido',
        signo: -1,
    },
    {
        posicion: 18,
        nombre: 'ElMundo',
        tipo: ' Completitud', 
        signo: 1,
    },
    {
        posicion: 19,
        nombre: 'ElMundo-1', 
        tipo: ' Idealización',
        signo: -1,
    },
    {
        posicion: 20,
        nombre: 'ElSol',
        tipo: ' Claridad', 
        signo: 1,
    },
    {
        posicion: 21,
        nombre: 'ElSol-1', 
        tipo: ' Arrogancia',
        signo: -1,
    },
    {
        posicion: 22,
        nombre: 'LaEmperatriz',
        tipo: ' Abundancia', 
        signo: 1,
    },
    {
        posicion: 23,
        nombre: 'LaEmperatriz-1', 
        tipo: ' Vagancia',
        signo: -1,
    },
    {
        posicion: 24,
        nombre: 'LaEstrella',
        tipo: ' Espiritualidad', 
        signo: 1,
    },
    {
        posicion: 25,
        nombre: 'LaEstrella-1', 
        tipo: ' Falta De Fe',
        signo: -1,
    },
    {
        posicion: 26,
        nombre: 'LaFuerza',
        tipo: ' Superación', 
        signo: 1,
    },
    {
        posicion: 27,
        nombre: 'LaFuerza-1', 
        tipo: ' Abusos',
        signo: -1,
    },
    {
        posicion: 28,
        nombre: 'LaJusticia',
        tipo: ' Justicia', 
        signo: 1,
    },
    {
        posicion: 29,
        nombre: 'LaJusticia-1', 
        tipo: ' Severidad',
        signo: -1,
    },
    {
        posicion: 30,
        nombre: 'LaLuna',
        tipo: ' Intuición', 
        signo: 1,
    },
    {
        posicion: 31,
        nombre: 'LaLuna-1', 
        tipo: ' Confusión',
        signo: -1,
    },
    {
        posicion: 32,
        nombre: 'SinNombre',
        tipo: ' Transición', 
        signo: 1,
    },
    {
        posicion: 33,
        nombre: 'SinNombre-1', 
        tipo: ' Inercia',
        signo: -1,
    },
    {
        posicion: 34,
        nombre: 'LaRuedaDeLaFortuna',
        tipo: ' Buena Suerte', 
        signo: 1,
    },
    {
        posicion: 35,
        nombre: 'LaRuedaDeLaFortuna-1', 
        tipo: ' Resistencia Al Cambio',
        signo: -1,
    },
    {
        posicion: 36,
        nombre: 'LaSumaSacerdotisa',
        tipo: ' Intuición', 
        signo: 1,
    },
    {
        posicion: 37,
        nombre: 'LaSumaSacerdotisa-1', 
        tipo: ' Soberbia',
        signo: -1,
    },
    {
        posicion: 38,
        nombre: 'LaTemplanza',
        tipo: ' Paciencia', 
        signo: 1,
    },
    {
        posicion: 39,
        nombre: 'LaTemplanza-1', 
        tipo: ' Falta de límites',
        signo: -1,
    },
    {
        posicion: 40,
        nombre: 'LaTorre',
        tipo: ' Caos', 
        signo: 1,
    },
    {
        posicion: 41,
        nombre: 'LaTorre-1', 
        tipo: ' Imprudencia',
        signo: -1,
    },
    {
        posicion: 42,
        nombre: 'LosEnamorados',
        tipo: ' Amor', 
        signo: 1,
    },
    {
        posicion: 43,
        nombre: 'LosEnamorados-1', 
        tipo: ' Indecisión',
        signo: -1,
    },
];


// la idea del tarot será elegir al azar CINCO de los arcanos mayores
//      que las CINCO cartas elegidas se impriman en pantalla,
//      el tipo de las CINCO cartas debe imprimiese en pantalla,
//      la respuesta será AFIRMATIVA si la suma de los signo es positiva,
//      la respuesta será NEGATIVA si la suma de los signo es negativo.



// este for recorre el array
// for (tipoDeVariable iniciarVariable; mientrasSeCumplaEstaCondición; realizarEstaAcción ) {
//  tipoDeVariable nombreVariable = nombreArray[ i ];
// }
 

let totalSignos = 0; //esta variable acumulará la suma de los signos
let posicion = [];
let nombre = [];
let tipo = [];
let signo = [];
var nroAleatorio = 0;

function cartasElegidas(datos) {
    var de = datos.length;
         for(let i = 0; i < 4; i++) {
         nroAleatorio = Math.floor(Math.random() * de);
    posicion[i] = datos[nroAleatorio].posicion;
    nombre[i] = datos[nroAleatorio].nombre;
    tipo[i] = datos[nroAleatorio].tipo;
    signo[i] = datos[nroAleatorio].signo;
    totalSignos += mazoCartas[nroAleatorio].signo;

//console.log(datos[Math.floor(Math.random() * datos.length)]);

             //let cartas = mazoCartas[i];
             // console.log(`${cartas.nombre}:${cartas.signo}`);
             // totalSignos += cartas.signo; // += irá acumulando a la variable totalSignos el valor de cartas.signos según corra el for
             // totalSignos = totalSignos + cartas.signo
}
}

  //console.log(cartasElegidas(mazoCartas));
  //console.log(posicion);
  //console.log(nombre);
  //console.log(tipo);
  //console.log(signo);
  //console.log(totalSignos);

var carta1;
var carta2;
var carta3;
var carta4; 
carta1 = document.getElementById("cartaElegida1");
carta2 = document.getElementById("cartaElegida2");
carta3 = document.getElementById("cartaElegida3");
carta4 = document.getElementById("cartaElegida4"); 

function imprimeCartas (){
carta1.src = "imgARCANOS/" + String(nombre[0])+ ".jpg";
carta2.src = "imgARCANOS/" + String(nombre[1])+ ".jpg";
carta3.src = "imgARCANOS/" + String(nombre[2])+ ".jpg";
carta4.src = "imgARCANOS/" + String(nombre[3])+ ".jpg"; 

}
function borraCartas (){
    carta1.src = "imgARCANOS/dorso.png";
    carta2.src = "imgARCANOS/dorso.png";
    carta3.src = "imgARCANOS/dorso.png";
    carta4.src = "imgARCANOS/dorso.png"; 
}


var consejo;
function imprimeConsejo(){
    if(totalSignos > 0){
        document.getElementById("textoConsejo").innerHTML = "<center> AVANZA.  <br/> Palabras claves: " + tipo.join() + ".";
    } else if (totalSignos == 0){
        document.getElementById("textoConsejo").innerHTML = "<center> MEDITA.  <br/>   Palabras claves: " + tipo.join() + ".";
    } else {
        document.getElementById("textoConsejo").innerHTML = "<center> RETROCEDE.   <br/>  Palabras claves: "+ tipo.join() + ".";
    } 
}

function borraConsejo(){
    document.getElementById("textoConsejo").innerHTML = "  " ;
}
 









//'1_bastos.jpg', '2_bastos.jpg ', '3_bastos.jpg', '4_bastos.jpg','5_bastos.jpg','6_bastos.jpg','7_bastos.jpg','8_bastos.jpg','9_bastos.jpg','10_bastos.jpg','11_bastos.jpg','12_bastos.jpg','13_bastos.jpg','14_bastos.jpg',
//'1_copas.jpg', '2_copas.jpg ', '3_copas.jpg', '4_copas.jpg','5_copas.jpg','6_copas.jpg','7_copas.jpg','8_copas.jpg','9_copas.jpg','10_copas.jpg','11_copas.jpg','12_copas.jpg','13_copas.jpg','14_copas.jpg',
//'1_espadas.jpg', '2_espadas.jpg ', '3_espadas.jpg', '4_espadas.jpg','5_espadas.jpg','6_espadas.jpg','7_espadas.jpg','8_espadas.jpg','9_espadas.jpg','10_espadas.jpg','11_espadas.jpg','12_espadas.jpg','13_espadas.jpg','14_espadas.jpg',
//'1_oro.jpg', '2_oro.jpg ', '3_oro.jpg', '4_oro.jpg','5_oro.jpg','6_oro.jpg','7_oro.jpg','8_oro.jpg','9_oro.jpg','10_oro.jpg','11_oro.jpg','12_oro.jpg','13_oro.jpg','14_oro.jpg'
//'ElCarro.jpg', '2_espadas.jpg ', '3_espadas.jpg', '4_espadas.jpg','5_espadas.jpg','6_espadas.jpg','7_espadas.jpg','8_espadas.jpg','9_espadas.jpg','10_espadas.jpg','11_espadas.jpg','12_espadas.jpg','13_espadas.jpg','14_espadas.jpg',
//'1_oro.jpg', '2_oro.jpg ', '3_oro.jpg', '4_oro.jpg','5_oro.jpg','6_oro.jpg','7_oro.jpg','8_oro.jpg','9_oro.jpg','10_oro.jpg','11_oro.jpg','12_oro.jpg','13_oro.jpg','14_oro.jpg'




// este for recorre el array
// for (tipoDeVariable iniciarVariable; hastaQueSeCumplaEstaCondición; realizarEstaAcción ) {
//  tipoDeVariable nombreVariable = nombreArray[ i ];
// }
 