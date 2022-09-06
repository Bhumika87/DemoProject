let shop = document.getElementById('shop');
let shopItemData = [
    {id:"adhjhc",
     Name:"JACQUARD DRESS",
     price:40000,
     desc:"Midi dress with a straight-cut neckline and thin straps.",
     img:"images/img-1.jpeg"
    },
   {
     id:"fvjhc",
     Name:"PRINTED POPLIN DRESS",
     price:6000,
     desc:"V-neck midi dress with short sleeves with elastic cuffs.",
     img:"images/img-2.jpeg"
   },
   {
     id:"cdfjhc",
     Name: "CAMISOLE DRESS",
     price:5000,
     desc:"Short dress with a cowl neckline.",
     img:"images/img-3.jpeg"
   },
   {
     id:"dcvjhc",
     Name:"DRAPED DRESS",
     price:70000,
     desc:"Short dress featuring a V-neckline with tie detail at the neck.",
     img:"images/img-4.jpeg"
   }]
   let basket=[]
let genreateShop = () => {
    return (shop.innerHTML=shopItemData.map((x)=>{
        let {id,Name,price,desc,img}=x;
        return `
        <div id=product-id-${id} class="item">
    <img width="220"src= ${img} alt="">
    <div class="detail">
        <h3>${x.Name}</h3>
        <p>${x.desc}</p>
        <div class="price">
            <h2>${x.price}</h2>
            <div class="buttons">
            <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
            <div id=${id} class="quantity">0</div>
            <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
        </div>
   </div>
   </div>`;
    }).join(" "));
};
genreateShop();

let increment=(id)=>{
  let selectedItem =id;
  let search=basket.find((x)=> x.id===selectedItem.id);
  
  basket.push({
    id:selectedItem.id,
    item:1,
  });
  console.log(basket);
};
let decrement=()=>{};
let update=()=>{};