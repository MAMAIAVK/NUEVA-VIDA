/*alert("hola mundo");
alert(12 * 4 + 3 - 21);*/
/*comentario de bloque*/
//comentario de linea//

let saludo = "holaaaaaaa";

let despedida;
despedida = "chaito";
saludo = "que pasaaaaaa"
let nombreUsuario = "MAMAIAVK";

alert(saludo + nombreUsuario);

saludo = despedida
/*Operadores Numericos
alert(1+2); // Sumar
alert(1-2); // Restar
alert(8+12/2); // dividir
alert(8*2); // Multiplicar
alert(8%2); // Resto division
*/

let edad = 16;
edad = 17;
edad = edad + 7; //puede sumar la variable que queramos
edad += 5;
edad++; //suma uno
edad--; // resta uno


//muestra lo que pongamos entre los parenseis en la consolo
console.log(edad);
console.log(nombreUsuario);
alert(saludo + nombreUsuario);

const SALUDO_USUARIO = "HOLA DE NUEVO";

console.log(5 > 4); //mayor que 
console.log(5 < 4); //menor que 
console.log(5 == 4); //igual que 
console.log(5 >= 4);
console.log(5 <= 4);
console.log(5 == "5");
console.log(5 === "5"); //estricitamente igual que (compara tambien si el mismo tipo de dato)
console.log(5 != 4); //no es igual que
console.log("a" > "b"); // comparar letras (ordenar alfabeticamente)
console.log("cortazar" > "navarro");




if (edad >= 18) {
    alert("eres mayor de edad");
} else {
    alert("no eres mayor de edad");
}


if (edad >= 18) {
    console.log("eres mayor de edad");
} else {
    console.log("no eres mayor de edad");
}


let premium = true;

if (premium) {
    console.log("tienes cuenta premium");
    alert("bienvenido" + nombreUsuario)
} else if (edad >= 18) {
    console.log("puedes crear una cuenta");
} else {
    ("no puedes crear una cuenta");
}

//interactuar con html DOM
// recogo el elemento. que hace con el elemento
document.getElementById("texto").innerHTML = "hola que tal" + nombreUsuario;
document.getElementById("caja").innerHTML = "<p>hasta luego lucas</p>";

// selecciona el primer elemento //
document.querySelector("#texto").innerHTML = "metiendo codigo en primer texto";

let texto = document.getElementById("texto");
texto.innerHTML = "he guardado mi selector  en una variable";



document.body.style.color = "red";

//funciones
function saludar() {
    alert("Bienvenido");
}
function modoDia() {
    document.body.style.color = "black";
    document.body.style.backgroundColor = "white";
}

function modoNoche() {
    document.body.style.color = "white";
    document.body.style.backgroundColor = "black";
}

function saludarUsuario() {
    let inputUsuario = document.querySelector("#nombre-usuario").value
    let generoFemenino = document.getElementById("femenino")
    let generoMasculino = document.getElementById("masculino")

    if (generoFemenino.checked) {
        alert("Bienvenida " + inputUsuario);
    } else if (generoMasculino.checked) {
        alert("bienvenido " + inputUsuario);
    } else {
        alert("hola caracola " + inputUsuario);
    }
}

