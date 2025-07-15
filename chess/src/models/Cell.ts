import type { Board } from "./Board";
import type { Colors } from "./Colors";
import type { Figure } from "./figures/Figure";

export class Cell {
	readonly x: number;
	readonly y: number;
	readonly color: Colors;
	figure: Figure | null;
	board: Board;
	available: boolean; // Может ли переместиться выбранная фигура 
	id: number; // Для ключей в React

	constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null, ) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.figure = figure;
		this.board = board;
		this.available = false;
		this.id = Math.random()
	}
}