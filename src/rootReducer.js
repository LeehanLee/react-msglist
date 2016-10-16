import messageList from './MessageBox/reducer/index.js';
import count from './Counter/reducer/index.js';
import active from './MessageBox/reducer/filterReducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
    count,
    messageList,
    active
});