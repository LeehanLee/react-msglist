console.log('tses');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
// import counterReducer from './Counter/reducer/index.js';
// import Counter from './Counter/component/Counter.js';

// import mbreducer from './MessageBox/reducer/index.js';
// import {MessageBox} from './MessageBox/component/index.js';

import App from './app.js';
import rootReducer from './rootReducer.js';

// let store=createStore(counterReducer,3);
// render(
//     <Provider store={store}>
//         <Counter />
//     </Provider>,
//     document.getElementById('root')
// );
let store = createStore(rootReducer);
render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

