export class Board {
  board: number[][];
  alive: number;
  total : number;

  constructor(pWidth: number, pHeight: number) {
    this.board = [];
    for (let width = 0; width < pWidth; width++) {
      this.board[width] = [];
      for (let height = 0; height < pHeight; height++) {
        this.board[width][height] = 0;
      }
    }
    this.total = pWidth*pHeight;
    this.alive = 0;
  }

  status(coordX: number, coordY: number): number {
    return this.board[coordX][coordY];
  }

  changeStatus(coordX: number, coordY: number) {
    this.board[coordX][coordY] = this.board[coordX][coordY] === 0 ? 1 : 0;
    this.board[coordX][coordY] === 0 ? this.alive-- : this.alive++
  }

  checkboard() {
    let tempBoard: number[][] = [];

    for (let width = 0; width < this.board.length; width++) {
      tempBoard[width] = [];
      for (let height = 0; height < this.board[width].length; height++) {
        tempBoard[width].push(this.checkRules(width, height));
      }
    }
    this.board = [...tempBoard];
  }

  checkVitals() {
    let tempBoard: number[][] = [];
    this.alive = 0;
    for (let width = 0; width < this.board.length; width++) {
      tempBoard[width] = [];
      for (let height = 0; height < this.board[width].length; height++) {
        if(this.board[width][height] === 1) {
          this.alive++;
        }
      }
    }
  }

  cleanBoard() {
    let tempBoard: number[][] = [];

    for (let width = 0; width < this.board.length; width++) {
      tempBoard[width] = [];
      for (let height = 0; height < this.board[width].length; height++) {
        tempBoard[width].push(0);
      }
    }
    this.board = [...tempBoard];
    this.total = this.board.length * this.board.length;
    this.alive = 0;
  }

  checkRules(coordX: number, coordY: number): number {
    const width = this.board.length;
    const height = this.board[0].length;

    const xMenos = coordX - 1 < 0 ? width - 1 : coordX - 1;
    const xMas = coordX + 1 >= width ? 0 : coordX + 1;
    const yMenos = coordY - 1 < 0 ? height - 1 : coordY - 1;
    const yMas = coordY + 1 >= height ? 0 : coordY + 1;

    const cornerUpLeft = this.board[xMenos][yMenos];
    const upMiddle = this.board[xMenos][coordY];
    const cornerUpRight = this.board[xMenos][yMas];
    const left = this.board[coordX][yMenos];
    const right = this.board[coordX][yMas];
    const cornerBottonLeft = this.board[xMas][yMenos];
    const bottonMiddle = this.board[xMas][coordY];
    const cornerBottonRight = this.board[xMas][yMas];

    const currentStatus = this.board[coordX][coordY];

    const vecinos =
      cornerUpLeft +
      upMiddle +
      cornerUpRight +
      left +
      right +
      cornerBottonLeft +
      bottonMiddle +
      cornerBottonRight;

    if (currentStatus === 1 && (vecinos === 2 || vecinos === 3)) {
      return 1;
    }

    if (currentStatus === 0 && vecinos === 3) {
      return 1;
    }
    
    return 0;
  }
}
