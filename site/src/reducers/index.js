import { combineReducers } from "redux";
import contatoReducer from './contatoReducers'

const reducers = combineReducers({
    contato : contatoReducer

})

export default reducers