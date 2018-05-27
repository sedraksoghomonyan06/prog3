var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);


var fs = require("fs");


app.set('port', process.env.PORT || 3000);
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.redirect("public/index.html");
});

server.listen(app.get('port'));






var Bomb = require('./class/class.bomb');
var Xotaker = require('./class/class.xoteker');
var Grass = require('./class/class.grass');
var Gishatich = require('./class/grass.gishtich');
var Amenaker = require('./class/class.amenaker');





matrix = [];
var n = 50;
var m = 50;
grassArr = [];
xotakerArr = [];
gishatichArr = [];
amenakerArr = [];
bombArr = [];
var kendanin = 50;
var gishatichQanak = 10;
var bombQanak = 1;
patCordinat = [];
var countBomb = 0;
var count = 0;
weather = 'garun';
var amenaker = 10;

grassbazm = 0;
grasseaterbazm = 0;
grasseaterutel = 0;
grasseatersharjvel = 0;
gishatichbazm = 0;
gishatichutel = 0;
gishatichsharjvel = 0;
amenakerbazm = 0;
amenakerutel = 0;
amenakersharjvel = 0;



for (var y = 0; y < m; y++) {
    matrix[y] = [];
    for (var x = 0; x < n; x++) {
        matrix[y][x] = Math.floor(Math.random() * 2);
        if (matrix[y] == matrix[x + 1]) {
            patCordinat.push(5);

        }
        if (matrix[y] == matrix[x]) {
            patCordinat.push(5);
        }
        if (matrix[y] == matrix[x - 1]) {
            patCordinat.push(5);
        }
    }
}


while (amenaker > 0) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[x][y] == 0) {
        matrix[x][y] = 5;
        amenaker--;
    }
}

while (kendanin > 0) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[x][y] == 0) {
        matrix[x][y] = 2;
        kendanin--;
    }
}
while (gishatichQanak > 0) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
    if (matrix[y][x] == 0 || matrix[y][x] == 1) {
        matrix[y][x] = 3;
        gishatichQanak--;
    }
}
while (bombQanak > 0) {
    var x = Math.floor(Math.random() * n);
    var y = Math.floor(Math.random() * m);
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
            var amenaker= new Amenaker(x, y, 5);
            amenakerArr.push(amenaker);
        }
        else if (matrix[y][x] == 6) {
            var mart = new Mart(x, y, 6);
            mardArr.push(mart);
        }
    }
}
var takter = 0;
    obj = {
        'xotbazmanal': [],
        'xotakerbazmanal': [],
        'xotakersharjvel': [],
        'xotakerkerav': [],
        'gishatichbazmanal': [],
        'gishatichsharjvel': [],
        'gishatichkerav': [],
        'amenakerbazmanal': [],
        'amenakersharjvel': [],
        'amenakerkerav': [],
    }

function func() {
    count++;

    if (count % 40 == 0) {
        weather = 'garun';
    }
    else if (count % 40 == 10) {
        weather = 'amar';
    }
    else if (count % 40 == 20) {
        weather = 'ashun';
    }
    else if (count % 40 == 30) {
        weather = 'dzmer';
    }

    console.log(weather);
    if (weather != 'dzmer') {
        for (var i in grassArr) {
            grassArr[i].mul();
        }
        for (var i in xotakerArr) {
            console.log(xotakerArr[i]);
            xotakerArr[i].eat();
        }
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (var i in bombArr) {
        bombArr[i].ddxk();

    }
        for (var i in amenakerArr) {
        amenakerArr[i].eat();

    }
    countBomb++;
    console.log(countBomb);
    if (countBomb >= 15) {
        var x = Math.floor(Math.random() * n);
        var y = Math.floor(Math.random() * m);

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
            countBomb = 0;

        }
    }
     takter++;
    var myJSON = JSON.stringify(obj, null, ' ');
    if (takter % 2 == 0) {
        obj.xotbazmanal.push(grassbazm);

        obj.xotakerbazmanal.push(grasseaterbazm);

        obj.xotakersharjvel.push(grasseatersharjvel);

        obj.xotakerkerav.push(grasseaterutel);

        obj.gishatichbazmanal.push(gishatichbazm);

        obj.gishatichsharjvel.push(gishatichsharjvel);

        obj.gishatichkerav.push(gishatichutel);

        obj.amenakerbazmanal.push(amenakerbazm);

        obj.amenakersharjvel.push(amenakersharjvel);

        obj.amenakerkerav.push(amenakerutel);


        fs.writeFile("verj.json", myJSON);
    }




    io.sockets.emit("matrix", matrix);
    io.sockets.emit("exanak", weather);
}
setInterval(func, 3000);

io.on('connection', function () {

   

});

