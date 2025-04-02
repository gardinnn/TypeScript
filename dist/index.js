"use strict";
// Tipos básicos
let age = 5;
const firstname = 'Gabriel';
const isValid = true;
let idk = 5;
idk = '12';
idk = true;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, true, false];
const names = ['Gabriel', 'Mateus', 'João'];
// Tupla
const person = [4, 'ola'];
// Lista de tuplas
const people = [
    [1, 'jane'],
    [2, 'doe'],
    [3, 'lorem']
];
// intersections
const productId = '2';
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
})(Direction || (Direction = {}));
const direction = Direction.up;
console.log(age);
