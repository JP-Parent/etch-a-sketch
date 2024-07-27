document.addEventListener('DOMContentLoaded', function () {
    var button = document.createElement("button");
    button.setAttribute("class", "grid-set");
    button.innerText = "Click me!"
    document.body.appendChild(button)

    var container = document.createElement("div");
    container.setAttribute("class", "container");
    document.body.appendChild(container);

    function createGrid(squares) {
        container.innerHTML = "";
        for (var i = 0; i < squares * squares; i++) {
            let square = document.createElement("div");
            square.setAttribute("class", "square");
            square.style.width = `calc(100%/${squares})`;
            square.style.height = `calc(100%/${squares})`;
            container.appendChild(square);
        }
        colorSquaresHover();
    }

    createGrid(16);

    button.addEventListener("click", function () {
        var size = prompt("How many squares per side would you like? (max 100)")
        if (size && !isNaN(size) && !(size > 100)) {
            createGrid(size)
        }
        else alert("Enter a valid value!")
    })

    function randomColor() {
        let color = [];
        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * 256))
        }
        return "rgb(" + color.join(", ") + ")";
    }

    function colorSquaresHover() {
        var squares = document.querySelectorAll(".square");
        for (let i = 0; i < squares.length; i++) {
            squares[i].addEventListener("mouseover", function () {
                squares[i].style.backgroundColor = randomColor();
            })
            squares[i].addEventListener("mouseout", function () {
                squares[i].style.backgroundColor = "white";
            })
        }
    }
});