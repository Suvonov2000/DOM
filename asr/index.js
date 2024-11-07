const create_btn = document.getElementById("create");

create_btn.addEventListener("click", ()=>{
    const year= document.getElementById("century").value;
    const century = Math.ceil(year / 100);

    document.getElementById("result").textContent=` ${century} th century`;
});