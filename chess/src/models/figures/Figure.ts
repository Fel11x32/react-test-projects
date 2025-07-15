import logo from '../../assets/bB.svg'
import type { Cell } from '../Cell'
import type { Colors } from '../Colors'

export enum FigureName {
	FIGURE = 'figure',
	KING = 'king',
	KNIGHT = 'knight',
	PAWN = 'pawn',
	QUEEN = 'queen',
	ROOK = 'rook',
	BISHOP = 'bishop',
}

export class Figure {
	color: Colors
	logo: typeof logo | null
	cell: Cell
	name: FigureName
	id: number

	constructor(color: Colors, cell: Cell) {
		this.color = color
		this.cell = cell
		this.cell.figure = this
		this.logo = null
		this.name = FigureName.FIGURE
		this.id = Math.random()
	}

	canMove(target: Cell): boolean {
		return true
	}

	moveFigure(target: Cell): boolean {}
}
