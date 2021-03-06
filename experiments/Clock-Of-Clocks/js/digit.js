// I should refactor this later...

class Digit {
  constructor() {
    this.clocks = [];
    for (let i = 0; i < 6; i += 1) {
      const row = [];
      for (let j = 0; j < 5; j += 1) {
        row.push(new Clock());
      }
      this.clocks.push(row);
    }
  }

  type(type) {
    let toSet = [];
    switch (type) {
      case 0:
        toSet = [
          [3, 2, 2, 2, 4],
          [1, 3, 2, 4, 1],
          [1, 1, 7, 1, 1],
          [1, 1, 7, 1, 1],
          [1, 5, 2, 6, 1],
          [5, 2, 2, 2, 6],
        ];
        break;
      case 1:
        toSet = [
          [7, 7, 7, 3, 4],
          [7, 7, 7, 1, 1],
          [7, 7, 7, 1, 1],
          [7, 7, 7, 1, 1],
          [7, 7, 7, 1, 1],
          [7, 7, 7, 5, 6],
        ];
        break;
      case 2:
        toSet = [
          [3, 2, 2, 2, 4],
          [5, 2, 2, 4, 1],
          [3, 2, 2, 6, 1],
          [1, 3, 2, 2, 6],
          [1, 5, 2, 2, 4],
          [5, 2, 2, 2, 6],
        ];
        break;
      case 3:
        toSet = [
          [3, 2, 2, 2, 4],
          [5, 2, 2, 4, 1],
          [3, 2, 2, 6, 1],
          [5, 2, 2, 4, 1],
          [3, 2, 2, 6, 1],
          [5, 2, 2, 2, 6],
        ];
        break;
      case 4:
        toSet = [
          [3, 4, 7, 3, 4],
          [1, 1, 7, 1, 1],
          [1, 5, 2, 6, 1],
          [5, 2, 2, 4, 1],
          [7, 7, 7, 1, 1],
          [7, 7, 7, 5, 6],
        ];
        break;
      case 5:
        toSet = [
          [3, 2, 2, 2, 4],
          [1, 3, 2, 2, 6],
          [1, 5, 2, 2, 4],
          [5, 2, 2, 4, 1],
          [3, 2, 2, 6, 1],
          [5, 2, 2, 2, 6],
        ];
        break;
      case 6:
        toSet = [
          [3, 2, 2, 2, 4],
          [1, 3, 2, 2, 6],
          [1, 5, 2, 2, 4],
          [1, 3, 2, 4, 1],
          [1, 5, 2, 6, 1],
          [5, 2, 2, 2, 6],
        ];
        break;
      case 7:
        toSet = [
          [3, 2, 2, 2, 4],
          [5, 2, 2, 4, 1],
          [7, 7, 7, 1, 1],
          [7, 7, 7, 1, 1],
          [7, 7, 7, 1, 1],
          [7, 7, 7, 5, 6],
        ];
        break;
      case 8:
        toSet = [
          [3, 2, 2, 2, 4],
          [1, 3, 2, 4, 1],
          [1, 5, 2, 6, 1],
          [1, 3, 2, 4, 1],
          [1, 5, 2, 6, 1],
          [5, 2, 2, 2, 6],
        ];
        break;
      case 9:
        toSet = [
          [3, 2, 2, 2, 4],
          [1, 3, 2, 4, 1],
          [1, 5, 2, 6, 1],
          [5, 2, 2, 4, 1],
          [3, 2, 2, 6, 1],
          [5, 2, 2, 2, 6],
        ];
        break;
    }

    for (let i = 0; i < toSet.length; i += 1) {
      for (let j = 0; j < toSet[i].length; j += 1) {
        this.clocks[i][j].type(toSet[i][j]);
      }
    }
  }

  setLine(i) {
    for (let j = 0; j < this.clocks[i].length; j += 1) {
      this.clocks[i][j].set();
    }
  }
}
