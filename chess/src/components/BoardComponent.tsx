import React, { useEffect, useState } from 'react'
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

	useEffect(() => {
		board.highlightCells(selectedCell) // Изменяем поле available у ячейки

		const newBoard = board.getCopyBoard() // Создаём новую доску с новыми ячейками
		setBoard(newBoard)
	}, [selectedCell, board, setBoard])

	const click = (cell: Cell) => {
		if (selectedCell === cell) {
			setSelectedCell(null)
		} else if (
			selectedCell &&
			selectedCell.figure?.canMove(cell)
		) {
			selectedCell.moveFigure(cell)
			setSelectedCell(null)
		} else {
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
