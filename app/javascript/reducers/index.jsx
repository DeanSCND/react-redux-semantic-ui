// src/reducers/index.js
import { combineReducers } from 'redux';
import MessageReducer from './message-reducer.jsx';
import TemplateReducer from './template-reducer.jsx';
import { reducer as formReducer } from 'redux-form';

const reducers = {
    messageStore: MessageReducer,
    templateStore: TemplateReducer,
    form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;