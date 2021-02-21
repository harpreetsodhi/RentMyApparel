import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';

class Index extends Component{
    render = () => {
        return (
            <Header></Header>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));