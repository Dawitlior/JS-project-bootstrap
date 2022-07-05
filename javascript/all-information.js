const USERS_API = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function getTheUsersFunction() {
  let myContainer = document.getElementById("myTableDivContainer");
  try {
    return await fetch(USERS_API)
      .then((res) => res.json)
      .then((res) => {
        res.forEach((res) => {
          myContainer.innerHTML += 
          ` <table class="table table-dark table-hover">
            <tbody> ${res.age}
          </table>`;
        });
      });
  } catch (err) {
    alert(err);
  } finally {
  }
}
getTheUsersFunction();
