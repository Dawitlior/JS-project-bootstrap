const USERS_API1 = "https://my-json-server.typicode.com/Jeck99/fake-server/users";

async function postUserToTableOfMobileShop(){
    try{
        const data = {
          id: document.getElementById("userId").value,
          age: document.getElementById("userAge").value,
          name: {
            last: document.getElementById("UserLastName").value,
            first: document.getElementById("userFirstName").value,
          },
          phone: document.getElementById("userPhoneNumber").value,
        };
        return await fetch(USERS_API1,{
          method: "POST",
          body: JSON.stringify(data),
          headers: { "content-type": "application/json" },
        });
    }
    catch(err){
        alert(err);
    }
    finally{
        alert("Thank you")
    }
}