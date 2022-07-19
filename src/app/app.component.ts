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
  alive: number;
  dead: number;

  board: Board;


  constructor(){
    this.numCols = 60;
    this.numRows = 40;
    this.generation = 0;
    this.gameStatus = 1;
    this.board = new Board(this.numCols, this.numRows);
    this.alive = 0;
    this.dead = this.numCols * this.numRows;

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
    this.board.changeStatus(row,col);
  }

  startPause(){
    this.gameStatus = this.gameStatus === 0 ? 1 : 0;
  }

  restart(){
    this.generation = 0;
    this.gameStatus = 1;
    this.board.cleanBoard();
  }
}
