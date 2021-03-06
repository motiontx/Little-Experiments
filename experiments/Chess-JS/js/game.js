// ----------------------------------------------------------------- //
// ------------- ►►► </> with ♥ by Vittorio Retrivi ◄◄◄ ------------ //
// ----------------------------------------------------------------- //

class Game {
  constructor() {
    this.pieces = [];
    this.resetBoard();

    this.setStandardGame();
  }

  // ----------------------------------------------------------------- //

  resetBoard() {
    this.boardMatrix = [];
    this.board = document.getElementById('board');
    this.board.innerHTML = '';
    for (let i = 0; i < 8; i++) {
      const row = [];
      for (let j = 0; j < 8; j++) {
        const cell = document.createElement('cell');

        cell.addEventListener('click', (el) => {
          const x = el.target.getAttribute('x');
          const y = el.target.getAttribute('y');
          this.actionAt(x, y);
        });

        cell.setAttribute('x', j);
        cell.setAttribute('y', i);
        this.board.appendChild(cell);
        row.push(cell);
      }
      this.boardMatrix.push(row);
    }
  }

  // ----------------------------------------------------------------- //

  updateBoard(legalMovements) {
    for (const row of this.boardMatrix) {
      for (const cell of row) {
        cell.className = '';
      }
    }

    for (const piece of this.pieces) {
      const { x } = piece;
      const { y } = piece;
      const cell = this.boardMatrix[y][x];
      cell.className = `${piece.type} ${piece.color}`;
    }

    if (legalMovements) {
      for (const pos of legalMovements) {
        const { x } = pos;
        const { y } = pos;
        const cell = this.boardMatrix[y][x];
        cell.classList.add('legalMove');
      }
    }
  }

  // ----------------------------------------------------------------- //

  setEmpty() {
    this.pieces = [];
    this.updateBoard();
  }

  setStandardGame() {
    this.pieces = [];
    for (let j = 0; j < 8; j++) {
      this.pieces.push(new Pawn(j, 1, 'black'));
      this.pieces.push(new Pawn(j, 6, 'white'));
    }

    this.pieces.push(new Rook(0, 0, 'black'));
    this.pieces.push(new Knight(1, 0, 'black'));
    this.pieces.push(new Bishop(2, 0, 'black'));
    this.pieces.push(new Queen(3, 0, 'black'));
    this.pieces.push(new King(4, 0, 'black'));
    this.pieces.push(new Bishop(5, 0, 'black'));
    this.pieces.push(new Knight(6, 0, 'black'));
    this.pieces.push(new Rook(7, 0, 'black'));

    this.pieces.push(new Rook(0, 7, 'white'));
    this.pieces.push(new Knight(1, 7, 'white'));
    this.pieces.push(new Bishop(2, 7, 'white'));
    this.pieces.push(new Queen(3, 7, 'white'));
    this.pieces.push(new King(4, 7, 'white'));
    this.pieces.push(new Bishop(5, 7, 'white'));
    this.pieces.push(new Knight(6, 7, 'white'));
    this.pieces.push(new Rook(7, 7, 'white'));

    this.updateBoard();
  }

  // ----------------------------------------------------------------- //

  actionAt(x, y) {
    const piece = this.pieces.find((piece) => piece.x == x && piece.y == y);
    const legalMoves = piece.getLegalMoves(this.pieces);
    this.updateBoard(legalMoves);
  }
}
