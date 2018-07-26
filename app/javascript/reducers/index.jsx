// src/reducers/index.js
import { combineReducers } from 'redux';
import MessageReducer from './message-reducer.jsx';
import TemplateReducer from './template-reducer.jsx';

const reducers = {
    messageStore: MessageReducer,
    templateStore: TemplateReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;