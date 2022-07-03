const BASIC_API ="https://my-json-server.typicode.com/Jeck99/fake-server/devices";



function cardTemplate(devices){
  return `<div class="dawitCard">
  <div>brand : ${devices.brand}</div>
  <div>color : ${devices.color}</div>
  <div>price : ${devices.price}</div>
  </div>`
}

async function someGetFunction(htmlFromTemplate = ""){
let devices = await fetch(BASIC_API).then(res=>res.json())
devices.forEach(devices =>{
  htmlFromTemplate+=cardTemplate(devices)
});
document.getElementById("myDivTabPhone").innerHTML = htmlFromTemplate;
}
someGetFunction()





// async function postTheMobileFunction() {
//   try {
//     // const data = {
//       // phone: {
//       // brand: 
//       // color: 
//       // createdAt: 
//       // id: 
//       // isAvailable: 
//       // picture: 
//       // price: 
//       // ram:
//     // },
//   // };
//   return await fetch(BASIC_API, {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "content-type": "application/json" },
//   });
// } 
// catch (error) {
//   alert("sorry about the error");} 
//   finally {}
// }



// let myDiv = document.getElementById("theMainDiv");
// let counter = 0;
// function printTheItemsOnScreen(){
// someGetFunction().then((result)=>{
//   result.forEach(item => {
//     myDiv.innerHTML += 
//   });
// })
// }
// printTheItemsOnScreen();
