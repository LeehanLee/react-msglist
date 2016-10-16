import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBtnClickAction } from '../action/index.js';

class Top extends Component{
    render(){
        const { onFormSubmit } = this.props;
        return (
            <form onSubmit={(e)=>onFormSubmit(e,this)}>
                <input type='text' ref={ele=>this.input=ele} />
                <button type='submit'>add</button>
            </form>
        );
    }
}

function mapDispatchtoProps(dispatch,ownProps){
    return {
        onFormSubmit:(e,_this)=>{
            e.preventDefault();
            console.log(_this.input);
            if(_this.input.value.trim()){
                dispatch(addBtnClickAction(_this.input.value.trim()));
                _this.input.value='';
                return;
            }
            else{
                return;
            }
        }
    }
}

export default connect(null,mapDispatchtoProps)(Top);