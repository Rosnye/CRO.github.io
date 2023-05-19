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

document.getElementById("copy").addEventListener("click", copiarTextoAlPortapapeles);

function copiarTextoAlPortapapeles() {
    /* Obtener el elemento textarea */
    var textarea = document.getElementById('textarea-destino');
  
    /* Seleccionar el texto dentro del textarea */
    textarea.select();
    textarea.setSelectionRange(0, 99999); /* Para dispositivos móviles */
  
    /* Copiar el texto al portapapeles */
    document.execCommand('copy');
  
    /* Deseleccionar el texto */
    textarea.blur();
  
    /* Mostrar una notificación o realizar alguna otra acción */
    //alert('Texto copiado al portapapeles');
  }

/*Este código define dos funciones: encriptarTexto() y desencriptarTexto(), 
que se ejecutan cuando los botones "encriptar" y*/