// HEAD - Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const head = <T>([first]: T[]): T | undefined => {
    return first;
};

console.log(head([1, 2, 3, 4])); 

//TAIL - Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = <T>([_, ...rest]: T[]): T[] => {
    return rest;
};

console.log(tail([1, 2, 3, 4]));

//INIT - Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = <T>(array: T[]): T[] => {
    return array.slice(0, -1);
};

console.log(init([1, 2, 3, 4]));     

//LAST - Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = <T>(array: T[]): T | undefined => {
    return array[array.length - 1];
};

console.log(last([1, 2, 3, 4]))