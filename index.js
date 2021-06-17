// Add your code here


function submitData(name, email) {
    let formData = {
        name: name,
        email: email
    };
    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(formData)
    };
    fetch("http://localhost:3000/users", configObj)
    .then(response => response.json())
    .then(data => {
    let h3 = document.createElement("h3")
    h3.textContent = data.id
    document.body.appendChild(h3)
    console.log(data)
    })
    .catch((error) => {
        let h2 = document.createElement("h2")
        h2.innerHTML = error.message
        document.body.appendChild(h2)
    })
   
}