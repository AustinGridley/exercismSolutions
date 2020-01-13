export class QueenAttack {
    //gets an input from the test in an array format
    constructor(input = {}) {
        //makes the this.white/black work and sets it's initial spot, but then plugs in the input
        Object.assign(this, {
          white : [0, 3],
          black : [7, 3],
        }, input);
        //gets the file and rank of the white and black queens
        var [whiteRow, whiteColumn] = this.white
        var [blackRow, blackColumn] = this.black
        //this if statement finds if the black and white queens are on the same square and then returns an error as that should be impossible in chess
        if ((whiteRow==blackRow)&&(whiteColumn==blackColumn)) {
          throw 'Queens cannot share the same space';
        }
        //makes an eight by eight board filled with _
        this.board = Array(8).fill(null).map(x => Array(8).fill('_'));
      }

    toString() {
        //gets the file and rank of the white and black queens
        var [whiteRow, whiteColumn] = this.white
        var [blackRow, blackColumn] = this.black
        //inserts a W on the board where the white queen is and a B on the board where the black queen is
        this.board[whiteRow][whiteColumn] = 'W';
        this.board[blackRow][blackColumn] = 'B';
        //restablishes the board with the W and B and makes it work correctly
        return this.board.reduce((res, value) => res + value.join(' ') + "\n",'');
    }

    canAttack() {
        //gets the file and rank of the white and black queens
        var [whiteRow, whiteColumn] = this.white
        var [blackRow, blackColumn] = this.black
        //first finds if the white queen and the black queen are on the same file
        //second it finds if the white queen and the black queen are on the same rank
        //next it finds if there is a nw--se diagonal between the two queens
        //lastly it finds if there is a ne--sw diagonal between the two queens
       if (whiteRow==blackRow||whiteColumn==blackColumn||(Math.abs(whiteRow - blackRow) === Math.abs(whiteColumn - blackColumn))){
        //if any of these conditions are met the queens can attack each other and so this function returns true
       return true;
       }
       //else none of the conditions are met and the queens can't attack each other
       return false;
    }
}
