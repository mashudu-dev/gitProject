const form = document.querySelector("#form");
const btn = document.querySelector("button");
const inputField = document.querySelector("input")

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const inputFieldEl = inputField.value
    console.log(inputFieldEl);
    inputField.value = ''
    

})