import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import store from './redux/store/index.js'

createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<App />
	</Provider>
)
