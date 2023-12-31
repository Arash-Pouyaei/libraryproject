import { ADD_USERS, EDIT_USERS, REMOVE_USERS } from "../action/actionTypes";
import {users} from '../../data/data'

export const UserReducer = function(state=users, action){
    switch (action.type) {
        case ADD_USERS:
            return[...state,action.payload];
        case REMOVE_USERS:
            return [...state.filter(q=> q.id !== action.payload)]
        case EDIT_USERS:
            return [...state.filter((i)=>i.userId !== action.payload.userId),action.payload.values]
        default:
            return state;
    }
}