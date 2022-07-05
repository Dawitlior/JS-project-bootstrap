const BASIC_API =
  "https://my-json-server.typicode.com/Jeck99/fake-server/devices";
const SOME_IMG =
  "https://www.digitaltrends.com/wp-content/uploads/2021/09/iphone-13-pro-review-dan-baker-35.jpg?p=1";

async function getCardsAndPrint() {
  let myMainPhoneTabDiv = document.getElementById("phoneTabId");
  const MY_LOADING_GIPY = document.getElementById("loading");
  try {
    MY_LOADING_GIPY.style.display = true;
    return await fetch(BASIC_API)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((element) => {
          myMainPhoneTabDiv.innerHTML += `<div class="card col-md-4 col-sm-12 bg-black text-white text-start  ">
   <div>
   <img class="card-img col-md-4" src="${SOME_IMG}">
  </div>
   <div>brand : ${element.brand}</div>
    <div>createdAt : ${element.createdAt}</div>
   <div>color : ${element.color}</div>
   <div>ram : ${element.ram}</div>
   <div>isAvailable : ${element.isAvailable}</div>
   <div>price : ${element.price}</div>
   <div"><button   class="btn btn-warning type="button"><strong>I'm intrusting </strong></button></div>
   <br><br><br>
   </div>
   `;
        });
      });
  } catch (error) {
    alert(error);
  } finally {
    MY_LOADING_GIPY.style.display = false;
  }
}
 getCardsAndPrint();

 async function getTheUsersFunction(){
  return await fetch(BASIC_API)
  .then(res=>console.log(res.json()))
}
getTheUsersFunction();