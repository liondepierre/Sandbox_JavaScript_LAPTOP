// Object Of Prototypes
const bookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in year ${this.year}`;
  },
  getAge: function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`;
  },
};

//Create object
// const book1 = Object.create(bookProtos);
// book1.title = "Book one";
// book1.author = "Oguzhan Koc";
// book1.year = 2022;

const book1 = Object.create(bookProtos, {
  title: { value: "Book One" },
  author: { value: "Oguzhan" },
  year: { value: 2022 },
});
console.log(book1);
