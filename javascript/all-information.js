const USERS_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getTheUsersFunction() {
  let myContainer = document.getElementById("myTableId");
  try {
    return await fetch(USERS_API)
      .then((res) => res.json())
      .then((res) => {
        res.forEach((res) => {
          myContainer.innerHTML += `
          <tbody class=''>
          <td>${res._id}</td>
          <td>${res.age}</td>
          <td>${res.name.last}</td>
          <td>${res.name.first}</td>
          <td>${res.email}</td>
          <td>${res.phone}</td>
          `;
        });
      });
  } catch (err) {
    alert(err);
  } finally {
  }
}
getTheUsersFunction();
