function submitData(name, email) {
    
  const bodyData = {
    name: name,
    email: email
  }

  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(bodyData)
  }
  
  return fetch('http://localhost:3000/users', configObj)
    .then(response => response.json())
    .then(object => appendUserId(object.id))
    .catch(error => {
      const message = document.createElement("div");
      message.textContent = error.message;
      document.body.append(message);
    })
}

function appendUserId(id) {
  const userP = document.createElement("p");
  userP.textContent = id;
  document.body.append(userP);
}
