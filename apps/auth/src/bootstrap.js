import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserHistory } from 'history'
import { RemoteContext } from './contexts/remote'

const mount = ({el, basename="/", isRemote=false}) => {
	
	const history = createBrowserHistory();
	const root = createRoot(el);

	root.render(
		<RemoteContext.Provider value={{isRemote, history, basename}}>
			<App />
		</RemoteContext.Provider>
	)
}

if (process.env.NODE_ENV === 'development') {
	const devRoot = document.querySelector('#auth-app')
	if (devRoot) {
		mount({el: devRoot})
	}
}

export { mount }