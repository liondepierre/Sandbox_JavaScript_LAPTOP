const myName = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
    let messages = [];

        if(password.length.value <=6){
            messages.push("Password must be longer than 6 chars")
        }


        e.preventDefault();
    
})