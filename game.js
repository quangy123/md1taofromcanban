let canvas = document.getElementById("myCanvas").getContext("2d");
let planes = {};
let chaiBia = [];

let count = 0;
let point = 0;
let timeID;
let timeID2;
let timeID3;
let timeID4;

let score = 0;

// khởi tạo đối tượng thùng bia
function ThungBia(X,Y,width,height) {
    this.image = new Image();
    this.image.src = "thung-bia.jpg";
    this.toadoX = X;
    this.toadoY = Y;
    this.width = width;
    this.height = height;
    this.getToaDoX = function () {
        return this.toadoX + this.width / 2;
    };
    this.getToaDoY = function () {
        return this.toadoY + this.height / 2;
    };
    this.getWidthMyPlanes = function () {
        return this.width;
    };
    this.getHeightMyPlanes = function () {
        return this.height;
    };
    this.ThungBia = function () {
        canvas.drawImage(this.image, this.toadoX, this.toadoY, this.width, this.height)
    };
}

//khởi tạo đối tượng chai bia
function ChaiBia (toadox,toadoy,wEnemy,hEnemy) {
    this.image = new Image();
    this.image.src = "chaibia.png";
    this.dy = 0.5;
    this.toadox = toadox;
    this.toadoy = toadoy;
    this.wEnemy = wEnemy;
    this.hEnemy = hEnemy;
    this.getXCenter = function () {
        return this.toadox  ;
    };
    this.getYCenter = function () {
        return this.toadoy  ;
    };

    this.getWidthEnemy = function () {
        return this.wEnemy;
    };
    this.getHeightEnemy = function () {
        return this.hEnemy;
    };

    this.createBear = function () {
        if (score > 30) {
            this.toadoy += (this.dy * 3);
        }else if (score > 20 ) {
            this.toadoy += this.dy * 2;
        }else if (score >10) {
            this.toadoy += this.dy *1.5;
        }else{
            this.toadoy += this.dy;
        }
        if (this.toadoy >= 500 && this.toadoy < 1000) {
            mang--;
        }
        canvas.drawImage(this.image,this.toadox,this.toadoy,this.wEnemy,this.hEnemy);
    };
    this.checkGameOver2 = function (chaiBia) {
        let bia_X = this.toadox + this.wEnemy / 2;
        let bia_Y = this.toadoy + this.hEnemy / 2;
        if (Math.abs(chaiBia.getToaDoX() - bia_X) >= (chaiBia.getWidthMyPlanes() + ) / 2
            // && Math.abs(chaiBia.getToaDoY() - bia_Y) < (enplanes.getHeightMyPlanes() +  this.hEnemy) / 2
        ) {
            mang--;
        }
    }

}
window.addEventListener("mousemove", moveMouse);
    // vẽ tất cả
function drawAll() {
    canvas.clearRect(0, 0, 500, 500);
    planes.ThungBia();
    for (let i = 0; i <chaiBia.length; i++) {
        enplanes[i].creatPlanesEnemy();
        enplanes[i].checkGameOver2(planes);
    }
    GameOver(mang);
}

// bắt đầu game
function    startGame() {
    let random = Math.floor(Math.random() * (500));
    planes = new ThungBia(200,200,29,18);
    chaiBia = new chaiBia()
    chaiBia[count] = new ChaiBia(random, -10,27,25);


    timeID = setInterval(drawAll,parseFloat("0.001"));
    timeID3 = setInterval(chaiBia,700);

}
// kết thúc
function GameOver(mang) {
    if (mang === 0) {
        clearInterval(timeID);
        clearInterval(timeID3);
        let view = alert("Game Over, Điểm số của bạn là: " + score);
        if (view) {
            window.location.reload();
        }
    }
}

function moveMouse(evt) {
    let canvas_x = evt.pageX -9;
    let canvas_y = evt.pageY -9;
    planes.toadoX = canvas_x -14;
    planes.toadoY = canvas_y - 9;
}
