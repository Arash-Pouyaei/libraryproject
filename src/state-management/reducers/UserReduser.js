import { ADD_CART, ADD_USERS, EDIT_USERS, REMOVE_CART, REMOVE_USERS } from "../action/actionTypes";
import {users} from '../../data/data'

export const UserReducer = function(state=users, action){
    switch (action.type) {
        case ADD_USERS:
            return[...state,action.payload];
        case REMOVE_USERS:
            return [...state.filter(q=> q.id !== action.payload)]
        case EDIT_USERS:
            return [...state.filter((i)=>i.userId !== action.payload.userId),action.payload.values]
        case ADD_CART:{
            action.payload.item["quantities"]=action.payload.quantities
            action.payload.item["date"]=action.payload.newDate
            action.payload.item["lastdate"]=action.payload.lastdate
            return state.map((user) =>
                user.userId === action.payload.userId
                ? { ...user, cart: [...user.cart, action.payload.item] }
                : user
            );}
        case REMOVE_CART:
            return state.map((user) =>
                user.userId === action.payload.userId
                ? { ...user, cart: [...user.cart.filter(i=>i.productId!==action.payload.productId)] }
                : user
            );
        default:
            return state;
    }
}