module.exports = class Xotaker {
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
