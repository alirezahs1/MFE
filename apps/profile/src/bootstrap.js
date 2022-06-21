import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserHistory } from 'history'

const mount = (el, basename="/") => {
	
	const history = createBrowserHistory();

	const root = createRoot(el)

	root.render(
		<App history={history} basename={basename} />
	)
}

if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#profile-app')
	if (devRoot) {
		mount(devRoot)
	}
}

export { mount }