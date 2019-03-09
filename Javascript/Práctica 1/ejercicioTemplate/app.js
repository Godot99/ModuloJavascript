//EJERCICIO 1 - if else

// let user = prompt("Are you admin or user?")
//   .toLowerCase()
//   .trim();

// if (user == "admin") {
//   alert("Hello master");
// } else if (user == "user") {
//   alert("Hello user");
// } else {
//   alert("I dont know you");
// }

//EJERCICIO 2 - ternario

// let user = prompt("Are you admin or user?")
//   .toLowerCase()
//   .trim();

// let mensaje =
//   user == "admin"
//     ? "Hello master"
//     : user == "user"
//     ? "Hello user"
//     : "I dont know you";

// alert(mensaje);

//EJERCICIO 3 - no if else

// let user = prompt("Are you admin or user?")
//   .toLowerCase()
//   .trim();

// if (user == "admin" || user == "user") {
//   alert(`hello ${user}`);
// } else {
//   alert("I dont know you");
// }

//EJERCICIO 4 - números

// let edad = +prompt("Cuántos años tienes?", 19);
// let participantType = "";
// let yearsProgramming = 0;

// let isNumber = isFinite(edad);

// if (isNumber) {
//   if (edad >= 18 && edad <= 28) {
//     participantType = "Junior";
//     yearsProgramming = +prompt("Cuántos años llevas programando?");
//   } else if (edad > 28) {
//     participantType = "Senior";
//     yearsProgramming = +prompt("Cuántos años llevas programando?");
//   } else {
//     participantType = null;
//   }
//   if (participantType) {
//     alert(
//       `Soy un ${participantType} y llevo ${yearsProgramming} años programando`
//     );
//   } else {
//     alert("ERROR EL TYPE ES NULL");
//   }
// }

//EJERCICIO 5 - calculadora

// let num1 = +prompt("Introduce un número");
// let num2 = +prompt("Introduce otro número");
// let isNumber1 = isFinite(num1);
// let isNumber2 = isFinite(num2);

// if (isNumber1 && isNumber2) {
//   let operacion = prompt("Qué operación quieres realizar?")
//     .toLowerCase()
//     .trim();
//   if (operacion == "suma") {
//     num1 + num2;
//     alert(num1 + num2);
//   } else if (operacion == "resta") {
//     num1 - num2;
//     alert(num1 - num2);
//   } else if (operacion == "multiplicacion") {
//     num1 * num2;
//     alert(num1 * num2);
//   } else if (operacion == "division") {
//     num1 / num2;
//     alert(num1 / num2);
//   } else {
//     alert("Operación no válida");
//   }
// } else {
//   alert("Introduce un número válido");
// }

//EJERCICIO 6 - cambiar nombre

// let array = [
//   { name: "Pepe", isAdmin: false },
//   { name: "Juan", isAdmin: true },
//   { name: "Luis", isAdmin: false }
// ];

// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   if (array[i].isAdmin == true) continue;
//   array[i].name = "Default";
// }

// console.log(array);

//EJERCICIO 7 - tablero hundir la flota

// let array = [{ name: "1" }, { name: "2" }, { name: "3" }];

// let array2 = [{ name: "1" }, { name: "2" }, { name: "3" }];

// tablero: for (let i = 0; i < array.length; i++) {
//   for (let j = 0; j < array2.length; j++) {
//     let turno = prompt(`Deseas poner barco en ${i + 1},${j + 1}?`);
//     console.log(turno);
//     if ((turno != 0 && turno != 1) || turno == "") {
//       break tablero;
//     }
//   }
// }
