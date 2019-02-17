const numbers = ['🔸', '1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣'];

function shuffle(array) {
  let j, x, i;
  for (i = array.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
}

class Minesweeper {
  constructor(width, height, mines) {
    this.width = width;
    this.height = height;
    this.mines = mines;
    this.gridView = document.getElementById('grid');
    this.stateView = document.getElementById('state');
    this.minesView = document.getElementById('mines');

    this.reset();

  }

  reset() {
    // Reset the game
    this.playing = true;
    this.iWin = false;
    this.grid = [];
    this.checkedCells = this.mines;


    let mines = [];
    let count = this.mines;
    for (let i = 0; i < this.width * this.height; i++) {
      count > 0 ? mines.push(true) : mines.push(false);
      count--;
    }
    mines = shuffle(mines);

    for (let i = 0; i < this.height; i++) {
      let row = [];
      for (let j = 0; j < this.width; j++) {
        row.push(new Cell(j, i, mines[i * this.height + j]));
      }
      this.grid.push(row);
    }

    this.updateMinesNearby();
    this.bindEvents();
    this.showGrid();
    this.updateView();

  }

  revealAll() {
    for (let row of this.grid) {
      for (let cell of row) {
        if (cell.isMine && this.iWin) {
          cell.check(true);
        } else {
          cell.reveal();
        }
      }
    }
    this.updateView();
  }

  updateMinesNearby() {
    //Updates the number of nearby mines in each cell of the grid
    for (let row of this.grid) {
      for (let cell of row) {
        let count = 0;
        for (let neighbor of this.neighbors(cell)) {
          if (neighbor.isMine) {
            count++;
          }
        }
        cell.numberOfMinesNearby = count;
      }
    }
  }

  showGrid() {
    //Shows the grid in the DOM
    this.gridView.innerHTML = '';
    for (let i = 0; i < this.height; i++) {
      let row = document.createElement('div');
      row.className = 'row_grid';
      for (let j = 0; j < this.width; j++) {
        row.appendChild(this.grid[i][j].view);
      }
      this.gridView.appendChild(row);
    }
  }

  bindEvents() {
    for (let i = 0; i < this.height; i++) {
      for (let j = 0; j < this.width; j++) {

        let cellView = this.grid[i][j].view;

        cellView.addEventListener('click', () => {
          let cell = this.getCellFromDOM(cellView);
          this.play(cell);
        });
        cellView.addEventListener('contextmenu', (e) => {
          e.preventDefault();
          let cell = this.getCellFromDOM(cellView);
          this.checkCell(cell);
        });

      }
    }
  }

  updateView() {
    //Update the DOM with the object data
    if (this.playing) {
      this.stateView.innerHTML = twemoji.parse('😀');
    } else {
      this.stateView.innerHTML = this.iWin ? twemoji.parse('😎') : twemoji.parse('😵');
    }
    this.minesView.innerHTML = `${this.checkedCells}/${this.mines}`;
  }

  neighbors(cell) {
    //returns neighbor cells
    let x = cell.x;
    let y = cell.y;
    let neighbors_cords = [
      [x, y - 1],
      [x, y + 1],
      [x - 1, y - 1],
      [x - 1, y],
      [x - 1, y + 1],
      [x + 1, y - 1],
      [x + 1, y],
      [x + 1, y + 1]
    ];
    let neighbors = [];
    for (let cord of neighbors_cords) {
      if (cord[0] < this.width && cord[0] >= 0 && cord[1] < this.height && cord[1] >= 0) {
        neighbors.push(this.grid[cord[1]][cord[0]])
      }
    }
    return neighbors;
  }

  revealNeighbors(cell) {
    //Reveals all possible neighboring cells << Recursive function! >>
    if (!cell.revealed && !cell.isMine && !cell.checked) {
      cell.reveal();
      if (cell.numberOfMinesNearby == 0) {
        for (let neighbor of this.neighbors(cell)) {
          this.revealNeighbors(neighbor);
        }
      }
    }
  }

  play(cell) {
    if (this.playing) {
      if (!cell.checked) {
        if (cell.isMine) {
          this.gameOver();
        } else {
          this.revealNeighbors(cell);
        }
      }
      if (this.checkIfIWin()) {
        this.gameWon();
      }
    }
  }

  checkCell(cell) {
    //Mark a cell, then check if the player won
    if (this.playing && !cell.revealed) {
      cell.check();
      cell.checked ? this.checkedCells-- : this.checkedCells++;
      if (this.checkIfIWin()) {
        this.gameWon();
      }
      this.updateView();
    }
  }

  checkIfIWin() {
    //Returns true if the player won the game
    let count = 0;
    for (let row of this.grid) {
      for (let cell of row) {
        if (!cell.revealed) {
          cell.isMine ? count++ : count--;
        }
      }
    }
    return count == this.mines;
  }


  gameOver() {
    this.playing = false;
    this.iWin = false;
    this.revealAll();
  }

  gameWon() {
    this.playing = false;
    this.iWin = true;
    this.checkedCells = 0;
    this.revealAll();
  }

  getCellFromDOM(cellView) {
    //Returns the cell object that corresponds to a cell in the DOM
    let x;
    let y;
    for (let el of cellView.classList) {
      if (el[0] == "x") {
        x = parseInt(el.substr(2));
      }
      if (el[0] == "y") {
        y = parseInt(el.substr(2));
      }
    }
    return this.grid[y][x];
  }

}

class Cell {
  constructor(x, y, isMine) {
    this.x = x;
    this.y = y;
    this.revealed = false;
    this.isMine = isMine;
    this.checked = false;
    this.numberOfMinesNearby = 0;
    this.view = document.createElement('div');
    this.view.className = `cell no_revealed x_${x} y_${y}`;
    this.updateView();
  }

  reveal() {
    //Reveals the cell
    this.revealed = true;
    this.updateView();
  }

  check(check) {
    //Check the cell
    this.checked = check || !this.checked;
    this.updateView();
  }

  updateView() {
    //Update the DOM with the object data
    if (this.revealed) {
      this.view.classList.remove("no_revealed");
      this.view.classList.add("revealed");
      this.view.innerHTML = this.isMine ? twemoji.parse('💣') : twemoji.parse(numbers[this.numberOfMinesNearby]);
    } else if (this.checked) {
      this.view.innerHTML = twemoji.parse('🚩');
    } else {
      this.view.innerHTML = '';
    }
  }
}
