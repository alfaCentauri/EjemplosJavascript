( function (){
    self.Board = function (width, height){
        this.width = width;
        this.height = height;
        this.playing = false;
        this.game_over = false;
        this.bar = [];
        this.ball = null;
    }

    self.Board.prototype = {
        get elements(){
            var elements = this.bars;
            elements.push(ball);
            return elements;
        }
    }
})();

( function (){
    self.BoardView = function Canvas(canvas, board){
        this.canvas = canvas;
        this.canvas.width = board.width;
        this.canvas.height = board.height;
        this.board = board;
        this.context = canvas.getContext("2d");
    }
})();

//
window.addEventListener("load", main);

function main(){
    console.log("Hola esta es una aplicación de pruebas.");
    var board = new Board(800, 400);
    var canvas = document.getElementById("canvas");
    var board_view = new BoardView(canvas, board);
}