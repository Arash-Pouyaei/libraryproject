import { ADD_PRODUCTS, EDIT_PRODUCTS, REMOVE_PRODUCTS } from '../action/actionTypes'
import {data} from '../../data/data'
export const ProuductReducer = function(state=data, action){
    switch (action.type) {
        case ADD_PRODUCTS:
            return [...state, action.payload];
        case REMOVE_PRODUCTS:
            return [...state.filter(q => q.productId !== action.payload)]
        case EDIT_PRODUCTS:
            return [...state.filter((i)=>i.productId !== action.payload.Item.productId),action.payload.values]
        default:
            return state;
    }
}