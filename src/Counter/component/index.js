import React, { Component } from 'react';
import { connect } from 'react-redux';
import increaseAction from '../action/index.js';

class Counter extends Component {
    render(){
        const { count ,onIncreaseClick } = this.props;
        return (
            <div>
                <span>{count}</span>
                <button onClick={onIncreaseClick}>increase</button>
            </div>
        );
    }
}

function mapStatetoProps(count){
    return count    
}

function mapDispatchtoProps(dispatch,ownProps){
    return {
        onIncreaseClick:()=>{
            dispatch(increaseAction());
        }
    };
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Counter);