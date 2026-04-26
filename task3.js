function showImages() {
    let input = document.getElementById("input").value;
    let gallery = document.getElementById("gallery");
    let error = document.getElementById("error");

    gallery.innerHTML = "";
    error.textContent = "";

    let images;

    //  JSON CHECK
    try {
        images = JSON.parse(input);
    } catch (e) {
        error.textContent = "❌ Неправильний JSON формат!";
        return;
    }

    // перевірка чи це масив
    if (!Array.isArray(images)) {
        error.textContent = "❌ Потрібен масив!";
        return;
    }

    //  створення картинок
    images.forEach(src => {
        let img = document.createElement("img");

        img.src = src.trim();
        img.style.width = "100px";
        img.style.margin = "5px";
        img.style.cursor = "pointer";

        // клік → велике зображення
        img.onclick = function () {
            window.open(src.trim(), "_blank");
        };

        gallery.appendChild(img);
    });
}