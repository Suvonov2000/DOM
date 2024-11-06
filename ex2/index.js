const create_btn = document.getElementById("create");
const dollarKursi = 1200;
const dollarMiqdori = 1;

create_btn.addEventListener("click", ()=>{
    const dollarMiqdori = document.getElementById("dollar").value;
    const natija = dollarMiqdori*dollarKursi;

document.getElementById("natija").textContent=`${dollarMiqdori}dollar ${natija}so'm bo'ladi`
});