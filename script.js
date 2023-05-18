/*Aquí tienes un ejemplo de cómo un desarrollador senior podría escribir un código JavaScript para cumplir con los requisitos que mencionaste. 
Asegúrate de tener un archivo HTML con dos elementos <textarea> y dos botones, uno con el id "encriptar" y otro con el id "desencriptar". 
Luego, crea un archivo JavaScript aparte y enlázalo con tu HTML.*/

// Función para encriptar el texto
function encriptarTexto() {
// Obtener el texto del textarea de origen
var textoOriginal = document.getElementById("textarea-origen").value;

// Reemplazar las letras según las reglas establecidas
var textoEncriptado = textoOriginal
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");

// Establecer el texto encriptado en el textarea de destino
document.getElementById("textarea-destino").value = textoEncriptado;
}

// Función para desencriptar el texto
function desencriptarTexto() {
// Obtener el texto encriptado del textarea de destino
var textoEncriptado = document.getElementById("textarea-destino").value;

// Revertir las conversiones según las reglas establecidas
var textoDesencriptado = textoEncriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");

// Establecer el texto desencriptado en el textarea de origen
document.getElementById("textarea-origen").value = textoDesencriptado;
}

// Obtener referencia al botón de encriptar y asignarle un controlador de eventos
document.getElementById("encriptar").addEventListener("click", encriptarTexto);

// Obtener referencia al botón de desencriptar y asignarle un controlador de eventos
document.getElementById("desencriptar").addEventListener("click", desencriptarTexto);

/*Este código define dos funciones: encriptarTexto() y desencriptarTexto(), 
que se ejecutan cuando los botones "encriptar" y*/