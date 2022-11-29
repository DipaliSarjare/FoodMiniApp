import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();

const base_url =  "https://masai-api-mocker.herokuapp.com";

// const end_point = "/auth/register"
// query_params = ?limit=100&page=..
let btn = document.getElementById('btan');
btn.addEventListener('click',register)
   async function register(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let username = document.getElementById('username').value;
    let mobile = document.getElementById('mobile').value;
    let description = document.getElementById('desc').value;

    let form_data = {name , email , password ,username, mobile , description}
    console.log(form_data)
   let res = await fetch(`${base_url}/auth/register`,{
   method: "POST",
   body: JSON.stringify(form_data),
   headers: {
    "Content-Type" : "application/json",
   },
   })
   res = await res.json()
   console.log(res);
}


