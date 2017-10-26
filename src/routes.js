import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import App from './components/app';
import Home from './components/views/home';
import Resume from './components/views/Resume';

export default class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={Home}/>
                <Route path='/resume' component={Resume}/>
            </div>
        );
    }
};
