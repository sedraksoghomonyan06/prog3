// function setup(){
//     var napo1=new napastak(0,0,'white',1200,8,4);
//     var napo2=new napastak(100,100,'black',1500,10);
//     napo1.move();
//     napo2.move();
//     var a=20;

//     napo1.eat(1);

//     napo1.eat(2);
//     napo1.eat(2);
//     napo1.eat(1);
//     napo1.eat(0);
//     napo1.eat(3);
//     console.log(napo1,napo2)
// }
var side = 500 / 50;
var matrix = [];
var n = 50;
var m = 50;
var grassArr = [];
var xotakerArr = [];
var gishatichArr = [];
var bombArr = [];
var patArr = [];
var kendanin = 50;
var gishatichQanak = 10;
var bombQanak = 1;
var patCordinat = [];
function setup() {
    frameRate(30);
    createCanvas(500, 500);
    background('#acacac');

    for (var y = 0; y < m; y++) {
        matrix[y] = [];
        for (var x = 0; x < n; x++) {
            matrix[y][x] = Math.round(random(1));
            if (matrix[y] == matrix[x + 1]) {
                patCordinat.push(5);
                
            }
            if (matrix[y] == matrix[x]) {
                patCordinat.push(5);
            }
            if (matrix[y] == matrix[x-1]) {
                patCordinat.push(5);
            }
        }
    }
console.log(patCordinat)



    while (kendanin > 0) {
        var x = Math.round(random(n - 1));
        var y = Math.round(random(m - 1));
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
            kendanin--;
        }
    }
    while (gishatichQanak > 0) {
        var x = Math.round(random(n - 1));
        var y = Math.round(random(m - 1));
        if (matrix[y][x] == 0 || matrix[y][x] == 1) {
            matrix[y][x] = 3;
            gishatichQanak--;
        }
    }
    while (bombQanak > 0) {
        var x = Math.round(random(n - 1));
        var y = Math.round(random(m - 1));
        if (matrix[y][x] == 0 || matrix[y][x] == 1) {
            matrix[y][x] = 4;
            bombQanak--;
        }
    }












    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[0].length; x++) {
            if (matrix[y][x] == 1) {
                var xot = new Grass(x, y, 1);
                grassArr.push(xot);
            }
            else if (matrix[y][x] == 2) {
                var kendani = new Xotaker(x, y, 2);
                xotakerArr.push(kendani);
            }
            else if (matrix[y][x] == 3) {
                var gishatich = new Gishatich(x, y, 3);
                gishatichArr.push(gishatich);
            }
            else if (matrix[y][x] == 4) {
                var bomb = new Bomb(x, y, 4);
                bombArr.push(bomb);
            }
            else if (matrix[y][x] == 5) {
                console.log("bhbhbhbh");
                var pat = new Pat(x, y, 5);
                patArr.push(pat);
            }
        }
    }

}
var patCordinat = [];
var count = 0;
function draw() {

    count++;
    if (count >= 15) {
        var x = Math.round(random(n - 1));
        var y = Math.round(random(m - 1));

        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == 1) {
                for (var i in grassArr) {
                    if (x == grassArr[i].x && y == grassArr[i].y) {
                        matrix[y][x] = 4;
                        grassArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[y][x] == 2) {
                for (var i in xotakerArr) {
                    if (x == xotakerArr[i].x && y == xotakerArr[i].y) {
                        matrix[y][x] = 4;
                        xotakerArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[y][x] == 3) {
                for (var i in gishatichArr) {
                    if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                        matrix[y][x] = 4;
                        gishatichArr.splice(i, 1);
                        break;
                    }
                }
            }
            else if (matrix[y][x] == 0) {

                matrix[y][x] = 4;


            }

            var bomb = new Bomb(x, y, 4);
            bombArr.push(bomb);
            count = 0;

        }




    }

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
                fill('gray');
                rect(x * side, y * side, side, side);
            }

        }
    }

    for (var i in grassArr) {
        grassArr[i].mul();

    }
    for (var i in xotakerArr) {
        xotakerArr[i].eat();

    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();

    }
    for (var i in bombArr) {
        bombArr[i].ddxk();

    }
    for (var i in patArr) {
        patArr[i].pat();

    }
}