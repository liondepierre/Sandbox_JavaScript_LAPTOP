class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  bookSummary() {
    return `${this.title} was written by ${this.author} in year ${this.year}`;
  }
}

//Magazine Subclass
class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month;
  }
}

//Instanitate Magazine
const mag1 = new Magazine("Mag One", "Oguzhan Koc", 2018, "Mar");
console.log(mag1.bookSummary());