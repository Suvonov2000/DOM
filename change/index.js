const first_variable = document.getElementById("first_variable");
const second_variable = document.getElementById("second_variable");
const go = document.getElementById("go");
const box = document.getElementById("box");

go.addEventListener("click", ()=>{
    box.innerHTML = `<h1>First value: ${first_variable.value}</h1>   <h1>Second value: ${second_variable.value}</h1> <button onclick="changeValue()">Change value</button>`;
});

const changeValue = () =>{
    console.log("I'm working");
    box.innerHTML = `Changed:<h1>First value:${second_variable.value}</h1>  <h1>Second value:${first_variable.value}</h1>`;
};