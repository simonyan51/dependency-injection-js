import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import injector from './core/utils/injector';
import App from './view/App';
import injectionConfig from './injection-config';
import store from './store';

injectionConfig(injector);

ReactDOM.render((
    <Provider store={store}>
        <App name="Johnny" />
    </Provider>
), document.getElementById('root'));