import React, { useState } from 'react'
import type { FC } from 'react'
import type { Board } from '../models/Board'
import CellComponent from './CellComponent'
import type { Cell } from '../models/Cell'

interface BoardProps {
	board: Board
	setBoard: (board: Board) => void
}

const BoardComponent: FC<BoardProps> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

	const click = (cell: Cell) => {
		if (cell.figure) {
			setSelectedCell(cell)
		}
	}

	return (
		<div className='board'>
			{board.cells.map((row, index) => (
				<React.Fragment key={index}>
					{row.map(cell => (
						<CellComponent
							onClick={click}
							cell={cell}
							key={cell.id}
							selected={
								cell.x === selectedCell?.x && cell.y === selectedCell?.y
							}
						/>
					))}
				</React.Fragment>
			))}
		</div>
	)
}

export default BoardComponent
