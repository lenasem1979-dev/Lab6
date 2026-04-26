let textarea = document.getElementById("text");

let history = [];
let index = -1;

// cookie
function setCookie(name, value) {
    document.cookie = name + "=" + encodeURIComponent(value) + "; path=/";
}

function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let c of cookies) {
        let [key, val] = c.split("=");
        if (key === name) return decodeURIComponent(val);
    }
    return null;
}

// load
function load() {
    let data = getCookie("history");
    if (data) {
        history = JSON.parse(data);
        index = history.length - 1;
        textarea.value = history[index] || "";
    }
}

// save
function save() {
    setCookie("history", JSON.stringify(history));
}

// typing
textarea.addEventListener("input", () => {
    history.push(textarea.value);
    index = history.length - 1;
    save();
});

// back
function back() {
    if (index > 0) {
        index--;
        textarea.value = history[index];
    }
}

// forward
function forward() {
    if (index < history.length - 1) {
        index++;
        textarea.value = history[index];
    }
}

load();