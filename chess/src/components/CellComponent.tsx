import type { FC } from 'react'
import type { Cell } from '../models/Cell'

interface CellProps {
	cell: Cell
	selected: boolean
	onClick: (cell: Cell) => void
}

const CellComponent: FC<CellProps> = ({ cell, selected, onClick }) => {
	return (
		<div
			onClick={() => onClick(cell)}
			className={[
				'cell',
				cell.color,
				selected ? 'selected' : '',
				cell.available && cell.figure ? 'highlight' : '',
			].join(' ')}
		>
			{!cell.figure && cell.available && <div className={'available'}></div>}
			{cell.figure?.logo && <img src={cell.figure.logo} alt='' />}
		</div>
	)
}

export default CellComponent
