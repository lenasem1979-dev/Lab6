class Student {
    constructor(surname, name, math, history, physics) {
        this.surname = surname;
        this.name = name;
        this.math = math;
        this.history = history;
        this.physics = physics;
    }

    getAvg() {
        return ((this.math + this.history + this.physics) / 3).toFixed(2);
    }
}



class ListOfStudents {
    constructor(students) {
        this.students = students;
    }

    getTableList() {
        let html = `
        <table border="1">
            <tr>
                <th>Прізвище</th>
                <th>Ім'я</th>
                <th>Математика</th>
                <th>Історія</th>
                <th>Фізика</th>
                <th>Середній бал</th>
            </tr>
        `;

        for (let s of this.students) {
            html += `
            <tr>
                <td>${s.surname}</td>
                <td>${s.name}</td>
                <td>${s.math}</td>
                <td>${s.history}</td>
                <td>${s.physics}</td>
                <td>${s.getAvg()}</td>
            </tr>
            `;
        }

        html += "</table>";
        return html;
    }
}



class StylesTable extends ListOfStudents {

    getStyles() {
        return `
        <style>
            table {
                border-collapse: collapse;
                margin-top: 20px;
                width: 70%;
            }
            th, td {
                border: 1px solid black;
                padding: 8px;
                text-align: center;
            }
            th {
                background-color: #eee;
            }
        </style>
        `;
    }

    getTotalAvg() {
        let sum = 0;
        let count = this.students.length * 3;

        for (let s of this.students) {
            sum += s.math + s.history + s.physics;
        }

        return (sum / count).toFixed(2);
    }

    getTableList() {
        let html = this.getStyles();
        html += super.getTableList();
        html += `<h3>Загальний середній бал групи: ${this.getTotalAvg()}</h3>`;
        return html;
    }
}

// ДАНІ

let students = [
    new Student("Іваненко", "Іван", 5, 4, 5),
    new Student("Петренко", "Олена", 4, 5, 4),
    new Student("Шевченко", "Петро", 3, 4, 5)
];



let table = new StylesTable(students);

document.getElementById("output").innerHTML = table.getTableList();