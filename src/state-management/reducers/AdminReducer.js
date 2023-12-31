import { ADD_ADMINS, REMOVE_ADMINS} from '../action/actionTypes'
import {admins} from '../../data/data'
export const AdminReducer = function(state=admins, action){
    switch (action.type) {
        case ADD_ADMINS:
            return [...state, action.payload];
        default:
            return state;
    }
}