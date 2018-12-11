const GAMEBOARD_WIDTH = 300;
const GAMEBOARD_HEIGHT = 500;
const DEFAULT_CAR_X_POSITION = 130;
const DEFAULT_CAR_Y_POSITION = 350;
const ORIENTATION_LEFT = "left";
const ORIENTATION_RIGHT = "right";
const ORIENTATION_UP = "up";
const ORIENTATION_DOWN = "down";
const DEFAULT_CAR_SPEED = 20;

function Car() {
    this.xPosition = DEFAULT_CAR_X_POSITION;
    this.yPosition = DEFAULT_CAR_Y_POSITION;
    this.orientation = ORIENTATION_LEFT;
    this.speed = DEFAULT_CAR_SPEED;

    this.buildImage = function() {
        this.image = "car.png";
    };

    this.buildImage();

    this.move = function() {
        switch(this.orientation) {
            case ORIENTATION_LEFT:
                this.xPosition -= this.speed;
                break;
            case ORIENTATION_RIGHT:
                this.xPosition += this.speed;
                break;
            case ORIENTATION_UP:
                this.yPosition -= this.speed;
                break;
            case ORIENTATION_DOWN:
                this.yPosition += this.speed;
                break;
        }
    };

    this.show = function(ctx) {
        var image = new Image();
        var xPosition = this.xPosition;
        var yPosition = this.yPosition;
        image.onload = function() {
            ctx.drawImage(image, xPosition, yPosition);
        };
        image.src = this.image;
    };
}

function GameBoard() {
    this.car = new Car();
    this.ctx = undefined;
    this.start = function() {
        this.ctx = document.getElementById('myCanvas').getContext('2d');
        this.car.show(this.ctx);
    };

    this.render = function() {
        this.ctx.clearRect(0, 0, GAMEBOARD_WIDTH, GAMEBOARD_HEIGHT);
        this.car.show(this.ctx);
    };

    this.moveCar = function(event) {
        var orientation = 0;
        switch (event.which) {
            case 37:
                orientation = ORIENTATION_LEFT;
                break;
            case 38:
                orientation = ORIENTATION_UP;
                break;
            case 39:
                orientation = ORIENTATION_RIGHT;
                break;
            case 40:
                orientation = ORIENTATION_DOWN;
                break;
        }

        if (orientation) {
            if (this.car.orientation !== orientation) {
                this.car.orientation = orientation;
            } else {
                this.car.move();
            }
            this.render();
        }
    };
}

var gameBoard = new GameBoard();
gameBoard.start();