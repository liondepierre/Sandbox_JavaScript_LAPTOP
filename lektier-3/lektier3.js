const input = document.getElementById("input");
const output = document.getElementById("output");

const myInput = (event) => {
    const inputTxt =event.target.value;

    if (inputTxt.length <= 7 ){
        output.innerText = inputTxt;
     } else {
        input.value = inputTxt.slice(0, -1); //-1 ryk en tilbage

        }
        console.log(inputTxt[inputTxt.length - 1]);


        
    }


input.addEventListener("input", myInput);





