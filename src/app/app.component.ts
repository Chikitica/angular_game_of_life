import { Component } from '@angular/core';
import { Board } from './models/boar.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  numCols: number;
  numRows: number;

  generation: number;
  gameStatus: number;

  board: Board;


  constructor(){
    this.numCols = 50;
    this.numRows = 50;
    this.generation = 0;
    this.gameStatus = -1;
    this.board = new Board(this.numCols, this.numRows);

  }
}
