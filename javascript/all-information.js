const USERS_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getTheUsersFunction() {
  let myContainer = document.getElementById("DivContainer");
  try {
    return await fetch(USERS_API)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((res) => {
          myContainer.innerHTML += `
          
          <div class='card col-md-4 col-sm-12 bg-white bg-opacity-50 text-black text-center d-flex'>
          <div>
          <img class='card-img' src='../images/all-information-images/user-pic.1.png'
          </div>
          <div>Id :${res._id}</div>
          <div>age : ${res.age} </div>
          <div>last name:${res.name.last}</div>
          <div>first name:${res.name.first}</div>
          <div>Email:${res.email}</div>
          <div>Phone:${res.phone}</div>   
          
          `;
        });
      });
  } catch (err) {
    alert(err);
  } finally {
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