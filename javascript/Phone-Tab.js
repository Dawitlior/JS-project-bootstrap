const BASIC_API = "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const SOME_IMG = "https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?p=1";
let arrayImg = [
  "../images/array-images-tabs/sumsong2.webp",
  "../images/array-images-tabs/sumsong4.webp",
  "../images/array-images-tabs/apple1.webp",
  "../images/array-images-tabs/mi1.webp",
  "../images/array-images-tabs/sony1.webp",
  "../images/array-images-tabs/google.1.webp",
  "../images/array-images-tabs/apple2.webp",
  "../images/array-images-tabs/apple3.webp",
  "../images/array-images-tabs/sony2.webp",
  "../images/array-images-tabs/apple4.webp",
  "../images/array-images-tabs/apple5.webp",
  "../images/array-images-tabs/google.2.webp",
  "../images/array-images-tabs/sony3.webp",
  "../images/array-images-tabs/mi2.webp",
  "../images/array-images-tabs/apple6.webp"
];
let counter = 0;
async function getCardsAndPrint() {
  let myMainPhoneTabDiv = document.getElementById("phoneTabId");
  const MY_DIV = document.getElementById("loading");
  try {
    MY_DIV.innerHTML = "<img src='../images/waitingGif/loading2.gif' class='rounded mx-auto d-block' style='width:10vw' />"; 
    return await fetch(BASIC_API)
      .then(res => res.json())
      .then((response) => {
        response.forEach((element) => {
          myMainPhoneTabDiv.innerHTML += `<div class="card col-md-4 col-sm-12 bg-black text-white text-start ">
   <div>
   <img class="card-img" src="${arrayImg[counter++]}">
  </div>
  <div> id : ${element.id} </div>

   <div>brand : ${element.brand}</div>

    <div>createdAt : ${element.createdAt}</div>

   <div>color : ${element.color}</div>

   <div>ram : ${element.ram}</div>

   <div>isAvailable : ${element.isAvailable}</div>

   <div>price : ${element.price}</div>

   <div><button class="btn btn-danger" type="button"><strong>Delete</strong></button></div>
   
   </div>
   `;
        });
      });
  } 
  catch (error) {
    alert(error);
  } 
  finally {
    loading.innerHTML = " ";
  }
}
 getCardsAndPrint();

