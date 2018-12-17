import React from 'react';
import ReactDOM from 'react-dom';
import injector from './core/injector';
import App from './view/App';
import injectionConfig from './injection-config';

injectionConfig(injector);

ReactDOM.render(<App name="Johnny" />, document.getElementById('root'));