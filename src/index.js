import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import registerServiceWorker from './registerServiceWorker';

require('./stylesheets/base.scss');

ReactDom.render(
    <BrowserRouter>
        <Routes />
    </BrowserRouter>, document.getElementById('root'));

registerServiceWorker();
