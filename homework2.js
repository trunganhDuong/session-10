const tableBody = document.getElementById("table-body");

const appendPostToTableBody = post => {
    let { id, title, body } = post;

    let row = document.createElement("tr");

    let tdId = document.createElement("td");
    tdId.innerText = id;

    let tdTitle = document.createElement("td");
    tdTitle.innerText = title;

    let tdBody = document.createElement("td");
    tdBody.innerText = body;

    row.appendChild(tdId);
    row.appendChild(tdTitle);
    row.appendChild(tdBody);
    tableBody.appendChild(row);
}

const handleData = posts => {
    for (let post of posts) {
        appendPostToTableBody(post);
    }
}


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(handleData);