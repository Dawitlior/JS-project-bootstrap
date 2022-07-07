const USERS_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getTheUsersFunction() {
  let myContainer = document.getElementById("myTableId");
  let myInfoDiv = document.getElementById("allInfoLoadingDiv");
  try {
    // myInfoDiv.innerHTML = "<img src='../images/waitingGif/loading1.gif' class='rounded mx-auto d-block' style='width:10vw' />";
    return await fetch(USERS_API)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((res) => {
          myContainer.innerHTML += `
          
           <tbody class='table-responsive'>
          <td>${res._id}</td>
          <td>${res.age}</td>
          <td>${res.name.last}</td>
          <td>${res.name.first}</td>
          <td>${res.phone}</td>
          <td>${res.email}</td>
          <td>${res.index}</td>
          </tbody>
          
          `;
        });
      });
  } catch (err) {
    alert(err);
  } finally {
    myInfoDiv.innerHTML = "";
  }
}
getTheUsersFunction();



// `<div class="card col-md-4 col-sm-12  bg-black text-white text-start ">
//    <div>
//    <img class="card-img" src="${SOME_IMG}">
//   </div>
//   <div> id : ${element.id} </div>

//    <div>brand : ${element.brand}</div>

//     <div>createdAt : ${element.createdAt}</div>

//    <div>color : ${element.color}</div>

//    <div>ram : ${element.ram}</div>

//    <div>isAvailable : ${element.isAvailable}</div>

//    <div>price : ${element.price}</div>

//    <div><button class="btn btn-danger" type="button"><strong>Delete</strong></button></div>
   
//    </div>

//  <td>${res._id}</td>
//           <td>${res.age}</td>
//           <td>${res.name.last}</td>
//           <td>${res.name.first}</td>
//           <td>${res.email}</td>
//           <td>${res.phone}</td>
//           </tbody>


