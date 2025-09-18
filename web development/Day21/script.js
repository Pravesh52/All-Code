let btn = document.querySelector("button");
let inp = document.querySelector("input");
let container = document.querySelector(".container"); // a div to hold all images

btn.addEventListener("click", () => {
    let searchText = inp.value.trim();

    if (searchText === "") {
        alert("Please enter a show name!");
        return;
    }

    fetch(`https://api.tvmaze.com/search/shows?q=${searchText}`)
        .then((data) => data.json())
        .then((res) => {
            console.log(res);
            show(res);
        })
        .catch((err) => console.error("Error:", err));
});

function show(res) {
    container.innerHTML = ""; // clear old results

    for (let i of res) {
        if (i.show.image) {
            let img = document.createElement("img");
            img.src = i.show.image.medium;
            img.alt = i.show.name;
            img.style.margin = "10px";
            img.style.borderRadius = "10px";
            img.style.width = "200px";
            container.appendChild(img);
        }
    }
}
