// Ejercicio 1:
let hola = "hola";
console.log(hola + ", buen día");

// Ejercicio 2:
let variable1 = 123;
variable1 = "argentina";
console.log(variable1);

// Ejercicio 3:
let miNumero1 = 123;
let miNumero2 = 12.3;
let miString = "argentina";
let miBoolean = true;
let indefinido;
let miObjeto1 = {};
console.log(typeof miNumero1);
console.log(typeof miNumero2);
console.log(typeof miString);
console.log(typeof miBoolean);
console.log(typeof indefinido);
console.log(typeof miObjeto1);

// Ejercicio 4:
let miPalabra = "electronica";
console.log(parseInt(miPalabra));

// Ejercicio 5:
let miNumero3 = 123;
let miNumero4 = "2";
console.log(miNumero3 + parseInt(miNumero4));

// Ejercicio 6:
let suma = 0;
for (let i = 1; i <= 10; i++) {
  suma += i;
}
console.log("La suma de los primeros 10 números naturales es: " + suma);

// Ejercicio 7:
let palabras = ["dado", "electronica", "escocia", "rosario"];
for (let i = 0; i < palabras.length; i++) {
  let posicion = palabras[i].indexOf("a");
  console.log("La letra 'a' se encuentra en la posición " + posicion + " de la palabra " + palabras[i]);
}

// Ejercicio 8:
let miPalabra2 = "Caminando en línea recta no puede uno llegar muy lejos";
if (miPalabra2.length > 50) {
  console.log("La frase tiene más de 50 palabras");
} else {
  console.log("La frase tiene menos de 50 palabras");
}

// Ejercicio 9:
let miArrayDeNumeros = [1, 15, 157, 63, 68, 1000, 44];
for (let i = 0; i < miArrayDeNumeros.length; i++) {
  if (miArrayDeNumeros[i] % 2 == 0) {
    console.log(miArrayDeNumeros[i] + " es un número par");
  } else {
    console.log(miArrayDeNumeros[i] + " no es un número par");
  }
}

// Ejercicio 10:
var numero1 = 5;
var numero2 = 8;
if (numero1 < numero2) {
  console.log("numero1 no es mayor que numero2");
}
if (numero2 > 0) {
  console.log("numero2 es positivo");
}
if (numero1 != 0) {
  console.log("numero1 es distinto de cero");
}
if (numero1 + 1 < numero2) {
  console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
}

// Ejercicio 11:
let nombre = "Matias";
let edad = 18;
const PI = 3.14159;
// PI = 3; // Esto generará un error, ya que PI es una constante y no puede ser reasignada

// Ejercicio 12:
let precio = 99.99;
let disponible = true;
let frutas = ['manzana', 'banana', 'naranja'];
let info = { nombre: 'Juan', edad: 30, ciudad: 'Madrid' };

// Ejercicio 13:
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
  }
  
  function sumarNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
      suma += numeros[i];
    }
    return suma;
  }
  
  function encontrarLargoPalabras(palabras) {
    let longitudes = [];
    for (let i = 0; i < palabras.length; i++) {
      longitudes.push(palabras[i].length);
    }
    return longitudes;
  }

// Ejercicio 14:
// Las funciones map, reduce y filter son funciones de alto orden en JavaScript que se utilizan para operar sobre arrays. Se pueden aplicar en ejercicios que requieran transformar, reducir o filtrar elementos de un array, respectivamente.



