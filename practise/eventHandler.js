

let btn = document.getElementById("btn");
let lnk = document.getElementById("lnk");
let txt = document.getElementById("txt");

btn.addEventListener("click", buttonClicked);


lnk.addEventListener("click", linkClicked);

    function init(){
        
    }
    function linkClicked(myEvent){
        myEvent.preventDefault();
        console.log(myEvent.type, myEvent.target, myEvent.currentTarget);
    }

    txt.addEventListener("input", myEvent => {
        console.log(myEvent.type, myEvent.target, myEvent.target.value);
    });


    txt.addEventListener("change", myEvent=> {
        console.log(myEvent.type, myEvent.target, myEvent.target.value);
    });

    txt.addEventListener("blur", myEvent=> {
        console.log(myEvent.type, myEvent.target.value);

    })
    function buttonClicked(myEvent){
        console.log(myEvent.type, myEvent.target, myEvent.currentTarget);
    }