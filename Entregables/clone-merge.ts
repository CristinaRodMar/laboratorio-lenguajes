//CLONE - Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

function clone<T>(source: T): T {
    return { ...source };
}

const original = { nombre: "Estefanía", edad: 39, ciudad: "New York" };
const copia = clone(original);

console.log("Original:", original);
console.log("Copia:", copia);

//MERGE - Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

function merge<T extends object, U extends object>(source: T, target: U): T & U {
    return { ...target, ...source };
}

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const resultado = merge(a, b);

console.log(resultado);

