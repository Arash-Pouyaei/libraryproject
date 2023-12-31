import { ADD_CART, REMOVE_CART, EDIT_CART } from '../action/actionTypes'
import {cart} from '../../data/data'
export const CartReducer = function(state=cart, action){
    switch (action.type) {
        case ADD_CART:
            return [...state, action.payload];
        case REMOVE_CART:
            return [...state.filter(q => q.productId !== action.payload)]
        case EDIT_CART:
            return [...state.filter((i)=>i.productId !== action.payload.Item.productId),action.payload.values]
        default:
            return state;
    }
}