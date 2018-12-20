const DEFAULT_BAR_X = 150;
const DEFAULT_BAR_Y = 250;
const DEFAULT_BAR_WIDTH = 100;
const DEFAULT_BAR_HEIGHT = 15;
const DEFAULT_BAR_SPEED = 15;
const DEFAULT_BALL_X = 195;
const DEFAULT_BALL_Y = 20;
const DEFAULT_BALL_SPEED = 2;
const DEFAULT_BALL_RADIUS = 10;
const DEFAULT_GAMEBOARD_WIDTH = 400;
const DEFAULT_GAMEBOARD_HEIGHT = 300;

function Bar(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = DEFAULT_BAR_SPEED;

    this.draw = function() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    this.clear = function() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(this.x, this.y, this.width, this.height);
    };

    this.moveLeft = function() {
        this.clear();
        this.x -= this.speed;
        this.draw();
    };

    this.moveRight = function() {
        this.clear();
        this.x += this.speed;
        this.draw();
    };
}

function Ball(x, y) {
    this.x = x;
    this.y = y;
    this.dx = DEFAULT_BALL_SPEED;
    this.dy = DEFAULT_BALL_SPEED;
    this.ballRadius = DEFAULT_BALL_RADIUS;

    this.draw = function() {
        this.clear();
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();
    };

    this.clear = function() {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext("2d");
        ctx.clearRect(this.x-this.ballRadius-this.dx, this.y-this.ballRadius-this.dy, this.ballRadius*2, this.ballRadius*2);
    };
}

function GameBoard(width, height, bar, ball) {
    this.bar = bar;
    this.ball = ball;

    this.play = function() {
        this.bar.draw();
        setInterval(this.moveBall, 30);
    };

    this.moveBall = function() {
        this.ball.draw();
        if (this.ball.y+this.ball.ballRadius >= this.bar.y && this.ball.x >= this.bar.x && this.ball.x <= this.bar.x+DEFAULT_BAR_WIDTH) {
            this.ball.dy = -this.ball.dy;
        }
        if  (this.ball.x > width-this.ball.ballRadius || this.ball.x < this.ball.ballRadius) {
            this.ball.dx = -this.ball.dx;
        }
        if  (this.ball.y > height-this.ball.ballRadius || this.ball.y < this.ball.ballRadius) {
            this.ball.dy = -this.ball.dy;
        }
        this.ball.x += this.ball.dx;
        this.ball.y += this.ball.dy;
    };

    this.moveBar = function(event) {
        switch(event.which) {
            case 37:
                if (this.bar.x > 0) {
                    this.bar.moveLeft();
                }
                break;
            case 39:
                if (this.bar.x < width-DEFAULT_BAR_X+40) {
                    this.bar.moveRight();
                }
                break;
        }
    };
}

var bar = new Bar(DEFAULT_BAR_X, DEFAULT_BAR_Y, DEFAULT_BAR_WIDTH, DEFAULT_BAR_HEIGHT);
var ball = new Ball(DEFAULT_BALL_X, DEFAULT_BALL_Y);
var gameBoard = new GameBoard(DEFAULT_GAMEBOARD_WIDTH, DEFAULT_GAMEBOARD_HEIGHT, bar, ball);
gameBoard.play();