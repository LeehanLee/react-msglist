import MessageList from './MessageList.js';
import Top from './Top.js';
import React, { Component } from 'react';
import Footer from './Footer.js';

class MessageBox extends Component{
    render(){
        return(
            <div>
                <Top />
                <MessageList />
                <Footer />
            </div>
        );
    }
}

export { MessageBox };