import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML = navbar();



let dataarr = [
    {
      name : 'pasta',
      img : 'https://static.toiimg.com/photo/84784534.cms'
    },
    {
      name : 'sandwich' ,
      img  : 'https://insanelygoodrecipes.com/wp-content/uploads/2021/03/Homemade-Grilled-Cheese-Sandwich-with-Tomatoes-500x500.png' ,
    },
    {
        name : 'pizza' ,
        img  : 'https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900' ,
      },
      {
        name : 'burger' ,
        img  : 'https://media-cldnry.s-nbcnews.com/image/upload/newscms/2019_21/2870431/190524-classic-american-cheeseburger-ew-207p.jpg' ,
      },
      {
        name : 'maggie' ,
        img  : 'https://wirally.com/wp-content/uploads/2020/06/1-Tasty-Bandi-Style-Maggie-Ideas.jpg' ,
      },
      {
        name : 'french_fries' ,
        img  : 'https://thecozycook.com/wp-content/uploads/2018/10/Homemade-French-Fry-Recipe-.jpg' ,
      },
      {
        name : 'manchurian' ,
        img  : 'https://holycowvegan.net/wp-content/uploads/2020/03/veg-manchurian-7.jpg' ,
      },
      {
        name : 'momos' ,
        img  : 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg' ,
      },
      {
        name : 'paneer_tikka' ,
        img  : 'https://www.indianveggiedelight.com/wp-content/uploads/2021/08/air-fryer-paneer-tikka-featured.jpg' ,
      },
      {
        name : 'vada_pav' ,
        img  : 'https://www.cookwithmanali.com/wp-content/uploads/2018/04/Vada-Pav-500x500.jpg' ,
      },


     
]
let render = ()=>{
    let cont = document.getElementById('container');
    cont.innerHTML = null;
        dataarr.forEach((el,index)=>{
            let div = document.createElement('div');
            let name = document.createElement('h3');
            name.innerText = el.name;
            let img = document.createElement('img');
            img.src = el.img;

            let btn = document.createElement('button');
            btn.innerText = 'Add To Cart';
            btn.setAttribute("id","add")
            btn.addEventListener("click", function(){
              AddToCart(index);
          })
            div.append(name,img,btn);
            cont.append(div)
          });
        }
        render();

        function AddToCart(id){
          let food = JSON.parse(localStorage.getItem('food'))|| [];
          food.push(dataarr[id]);
          localStorage.setItem('food', JSON.stringify(food));

      }