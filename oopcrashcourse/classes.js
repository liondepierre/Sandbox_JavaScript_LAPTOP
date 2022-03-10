class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  bookSummary() {
    return `${this.title} was written by ${this.author} in year ${this.year}`;
  }

  //prototype method 2
  getAge() {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  }

  //Revise / Change Year // Manipulating data
  revise(newYear) {
    this.year = newYear;
    this.revised = true;
  }

  static topBookStore(){
      return `IkastBiblotek`
  }

}

//Instantiate an Object
const book1 = new Book("Book one", "author", 2022);
// console.log(book1);
console.log(Book.topBookStore());