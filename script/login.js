import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();
// let loginData = JSON.parse(localStorage.getItem("login")) || []
let btn=document.getElementById("submit");
btn.addEventListener('click',login);
 const baseUrl = "https://masai-api-mocker.herokuapp.com/auth/login";
async function login(){
    
    let username = document.getElementById("login-username").value;
    let password = document.getElementById("login-password").value;
    let user_data={username,password};
   
    let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
        method: "POST",
        body:JSON.stringify(user_data),
  
        headers: {
          "Content-Type": "application/json",
        },
      });
  let data=await res.json();
  if (!res.error) {
    let login = true;
    console.log(login);
 
    localStorage.setItem("login", JSON.stringify(login));
  }
  getProfile(username,data.token)
  console.log("data:",data);
};

let getProfile=async(username,token)=>{
    // console.log(username,token)
    let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,{
        headers:{
            Authorization:`Bearer ${token}`,
        },
    });
    res= await res.json();
    console.log("res:",res)
}