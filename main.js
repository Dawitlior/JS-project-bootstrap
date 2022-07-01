const BASIC_API ="https://my-json-server.typicode.com/Jeck99/fake-server/devices";

async function someGetFunction(){
  try {
    return await fetch("https://my-json-server.typicode.com/Jeck99/fake-server/devices")
    .then((response) => response.json());
  } catch (error1) {
    alert(error1);
  } finally {
  }

}
someGetFunction()







async function postTheMobileFunction() {
  try {
    // const data = {
      // phone: {
      // brand: 
      // color: 
      // createdAt: 
      // id: 
      // isAvailable: 
      // picture: 
      // price: 
      // ram:
    // },
  // };
  return await fetch(BASIC_API, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });
} 
catch (error) {
  alert("sorry about the error");} 
  finally {}
}



let myDiv = document.getElementById("theMainDiv");
let counter = 0;
function printTheItemsOnScreen(){
someGetFunction().then((result)=>{
  result.forEach(item => {
    myDiv.innerHTML += 
  });
})
}
printTheItemsOnScreen();
