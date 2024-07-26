var container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);


for (var i = 0; i < 9; i++) {
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    container.appendChild(row);

    for (var j = 0; j < 9; j++) {
        var square = document.createElement("div");
        square.setAttribute("class", "grid");
        row.appendChild(square);
    }
}
