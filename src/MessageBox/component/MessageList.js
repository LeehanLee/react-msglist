import React, { Component } from 'react';
import { connect } from 'react-redux';
import { msgClickAction } from '../action/index.js';
import _ from "lodash";

class MessageList extends Component{
    render(){
        const { messageList, active, onMsgClick } =this.props;
        let tmp=[];
        if(active==='show-all'){
            tmp=messageList;
        }else if(active==='show-read'){
            tmp=_.filter(messageList,item=>item.isread);
        }else if(active==='show-notread'){
            tmp=_.filter(messageList,item=>!item.isread);
        }
        console.log(tmp);
        return (
            <ul>
                {tmp.map(item=><li key={item.id} style={{
                    color:item.isread?'lightgray':'black'
                }} onClick={()=>onMsgClick(item)}>{item.id}--{item.msg}--{item.isread}</li>)}
            </ul>
        );
    }
}

function mapStatetoProps(messageList=[]){
    return messageList;    
}

function mapDispatchtoProps(dispatch,ownProps){
    return {
        onMsgClick:item=>{
            console.log(item);
            dispatch(msgClickAction(item));
        }
    };
}

export default connect(mapStatetoProps,mapDispatchtoProps)(MessageList);