/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   
      return Object.entries(objeto);
}
                         
function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var charCount = {}; // Objeto para almacenar las letras y sus conteos

  // Recorrer el string y contar las letras
  for (var i = 0; i < string.length; i++) {
    var char = string[i];

    // Si la letra ya existe en el objeto, incrementar su contador
    if (charCount[char]) {
      charCount[char]++;
    } else {
      // Si la letra no existe, inicializar su contador en 1
      charCount[char] = 1;
    }
  }

  // Ordenar las letras alfabéticamente en el objeto
  var sortedChars = Object.keys(charCount).sort();
  
  // Crear un nuevo objeto ordenado con las letras y sus conteos
  var result = {};
  for (var j = 0; j < sortedChars.length; j++) {
    var char = sortedChars[j];
    result[char] = charCount[char];
  }

  return result; // Retornar el objeto con las letras y sus conteos

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var upperCaseLetters = ""; // Variable para almacenar las letras mayúsculas
  var lowerCaseLetters = ""; // Variable para almacenar las letras minúsculas

  // Recorrer el string y separar las letras en mayúsculas y minúsculas
  for (var i = 0; i < string.length; i++) {
    var char = string[i];
    if (char === char.toUpperCase()) {
      upperCaseLetters += char; // Agregar a las letras mayúsculas
    } else {
      lowerCaseLetters += char; // Agregar a las letras minúsculas
    }
  }

  return upperCaseLetters + lowerCaseLetters;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var palabras = frase.split(" "); // Separar la frase en palabras individuales

  // Recorrer las palabras y revertir cada una
  for (var i = 0; i < palabras.length; i++) {
    palabras[i] = palabras[i].split("").reverse().join("");
  }

  return palabras.join(" "); // Unir las palabras en un nuevo string
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numeroInvertido = parseInt(numero.toString().split("").reverse().join(""));

  if (numero === numeroInvertido) {
    return "Es capicua";
  } else {
    return "No es capicua";
  }
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var result = string.replace(/[abc]/g, "");
   return result;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var sortedArray = arrayOfStrings.sort(function(a, b) {
    return a.length - b.length;
  });
  return sortedArray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var interseccion = [];
  for (var i = 0; i < array1.length; i++) {
    var elemento = array1[i];
    if (array2.includes(elemento)) {
      interseccion.push(elemento);
    }
  }
  return interseccion;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
