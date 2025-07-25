import type { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureName } from './Figure'
import blackLogo from '../../assets/bB.svg'
import whiteLogo from '../../assets/wB.svg'

export class Bishop extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureName.BISHOP
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		if (this.cell.isEmptyDiagonal(target)) {
			return true
		}
		
		return false
	}
}
