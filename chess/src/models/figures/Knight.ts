import type { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureName } from './Figure'
import blackLogo from '../../assets/bN.svg'
import whiteLogo from '../../assets/wN.svg'

export class Knight extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureName.KNIGHT
	}
}
