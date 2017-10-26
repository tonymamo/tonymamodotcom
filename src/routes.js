import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from './components/views/home';
import Resume from './components/views/resume';

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
