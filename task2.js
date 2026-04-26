let nameInput = document.getElementById("name");
let message = document.getElementById("message");
let agree = document.getElementById("agree");
let city = document.getElementById("city");

// ===== SAVE =====
function saveData() {
    localStorage.setItem("name", nameInput.value);
    localStorage.setItem("message", message.value);
    localStorage.setItem("agree", agree.checked);
    localStorage.setItem("city", city.value);

    let gender = document.querySelector('input[name="gender"]:checked');
    if (gender) {
        localStorage.setItem("gender", gender.value);
    }
}

// ===== LOAD =====
function loadData() {
    nameInput.value = localStorage.getItem("name") || "";
    message.value = localStorage.getItem("message") || "";
    agree.checked = (localStorage.getItem("agree") === "true");
    city.value = localStorage.getItem("city") || "kyiv";

    let gender = localStorage.getItem("gender");
    if (gender) {
        document.querySelector(`input[name="gender"][value="${gender}"]`).checked = true;
    }
}

// ===== EVENTS =====
nameInput.addEventListener("input", saveData);
message.addEventListener("input", saveData);
agree.addEventListener("change", saveData);
city.addEventListener("change", saveData);

document.querySelectorAll('input[name="gender"]').forEach(radio => {
    radio.addEventListener("change", saveData);
});

// start
loadData();