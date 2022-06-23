import { Component, OnInit } from '@angular/core';
import { Board } from './models/boar.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  numCols: number;
  numRows: number;

  generation: number;
  gameStatus: number;

  board: Board;


  constructor(){
    this.numCols = 50;
    this.numRows = 50;
    this.generation = 0;
    this.gameStatus = 1;
    this.board = new Board(this.numCols, this.numRows);

  }

  ngOnInit(): void {
   setInterval(()=> {
    if(this.gameStatus === 0){
      this.board.checkboard();
      this.generation++;
    }

   }, 400)

  }

  onClick(row: number, col: number){
    console.log(row, col);
    this.board.changeStatus(row,col);
  }

  startPause(){
    this.gameStatus = this.gameStatus === 0 ? 1 : 0;
  }
}
