const vaqt = document.getElementById("vaqt");
const masofa = document.getElementById("masofa");
const go = document.getElementById("go");
const box = document.getElementById("box");

go.addEventListener("click", ()=>{
    box.innerHTML = `<p>Sizning masofangiz ${masofa.value}km Vaqtingiz ${vaqt.value}minut tezligingiz esa ${masofa.value / vaqt.value} m/s</p>`;
});