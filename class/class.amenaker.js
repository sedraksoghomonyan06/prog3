var LivingCreature = require("./livingCreature.js");
module.exports = class Amenaker extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);
        this.kyank = 20;



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
        return super.chooseCell(character);
    }
    mul() {

        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length)
        var newCell = emptyCells[index];
        if (newCell) {
            amenakerbazm++;
            var newX = newCell[0];
            var newY = newCell[1];


            var newgishatich = new Amenaker(newX, newY, this.index);
            gishatichArr.push(newgishatich);
            matrix[newY][newX] = 5;

        }
    }


    eat() {
        var utel = this.chooseCell();
        var index = Math.round(Math.random() * utel.length);
        var cell = utel[index];


        if (cell) {
            amenakerutel++;
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
              for (var i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }
            for (var i in gishatichArr) {
                if (gishatichArr[i].x == x && gishatichArr[i].y == y) {
                    gishatichArr.splice(i, 1);
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
        var index = Math.round(Math.random() * sharjvel.length);
        var cell = sharjvel[index];
        if (cell) {
            amenakersharjvel++;
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
        for (var i in amenakerArr) {
            if (this.x == amenakerArr[i].x && this.y == amenakerArr[i].y) {
                amenakerArr.splice(i, 1);
                break;
            }
        }
    }
}