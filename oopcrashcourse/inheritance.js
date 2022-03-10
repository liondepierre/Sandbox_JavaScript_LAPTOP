//Constructor

function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

//prototype method
Book.prototype.summary = function () {
  return `${this.author} has released the book called ${this.title}`;
};

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Magazine Constructor
function Magazine(title, author, year, month) {
  Book.call(this, title, author, year, month); //With the call() method, you can write a method that can be used on different objects.

  this.month = month;
}

//instanitate Magazine Object
const mag1 = new Magazine("Mag1", "John Doe", 2022, "Mar");

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1);
