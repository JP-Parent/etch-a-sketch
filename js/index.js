document.addEventListener('DOMContentLoaded', function() {
    var container = document.createElement("div");
    container.setAttribute("class", "container");
    document.body.appendChild(container);

    for (var i = 0; i < 100 * 100; i++) {
        var square = document.createElement("div");
        square.setAttribute("class", "square");
        square.style.width = "calc(100%/100)";
        square.style.height = "calc(100%/100)";
        container.appendChild(square);
    }
});