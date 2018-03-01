function setup() {

    createCanvas(450, 400);
    background(190, 231, 232);
    noStroke();

    var gridSize = 40;
    var gridCol = color(247, 189, 42);
    var gridCol2 = color(196, 2, 255);

    for (var x = gridSize; x <= width - gridSize; x += gridSize) {
        for (var y = gridSize; y <= height - gridSize; y += gridSize) {
            noStroke();
            fill(gridCol);
            rect(x, y, 25, 25);

        }
    }

    for (var x = gridSize; x <= width - gridSize; x += gridSize) {
        for (var y = gridSize; y <= height - gridSize; y += gridSize) {
            noStroke();
            fill(gridCol2);
            ellipse(x + 12, y + 12, 10, 10);

        }
    }

    for (var x = gridSize; x <= width - gridSize; x += gridSize) {
        for (var y = gridSize; y <= height - gridSize; y += gridSize) {
            noStroke();
            fill(gridCol2);
            ellipse(x + 4, y + 5, 3, 3);

        }
    }

    for (var x = gridSize; x <= width - gridSize; x += gridSize) {
        for (var y = gridSize; y <= height - gridSize; y += gridSize) {
            noStroke();
            fill(gridCol2);
            ellipse(x + 20, y + 20, 3, 3);

        }
    }
}
