function loadDog() {

    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {

            let img = document.createElement("img");

            img.src = data.message;
            img.style.width = "200px";
            img.style.margin = "10px";
            img.style.borderRadius = "10px";

            document.getElementById("gallery").appendChild(img);
        })

        .catch(error => {
            console.log("Помилка:", error);
            alert("Не вдалося завантажити фото");
        });
}