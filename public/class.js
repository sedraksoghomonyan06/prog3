// class napastak{
//     constructor(x,y,index,col,w,age,max){
//         this.x = x;
//         this.y = y;
//         this.index=index;
//         this.color = col;
//         this.weight = w;
//         this.age = age;
//         this.kercQanak = 0;
//         this.max = max
//     }
//     move(){
//         this.x++;
//         this.y++;
//        // this.kercQanak++;
//     }
//     eat(b){
//         this.kercQanak+=b;
//         if(this.kercQanak>=this.max){
//             console.log("kusht em kerel em "+b);
//             this.kercQanak=0;
//         }
//         else if(this.kercQanak<this.max){
//             console.log("sovac em kerel em "+b);
//         }
//     }
// }
class Grass {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell && this.multiply >= 2) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }


}
















class Xotaker {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.kyank = 5;
        this.multiply = 0;


    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];


            var newKendani = new Xotaker(newX, newY, this.index);
            xotakerArr.push(newKendani);
            matrix[newY][newX] = 2;


        }
    }
    eat() {
        var utel = this.chooseCell(1);
        var cell = random(utel);

        if (cell) {
            var x = cell[0];
            var y = cell[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 2;
            this.x = x;
            this.y = y;
            this.kyank++;
            for (var i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {

                    grassArr.splice(i, 1);
                    break;
                }
            }
            if (this.kyank >= 10) {
                this.mul();
                this.kyank = 5;
            }
        }
        else {
            this.move();
            this.kyank--;
            if (this.kyank <= 0) {
                this.dit();
            }
        }


    }

    move() {
        var sharjvel = this.chooseCell(0);
        var cell = random(sharjvel);
        if (cell) {
            var x = cell[0];
            var y = cell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[y][x] = this.index;
        }


    }
    dit() {

        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (this.x == xotakerArr[i].x && this.y == xotakerArr[i].y) {
                xotakerArr.splice(i, 1);
                break;
            }
        }

    }

}


class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.kyank = 20;
        this.multiply = 0;


    }
    getNewCordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],


        ];
    }
    chooseCell(character) {
        this.getNewCordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var newCell = random(emptyCells);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];


            var newgishatich = new Gishatich(newX, newY, this.index);
            gishatichArr.push(newgishatich);
            matrix[newY][newX] = 3;

        }
    }


    eat() {
        var utel = this.chooseCell(2);
        var cell = random(utel);

        if (cell) {
            var x = cell[0];
            var y = cell[1];
            matrix[this.y][this.x] = 0;
            matrix[y][x] = 3;
            this.x = x;
            this.y = y;
            this.kyank++;
            for (var i in xotakerArr) {
                if (xotakerArr[i].x == x && xotakerArr[i].y == y) {
                    xotakerArr.splice(i, 1);
                    break;
                }
            }
            if (this.kyank >= 23) {
                this.mul();
                this.kyank = 18;
            }
        }
        else {
            this.move();
            this.kyank--;
            if (this.kyank <= 0) {
                this.dit();
            }
        }
    }
    move() {
        var sharjvel = this.chooseCell(1);
        var cell = random(sharjvel);
        if (cell) {
            var x = cell[0];
            var y = cell[1];
            matrix[this.y][this.x] = 0;
            this.x = x;
            this.y = y;
            matrix[y][x] = this.index;
            for (var i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
        }
    }
    dit() {
        matrix[this.y][this.x] = 0;
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
                break;
            }
        }
    }
}
class Bomb {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
    }
    getNewCordinates() {
        this.directions = [
            [this.x, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x, this.y + 1],

        ];
        this.directions1 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 1],
        ];
        this.directions2 = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x + 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y - 1],
            [this.x + 2, this.y],
            [this.x + 2, this.y + 1],
            [this.x + 2, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x - 2, this.y + 2],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y - 3],
            [this.x - 3, this.y - 1],
            [this.x - 3, this.y],
            [this.x + 1, this.y - 3],
            [this.x + 3, this.y - 1],
            [this.x + 3, this.y],
            [this.x + 1, this.y + 3],
            [this.x + 3, this.y + 1],
            [this.x, this.y + 3],
            [this.x - 1, this.y + 3],
            [this.x - 3, this.y + 1],
            [this.x, this.y - 3],
        ];
    }
    ddxk() {
        this.multiply++;
        if (this.multiply >= 10) {
            this.getNewCordinates();
            for (var i in this.directions) {
                var x = this.directions[i][0];
                var y = this.directions[i][1];
                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                    if (matrix[y][x] == 1) {
                        for (var i in grassArr) {
                            if (x == grassArr[i].x && y == grassArr[i].y) {
                                matrix[y][x] = 0;
                                grassArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[y][x] == 2) {
                        for (var i in xotakerArr) {
                            if (x == xotakerArr[i].x && y == xotakerArr[i].y) {
                                matrix[y][x] = 0;
                                xotakerArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[y][x] == 3) {
                        for (var i in gishatichArr) {
                            if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                                matrix[y][x] = 0;
                                gishatichArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (this.multiply >= 11) {
            this.getNewCordinates();
            for (var i in this.directions1) {
                var x = this.directions1[i][0];
                var y = this.directions1[i][1];

                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                    if (matrix[y][x] == 1) {
                        for (var i in grassArr) {
                            if (x == grassArr[i].x && y == grassArr[i].y) {
                                matrix[y][x] = 0;
                                grassArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[y][x] == 2) {
                        for (var i in xotakerArr) {
                            if (x == xotakerArr[i].x && y == xotakerArr[i].y) {
                                matrix[y][x] = 0;
                                xotakerArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[y][x] == 3) {
                        for (var i in gishatichArr) {
                            if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                                matrix[y][x] = 0;
                                gishatichArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
            }
        }
        if (this.multiply >= 12) {
            this.getNewCordinates();

            for (var i in this.directions2) {
                this.multiply = 0;


                var x = this.directions2[i][0];
                var y = this.directions2[i][1];

                if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                    if (matrix[y][x] == 1) {
                        for (var i in grassArr) {
                            if (x == grassArr[i].x && y == grassArr[i].y) {
                                matrix[y][x] = 0;
                                grassArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[y][x] == 2) {
                        for (var i in xotakerArr) {
                            if (x == xotakerArr[i].x && y == xotakerArr[i].y) {
                                matrix[y][x] = 0;
                                xotakerArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                    else if (matrix[y][x] == 3) {
                        for (var i in gishatichArr) {
                            if (x == gishatichArr[i].x && y == gishatichArr[i].y) {
                                matrix[y][x] = 0;
                                gishatichArr.splice(i, 1);
                                break;
                            }
                        }
                    }
                }
                this.dit();
            }
        }
    }
    dit() {
        matrix[this.y][this.x] = 0;
        bombArr.splice(0, 1);
    }
}
















class Pat {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.multiply = 0;
    }
    getNewCordinates() {
        this.directions = [];
    }
    chooseCell(character) {
        this.getNewCordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    pat() {
        this.multiply++;
        if (this.multiply == 0) {
            this.haytnvel();
        }
        else if (this.multiply >= 10) {
        }
        this.multiply = 0;
    }
    haytnvel() {
        for (var y = 0; y < matrix.length; y++) {
            for (var x = 0; x < matrix[y].length; x++) {
                if (y == x || y == x - 1 || y == x + 1 && matrix[y][x] != 4) {
                    matrix[y][x] = 5;

                }
            }
        }
    }
}