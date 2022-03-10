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

//prototype method 2
Book.prototype.getAge = function (){
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
} 

//Revise / Change Year // Manipulating data
Book.prototype.revise = function(newYear){
    this.year = newYear;
    this.revised = true;
}


//Instanitate an object
const book1 = new Book("Ben hala rüyada", "oguzhan koc", 2015);
const book2 = new Book("Welcome to my life", "breezy", 2016);

console.log(book2);
book2.revise("2022");
console.log(book2);