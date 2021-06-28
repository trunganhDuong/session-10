let list = document.getElementById("list");
function handleData(data) {
    for(let item of data){
        let row = document.createElement("tr");
        let tdName = document.createElement("td");
        tdName.innerText = item.name;

        let tdEmail = document.createElement("td");
        tdEmail.innerText = item.email;

        let tdPhone = document.createElement("td");
        tdPhone.innerText = item.phone;

        let tdSite = document.createElement("td");
        tdSite.innerText = item.website;

        row.insertAdjacentElement('beforeend',tdName);
        row.insertAdjacentElement('beforeend',tdEmail);
        row.insertAdjacentElement('beforeend',tdPhone);
        row.insertAdjacentElement('beforeend',tdSite);

        // row.appendChild(tdName);
        // row.appendChild(tdEmail);
        // row.appendChild(tdPhone);
        // row.appendChild(tdSite);
        list.appendChild(row);
    }
}

fetch("https://jsonplaceholder.typicode.com/users")
    .then(request => request.json())
    .then(handleData);