//Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;

  this.summary = function () {
    return `${this.author} has released the book called ${this.title}`;
  };
}

//Instanitate an object
const book1 = new Book("Ayy ben hala rüyada", "oguzhan koc", 2015);
const book2 = new Book("Welcome to my life", "breezy", 2016);

console.log(book1.summary());
