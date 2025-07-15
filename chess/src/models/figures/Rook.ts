import type { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureName } from './Figure'
import blackLogo from '../../assets/bR.svg'
import whiteLogo from '../../assets/wR.svg'

export class Rook extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureName.ROOK
	}
}
