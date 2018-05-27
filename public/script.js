
var side = 500 / 50;

function setup() {
    socket = io.connect('http://localhost:3000');

    createCanvas(500, 500);
    background('#acacac');

    socket.on('matrix', gcel);

}



function gcel(matrix) {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                fill('green');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill('#acacac');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill('yellow');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill('red');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill('black');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill('blue');
                rect(x * side, y * side, side, side);
            }
         
        }
    }


}



