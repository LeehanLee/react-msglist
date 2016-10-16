import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filtMsgListAction } from '../action/index.js';

class Footer extends Component{
    render(){
        const { active, onFootLinkClick } = this.props;
        return (
            <div>
                <span>what to show?</span>
                &nbsp;
                <a style={{
                    color:active==='show-all'?'black':'lightgray'
                }} onClick={(e)=>{onFootLinkClick(e, 'show-all')}}>show all</a>
                &nbsp;
                <a style={{
                    color:active==='show-read'?'black':'lightgray'
                }} onClick={(e)=>{onFootLinkClick(e, 'show-read')}}>show read</a>
                &nbsp;
                <a style={{
                    color:active==='show-notread'?'black':'lightgray'
                }} onClick={(e)=>{onFootLinkClick(e, 'show-notread')}}>show notread</a>
                &nbsp;
            </div>
        );
    }
}

function mapStatetoProps(active){
    return active;
}

function mapDispatchtoProps(dispatch, ownProps){
    return {
        onFootLinkClick:(e, filter)=>{
            e.preventDefault();
            dispatch(filtMsgListAction(filter));
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Footer);