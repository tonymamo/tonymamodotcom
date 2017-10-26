import React, { Component } from 'react';

export default class App extends Component {
    componentDidMount() {
        browserHistory.push('/');
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}
