//object literal
const book1 = {
    title: "Man in the Mirror",
    DOP: 2004,
    author: "Michael Jackson",
    getsummary: function(){
        return `${this.title} was written in ${this.DOP}` ;
    }
};

const book2 = {
    title: "Ben hala rüyadayim",
    DOP: 2004,
    author: "Oguzhan Koc",
    getsummary: function(){
        return `${this.title} was written in ${this.DOP}` ;
    }
};


// console.log(book1.getsummary());
console.log(Object.keys(book2));

