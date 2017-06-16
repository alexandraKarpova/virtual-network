import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Scheme from './Scheme';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';


ReactDOM.render(
    (<div>
        <App />
        <Scheme />
    </div>),
    document.getElementById('root')
);
registerServiceWorker();
