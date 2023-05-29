/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:
   return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb();
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
   return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   
      var suma = arrayOfNumbers.reduce(function(accumulator, currentValue) {
        return accumulator + currentValue;
      }, 0);
      cb(suma); 
    }


function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   for (var i = 0; i < array.length; i++) {
      cb(array[i]); 
    }
}

function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
   var nuevoArray = []; // Nuevo arreglo para almacenar los resultados

  for (var i = 0; i < array.length; i++) {
    var resultado = cb(array[i]); // Pasar el elemento actual como argumento al callback y obtener el resultado
    nuevoArray.push(resultado); // Agregar el resultado al nuevo arreglo
  }

  return nuevoArray; // Retornar el nuevo arreglo
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevoArray = []; // Nuevo arreglo para almacenar los elementos que cumplen con la condición

  for (var i = 0; i < arrayOfStrings.length; i++) {
    var elemento = arrayOfStrings[i];
    if (elemento.startsWith("a")) { // Comprobar si el elemento comienza con "a"
      nuevoArray.push(elemento); // Agregar el elemento al nuevo arreglo
    }
  }

  return nuevoArray;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};
