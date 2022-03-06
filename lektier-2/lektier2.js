const more = document.getElementById("more");
const less = document.getElementById("less");
const myDiv = document.getElementById("myDiv");

more.onclick = function () {
  if (myDiv.getElementsByTagName("input").length < 5) {
    createChild(myDiv, "input");
    myDiv.appendChild(document.createElement("br"));
    myDiv.appendChild(document.createElement("br"));
  }
};

less.addEventListener("click", function () {
  if (myDiv.getElementsByTagName("input").length > 0)
    for (let i = 0; i < 3; i++) myDiv.removeChild(myDiv.lastElementChild);
});

function createChild(parentElement, childTag) {
  parentElement.appendChild(document.createElement(childTag));
}

//Almost the same solution just without service method
// const less = document.getElementById("less");
// const more = document.getElementById("more");
// let secondDiv = document.getElementById("secondary");
// let counter = 0;

// more.addEventListener("click", (ev) => {
//   console.log("Hola");
//   if (secondDiv.getElementsByTagName("input").length < 5) {
//     secondDiv.appendChild(document.createElement("input"));
//     secondDiv.appendChild(document.createElement("br"));
//     secondDiv.appendChild(document.createElement("br"));
//   }

//   less.addEventListener("click", (e) => {
//     console.log("Hola2");
//     if (secondDiv.getElementsByTagName("input").length > 0) {
//       for (let i = 0; i < 3; i++)
//         secondDiv.removeChild(secondDiv.lastElementChild);
//     }
//   });
// });
