//CONCAT - Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const concat = <T>(a: T[], b: T[]): T[] => {
    return [...a, ...b];
};

console.log(concat([1, 2], [3, 4]));

//OPCIONAL - Implementa una nueva versión de concat donde se acepten múltiples arrays de entrada (más de 2). No utilices el método Array.prototype.concat.

const concat2 = <T>(...arrays: T[][]): T[] => {
    return arrays.reduce((acc, arr) => [...acc, ...arr], []);
};

console.log(concat2([1], [2, 3], [4, 5, 6]));          
