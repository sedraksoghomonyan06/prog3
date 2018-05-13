module.exports = class Bomb {
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
