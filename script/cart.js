import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();


  
// let Firstlogin = () => {
//   let logArr = JSON.parse(localStorage.getItem("login"));
//   if (logArr == null){

//         alert("Please Log in First");
//       window.location.href = "login.html";
//   } 
//   else{
//           let name = document.getElementById("userName");
//           logArr.map((ele) => {
//           name.innerText = ele.name;
//     });
//   }
// };

// Firstlogin();

let datafromls = JSON.parse(localStorage.getItem("food"));

let render = ()=>{
    let cont = document.getElementById('container');
    cont.innerHTML = null;
        datafromls.forEach((el,index)=>{
            let div = document.createElement('div');
            let name = document.createElement('h3');
            name.innerText = el.name;
            let img = document.createElement('img');
            img.src = el.img;

            let btn = document.createElement('button');
            btn.innerText = 'Remove';
            btn.setAttribute('class','remove')
            btn.addEventListener("click", function(){
              remove(index);
          })
            div.append(name,img,btn);
            cont.append(div)
          });
        }
        render()


        function remove(index){
            datafromls.splice(index,1);
            localStorage.setItem("food", JSON.stringify(datafromls));
            render()
        }