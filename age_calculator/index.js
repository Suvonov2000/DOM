const create_btn = document.getElementById("create");
const year = 2024;
const birthYear = 0;

create_btn.addEventListener("click", ()=>{
    const birthYear = document.getElementById("age").value;
    const result = year - birthYear;

    document.getElementById("result").textContent=`You are ${result} years old`;
});