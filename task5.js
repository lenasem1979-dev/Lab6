class Shape {

    static total = 100; // фарба

    constructor(size) {
        this.size = size;
    }

    draw(ctx, x, y) {

        if (Shape.total <= 0) {
            alert("Фарба закінчилась!");
            return;
        }

        // рівень фарби (1 = повна, 0 = немає)
        let level = Shape.total / 100;

        // 100% → червоний (яскравий)
        // 0% → білий
        let colorValue = Math.floor(255 * (1 - level));

        ctx.fillStyle = `rgb(255, ${colorValue}, ${colorValue})`;

        ctx.fillRect(x, y, this.size, this.size);

        // витрата фарби
        Shape.total -= 10;

        updateInfo();
    }

    static fill() {
        Shape.total = 100;
        updateInfo();
    }
}


let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let count = 0;


function updateInfo() {
    document.getElementById("paintInfo").innerText =
        "Фарба: " + Shape.total + "%";
}

function draw() {
    let shape = new Shape(30);

    let x = 10 + count * 40; // ряд
    let y = 50;

    shape.draw(ctx, x, y);

    count++;
}

// 🟡 refill
function fill() {
    Shape.total = 100;
    updateInfo();
}