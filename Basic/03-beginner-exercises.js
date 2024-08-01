/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Escribe un comentario en una línea

// Comentario en una línea de este ejercicio 1. Empezamos fácil.

// 2. Escribe un comentario en varias líneas

 /* I want to learn JavaScript 
because I wish to become an 
excellent QA Tester or Analyst*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
// String type:
let jose = "QA Analyst";
let email = "joseQA@gmail.com";
let myAlias = "joseQA";

// Number type:
let number = 11; // Entero
let decimalNumber = 7.15; // Decimal

// Boolean Type:
let haceCalor = true;
let myNamePedro = false;

// Undefined type:
let undefinedType
console.log (undefinedType);

// Null type:
let nullType = null

// Symbol type:
let symbolJose = Symbol ("mysymbol");

// BigInt type:
// Para números extremadamente grandes
let bigIntJose = BigInt (7515484651646464894616136167463166654001214n);
let bigIntJose2 = 7515484651646464894616136167463166654001214n;


// 4. Imprime por consola el valor de todas las variables


console.log(jose);            // QA Analyst
console.log(email);           // joseQA@gmail.com
console.log(myAlias);         // joseQA

console.log(number);          // 11
console.log(decimalNumber);   // 7.15

console.log(haceCalor);       // true
console.log(myNamePedro);     // false

console.log(undefinedType);   // undefined

console.log(nullType);        // null

console.log(symbolJose);      // Symbol(mysymbol)

console.log(bigIntJose);      // 7515484651646464894616136167463166654001214n
console.log(bigIntJose2);     // 7515484651646464894616136167463166654001214n

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof jose);
console.log(typeof email);
console.log(typeof myAlias);

console.log(typeof number)
console.log(typeof decimalNumber);

console.log(typeof haceCalor);
console.log(typeof myNamePedro);

console.log(typeof undefinedType);

console.log(typeof nullType);

console.log(typeof symbolJose);

console.log(typeof bigIntJose);
console.log(typeof bigIntJose2);

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

jose = "Senior QA Analyst";
email = "joseseniorQA@gmail.com"
myAlias = "joseSeniorQA"

number = 15;
decimalNumber =25.7;

haceCalor = false;
myNamePedro = true;

undefinedType = undefined;

nullType = null

symbolJose = Symbol ("newmysymbol");

bigIntJose = BigInt (12164438756459635654623n);
bigIntJose2 = 1231544789215415762354n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

jose = 81;
email = 8188;
myAlias = 127895;

number = "cuarenta y tres";
decimalNumber = "tres coma siete";

haceCalor = "false";
myNamePedro = "true";

undefinedType = 33;

nullType = "nulo";

symbolJose = true;

bigIntJose = "número larguísimo , very long number";
bigIntJose2 = "1231544789215415762354";

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const STRING_CONSTANT = "this is a string constant";

const NUMBER_CONSTANT = 15;

const BOOLEAN_CONSTANT = true;

const UNDEFINED_CONSTANT = undefined;

const NULL_CONSTANT = null;

const SYMBOL_CONSTANT = Symbol("constanteSymbol");

const BIGINT_CONSTANT = 154984648946464121356787425646n;

/* 
// 9. A continuación, modifica los valores de las constantes

const STRING_CONSTANT = "new value"; // SyntaxError: Identifier 'STRING_CONSTANT' has already been declared

const NUMBER_CONSTANT = 238; // SyntaxError: Identifier 'NUMBER_CONSTANT' has already been declared

const BOOLEAN_CONSTANT = false; // SyntaxError: Identifier 'BOOLEAN_CONSTANT' has already been declared

const UNDEFINED_CONSTANT = 155; // SyntaxError: Identifier 'UNDEFINED_CONSTANT' has already been declared

const NULL_CONSTANT = "new value2"; // SyntaxError: Identifier 'NULL_CONSTANT' has already been declared

const SYMBOL_CONSTANT = Symbol("newSymbol"); // SyntaxError: Identifier 'SYMBOL_CONSTANT' has already been declared

const BIGINT_CONSTANT = 6n; // SyntaxError: Identifier 'BIGINT_CONSTANT' has already been declared

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
*/