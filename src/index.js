import 'react-app-polyfill/ie11';

// Main React
import React from 'react';
import Loadable from 'react-loadable';
import { render, hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Frontload } from 'react-frontload';
import createStore from './redux/store';

import App from './App';
import './static/scss/style.scss';

// Create a store and get back itself and its history object
const { store, history } = createStore();

const Application = (
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<Frontload noServerRender={true}>
				<App />
			</Frontload>
		</ConnectedRouter>
	</Provider>
);

const root = document.getElementById('wecodeartReact')
if (root.hasChildNodes() === true) Loadable.preloadReady().then(() => hydrate(Application, root));
else render(Application, root);   