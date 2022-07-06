const BASIC_API = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const SOME_IMG = "https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?p=1";
let arrayImg = [
  "../images/array-images-tabs/samsung-galaxy-s9-grey-3448.webp",
  "../images/array-images-tabs/samsung-galaxy-s9-gold-3448.webp",
  "../images/array-images-tabs/apple-white-image-33.jpg",
];
let counter = 0;
async function getCardsAndPrint() {
  let myMainPhoneTabDiv = document.getElementById("phoneTabId");
  const MY_DIV = document.getElementById("loading");
  try {
    MY_DIV.innerHTML =
      "<img class='rounded mx-auto d-block' style='width:10vw' src='../images/waitingGif/loading2.gif' />"; 
    return await fetch(BASIC_API)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((element) => {
          myMainPhoneTabDiv.innerHTML += `<div class="card col-md-4 col-sm-12  bg-black text-white text-start  ">

   <div>
   <img class="card-img" src="${SOME_IMG}">
  </div>
  <div> id : ${element.id} </div>

   <div>brand : ${element.brand}</div>

    <div>createdAt : ${element.createdAt}</div>

   <div>color : ${element.color}</div>

   <div>ram : ${element.ram}</div>

   <div>isAvailable : ${element.isAvailable}</div>

   <div>price : ${element.price}</div>

   <div><button class="btn btn-warning" type="button"><strong>I'm intrusting </strong></button></div>
   
   </div>
   `;
        });
      });
  } 
  catch (error) {
    alert(error);
  } 
  finally {
    loading.innerHTML = "";
  }
}
 getCardsAndPrint();

