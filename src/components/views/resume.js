import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Resume extends Component {
    render() {
        return (
            <div>
                This is the resume page.
                <Link to="/">Home</Link>
            </div>
        );
    }
}
