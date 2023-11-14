console.log("Hello World");

let name = "Maui";
let age = 18;
let isSingle = true;
let hobbies = ["Dotes", "Reading"]; 

let myobject = {
myName: name,
age,
isSingle,
hobbies,
};

//console.log(myobject);

function register () {
 console.log("button register is clicked")
}

let btnModalRegister = document.querySelector('#btnModalRegister');

btnModalRegister.onclick = () => {
    register();
}