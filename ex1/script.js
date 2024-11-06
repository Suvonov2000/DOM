const create_btn = document.getElementById("create");
const box = document.getElementById("box");

create_btn.addEventListener("click",()=>{
    const appearance = document.getElementById("appearance").value;
    const color = document.getElementById("color").value;
    const width = document.getElementById("width").value;
    const height = document.getElementById("height").value;

    box.style.backgroundColor = color;
    box.style.width=`${width}px`;
    box.style.height=`${height}px`;
   

    if (appearance === "round"){
        box.style.borderRadius="50%";
    }

    if(appearance === "square"){
        box.style.borderRadius = "0";
    }
});

