import initSqlJs from 'sql.js' // Импортируем sql.js для работы с SQLite в браузере

export const setDb = db => ({
	type: 'SET_DB',
	payload: db,
})

export const setTables = tables => ({
	type: 'SET_TABLES',
	payload: tables,
})

export const setQuery = query => ({
	type: 'SET_QUERY',
	payload: query,
})

export const setResult = result => ({
	type: 'SET_RESULT',
	payload: result,
})

export const initDatabase = () => {
	return async dispatch => {
		const SQL = await initSqlJs({
			locateFile: file => `https://sql.js.org/dist/${file}`,
		})

		const db = new SQL.Database() // Создаем новую базу данных в памяти (in-memory)

		// Создаём таблицу сотрудников
		db.run(`
			CREATE TABLE employees (
				id INTEGER PRIMARY KEY,
				name TEXT,
				age INTEGER,
				salary INTEGER,
				department_id INTEGER
			);
		`)

		// Создаём таблицу отделов
		db.run(`
			CREATE TABLE departments (
				id INTEGER PRIMARY KEY,
				name TEXT
			);
		`)

		// Вставляем данные в таблицу departments
		db.run(`
			INSERT INTO departments (id, name) VALUES
				(1, 'HR'),
				(2, 'IT'),
				(3, 'Marketing');
		`)

		const employees = [
			[1, 'Alice', 25, 50000, 1],
			[2, 'Bob', 30, 60000, 2],
			[3, 'Charlie', 35, 70000, 2],
			[4, 'David', 40, 80000, 3],
			[5, 'Eve', 45, 90000, 1],
		]

		// Готовим выражение для вставки строк в таблицу employees
		const stmt = db.prepare('INSERT INTO employees VALUES (?, ?, ?, ?, ?)')
		for (let row of employees) stmt.run(row) // Вставляем каждую строку
		stmt.free() // Освобождаем ресурсы после вставки

		dispatch(setDb(db))

		// Получаем список таблиц, исключая системные (sqlite_internal и т.д.)
		const tableRes = db.exec(
			"SELECT name FROM sqlite_master WHERE type='table' AND name NOT LIKE 'sqlite_%';"
		)
		const tables = tableRes[0]?.values.map(row => row[0]) || [] // Извлекаем названия таблиц

		// Для каждой таблицы извлекаем все данные
		const dataPerTable = tables.map(table => {
			const res = db.exec(`SELECT * FROM ${table}`)
			return {
				name: table,
				columns: res[0]?.columns || [],
				rows: res[0]?.values || [],
			}
		})

		dispatch(setTables(dataPerTable))
	}
}
