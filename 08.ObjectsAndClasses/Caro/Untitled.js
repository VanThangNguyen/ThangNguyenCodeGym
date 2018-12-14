const DEFAULT_CELL_SIZE = 40;
const DEFAULT_ROWS = 10;
const DEFAULT_COLS = 10;
const VALUE_X = 1;
const VALUE_O = 0;
const VALUE_EMPTY = 2;

function Cell(x, y) {
    this.x = x;
    this.y = y;
    this.value = VALUE_EMPTY;
    
    this.getHtml = function() {
        var top = this.x * DEFAULT_CELL_SIZE;
        var left = this.y * DEFAULT_CELL_SIZE;
        var cellDivHtml = '<div id="cell-'+this.x+'-'+this.y+'" '+
                                'class="cell"' +
                                'onclick="play('+this.x+','+this.y+')" '+
                                'style="position: absolute; '+
                                'top: '+top+'px; '+
                                'left: '+left+'px; '+
                                'width: '+DEFAULT_CELL_SIZE+'px; '+
                                'height: '+DEFAULT_CELL_SIZE+'px; '+
                                'line-height: '+DEFAULT_CELL_SIZE+'px"></div>';
        return cellDivHtml;
    };

    this.draw = function() {
        var cellDiv = document.getElementById("cell-"+x+"-"+y);
        switch(this.value) {
            case VALUE_X:
                cellDiv.innerHTML = 'X';
                break;
            case VALUE_O:
                cellDiv.innerHTML = 'O';
                break;
        }
    };
}

function GameBoard(rows, cols, elementId) {
    this.rows = rows;
    this.cols = cols;
    this.elementId = elementId;
    this.cells = [];
    this.turn = VALUE_X;
    this.isOver = false;

    this.draw = function() {
        var gameBoardHtml = "";
        var gameBoardDiv = document.getElementById(elementId); 
        for (var i = 0; i < this.rows; i++) {
            var row = [];
            for (var j = 0; j < this.cols; j++) {
                var cell = new Cell(i, j);
                row.push(cell);
                gameBoardHtml += cell.getHtml();
            }
            this.cells.push(row);
        }
        gameBoardDiv.innerHTML = gameBoardHtml;
    };

    this.play = function(x, y) {
        if (this.isOver) {
            return;
        }
        var cell = this.cells[x][y];
        if (cell.value == VALUE_EMPTY) {
            cell.value = this.turn;
            cell.draw();
            this.check(x, y);
            if (this.turn == VALUE_X) {
                this.turn = VALUE_O;
            } else {
                this.turn = VALUE_X;
            }
        } else {
            alert("Cell is not empty!");
        }
    };

    this.check = function(x, y) {
        var cell = this.cells[x][y];
        var count = 1;
        var i = 1;
        //Horizontal
        while ((y+i < this.cols) && (this.cells[x][y+i].value == cell.value)) {
            count++;
            i++;
        }
        i = 1;
        while ((y-i >= 0) && (this.cells[x][y-i].value == cell.value)) {
            count++;
            i++;
        }
        this.endGame(count);
        //Vertical
        count = 1;
        i = 1;
        while ((x+i < this.rows) && (this.cells[x+i][y] == cell.value)) {
            count++;
            i++;
        }
        i = 1;
        while ((x-i >= 0) && (this.cells[x-i][y].value == cell.value)) {
            count++;
            i++;
        }
        this.endGame(count);
        //Left diagonal
        count = 1;
        i = 1;
        while ((y+i < this.cols) && (x+i < this.rows) && (this.cells[x+i][y+i].value == cell.value)) {
            count++;
            i++;
        }
        i = 1;
        while ((y-i >= 0) && (x-i >= 0) && (this.cells[x-i][y-i].value == cell.value)) {
            count++;
            i++;
        }
        this.endGame(count);
        //Right diagonal
        count = 1;
        i = 1;
        while ((y-i >= 0) && (x+i < this.rows) && (this.cells[x+i][y-i].value == cell.value)) {
            count++;
            i++;
        }
        i = 1;
        while ((y+i < this.cols) && (x-i >= 0) && (this.cells[x-i][y+i].value == cell.value)) {
            count++;
            i++;
        }
        this.endGame(count);
    };

    this.endGame = function(count) {
        if (count >= 5) {
            this.isOver = true;
            alert("End Game!");
        }
    };
}

function play(x, y) {
    gameBoard.play(x, y);
}

function start() {
    gameBoard = new GameBoard(DEFAULT_ROWS, DEFAULT_COLS, "gameBoard");
    gameBoard.draw();
}

var gameBoard;
start();