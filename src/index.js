import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import App from './components/App/App';
import logger from 'redux-logger';

const feedback = (state = {}, action) => {
    if(action.type === 'SEND_FEEDBACK') {
        console.log(action.payload)
        return {...state, ...action.payload};
    }
    return state
}

const allFeedback = createStore (
    combineReducers({
        feedback
    }),
    applyMiddleware(logger)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={allFeedback}>
            <App />
        </Provider>
    </React.StrictMode>
);
