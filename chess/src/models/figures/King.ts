import type { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureName } from "./Figure";
import blackLogo from "../../assets/bK.svg"
import whiteLogo from "../../assets/wK.svg"

export class King extends Figure {
	constructor(color: Colors, cell: Cell) {
		super(color, cell)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureName.KING
	}

	canMove(target: Cell): boolean {
		if (!super.canMove(target)) {
			return false
		}
		return true
	}
}