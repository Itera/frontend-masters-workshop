import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './index.css';
import registerServiceWorker from './registerServiceWorker';
import rootReducer from './reducers';
import App from './containers/App';

const store = createStore(rootReducer);

const ReduxApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(<ReduxApp />, document.getElementById('root'));
registerServiceWorker();
