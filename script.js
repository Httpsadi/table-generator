function generateTable() {
    const rows = document.getElementById("rows").value;
    const columns = document.getElementById("columns").value;
    const tableContainer = document.getElementById("tableContainer");

    tableContainer.innerHTML = '';

    const table = document.createElement("table");

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const td = document.createElement("td");
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }

    tableContainer.appendChild(table);
}
