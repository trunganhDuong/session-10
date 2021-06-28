function handleData(data) {
    for (let item of data) {
        let row = document.createElement("tr");
        let userid = document.createElement("td");
        userid.innerText = item.userId;

        let title = document.createElement("td");
        title.innerText = item.title;

        let body = document.createElement("td");
        body.innerText = item.body;

        row.appendChild(userid);
        row.appendChild(title);
        row.appendChild(body);

        list.appendChild(row);
    }
}


fetch("https://jsonplaceholder.typicode.com/posts")
    .then(request => request.json())
    .then(handleData)