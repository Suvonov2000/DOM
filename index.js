const box = document.getElementById("box");

box.addEventListener("click", () => {
    if(box.style.transform.includes("1000px"))
        box.style.transform = "translateX(0px)";
    else box.style.transform = "translateX(1000px)";
});

console.log(box);