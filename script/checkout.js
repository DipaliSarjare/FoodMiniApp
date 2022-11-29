import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

let btn = document.getElementById("check");
btn.addEventListener("click",checkout);

let chdata = JSON.parse(localStorage.getItem("login"));

function checkout() {
if(chdata!==0){
    alert('Checkout successful');
    chdata = false;
    // console.log(chdata);
    localStorage.setItem("login", JSON.stringify(chdata));
}else{
    window.location.href = "./login.html";
}
}