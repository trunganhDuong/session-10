let btnSubmit = document.getElementById("submit");
let txtTitle = document.getElementById("title");
let txtBody = document.getElementById("body");
let slUser = document.getElementById("user");

const handleData = data => {
    console.log("Hello World");
    console.log(data);
}

const onSubmit = (e) => {
    e.preventDefault();

    let title = txtTitle.value;
    let body = txtBody.value;
    let userid = slUser.value;

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify({
            title: title,
            body: body,
            userId: userid
        })
    })
        .then(response => response.json())
        .then(handleData);
}
btnSubmit.addEventListener('click', onSubmit);