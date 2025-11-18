// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro.
// Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP:
// Existe un método de Array.prototype que te ayudará a buscar según un patrón.

interface Book {
    title: string;
    isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string): boolean {
    return books.some(book => book.title === titleToSearch && book.isRead);
}

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];

console.log(isBookRead(books, "Devastación"));                 
console.log(isBookRead(books, "Canción defestación"));          
console.log(isBookRead(books, "Los Pilares de la Tierra"));     

