


























// async function someGetFunction(htmlFromTemplate = "") {
//   let devices = await fetch(BASIC_API).then((res) => res.json());
//   devices.forEach((devices) => {
//     htmlFromTemplate += cardTemplate(devices);
//   });
//   document.getElementById("myDivTabPhone").innerHTML = htmlFromTemplate;
// }
// someGetFunction();


// function cardTemplate(devices) {
//   return (phoneTabId.innerHTML += `<div class="card col-md-4 col-sm-12 ">
//   <div>
//   <img class="card-img col-md-4" src="${SOME_IMG}">
//   </div>
//   <div>brand : ${devices.brand}</div>
//   <div>brand : ${devices.createdAt}</div>
//   <div>color : ${devices.color}</div>
//   <div>brand : ${devices.ram}</div>
//   <div>brand : ${devices.isAvailable}</div>
//   <div>price : ${devices.price}</div>
//   <br><br><br>
//   </div>
//   `);
// }
// cardTemplate();




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


// async function getTheUsersFunction(){
//   return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/")
//   .then(res=>console.log(res.json()))
// }