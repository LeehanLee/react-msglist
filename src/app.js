import Counter from './Counter/component/index.js';
import { MessageBox } from './MessageBox/component/index.js';
import React, { Component } from 'react';
import { Provicer } from 'react-redux';

class App extends Component{
    render(){
        return (
            <div>
                <Counter />
                <MessageBox />
            </div>
        );
    }
}

export default App;