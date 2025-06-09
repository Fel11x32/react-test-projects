import { useEffect } from 'react' // Импортируем хуки React
import { useDispatch, useSelector } from 'react-redux'
import { initDatabase, setResult, setQuery } from './redux/actions'

export default function App() {
	const dispatch = useDispatch()

	const db = useSelector(state => state.db)
	const query = useSelector(state => state.query)
	const result = useSelector(state => state.result)
	const tablesWithData = useSelector(state => state.tablesWithData)

	// Хук, который выполнится один раз после монтирования компонента
	useEffect(() => {
		dispatch(initDatabase())
	}, [dispatch])
	// Функция выполнения SQL-запроса по кнопке
	const execute = () => {
		try {
			const res = db.exec(query)
			dispatch(setResult(res[0] || { columns: [], values: [] }))
		} catch (e) {
			dispatch(setResult({ columns: ['Error'], values: [[e.message]] }))
		}
	}

	return (
		<div style={{ padding: 20 }}>
			<h2>SQLite + React: Таблицы с данными и SQL-запросы</h2>

			{/* Вывод всех таблиц и их содержимого */}
			<div style={{ marginBottom: 30 }}>
				<strong>Все таблицы в базе:</strong>
				{tablesWithData.map(table => (
					<div key={table.name} style={{ marginTop: 20 }}>
						<h4>{table.name}</h4>
						<table border='1' cellPadding='5'>
							<thead>
								<tr>
									{table.columns.map(col => (
										<th key={col}>{col}</th> // Заголовки колонок
									))}
								</tr>
							</thead>
							<tbody>
								{table.rows.map((row, idx) => (
									<tr key={idx}>
										{row.map((val, i) => (
											<td key={i}>{val}</td> // Ячейки данных
										))}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				))}
			</div>

			{/* Поле для выполнения произвольных SQL-запросов */}
			<textarea
				rows={6}
				style={{ width: '100%', fontFamily: 'monospace' }}
				value={query}
				onChange={e => dispatch(setQuery(e.target.value))} // Обновление состояния при изменении текста
			/>
			<div style={{ marginTop: 10 }}>
				<button onClick={execute}>Execute</button>{' '}
				{/* Кнопка запуска запроса */}
			</div>

			{/* Результат выполнения SQL-запроса */}
			{result && (
				<div style={{ marginTop: 30 }}>
					<strong>Результат запроса:</strong>
					<table border='1' cellPadding='5' style={{ marginTop: 10 }}>
						<thead>
							<tr>
								{result.columns.map(col => (
									<th key={col}>{col}</th> // Заголовки результата
								))}
							</tr>
						</thead>
						<tbody>
							{result.values.map((row, idx) => (
								<tr key={idx}>
									{row.map((val, i) => (
										<td key={i}>{val}</td> // Значения результата
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</div>
	)
}
