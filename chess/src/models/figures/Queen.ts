import type { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureName } from './Figure'
import blackLogo from '../../assets/bQ.svg'
import whiteLogo from '../../assets/wQ.svg'

export class Queen extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureName.QUEEN
	}
}
