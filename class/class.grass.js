var LivingCreature = require("./livingCreature.js");
module.exports = class Grass extends LivingCreature {
    constructor(x, y, index) {
        super(x, y, index);

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
        return super.chooseCell(character);
    }
    mul() {
        this.multiply++;
        var emptyCells = this.chooseCell(0);
        var index = Math.floor(Math.random() * emptyCells.length)
        var newCell = emptyCells[index];

        if (newCell && this.multiply >= 2) {
            grassbazm++;
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 1;

            var newGrass = new Grass(newX, newY, this.index);
            grassArr.push(newGrass);
            this.multiply = 0;
        }
    }


}
