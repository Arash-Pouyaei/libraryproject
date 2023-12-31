import { ADD_PRODUCTS, EDIT_PRODUCTS, REMOVE_PRODUCTS } from "./actionTypes"

export const addProudcts = (item) => ({
    type:ADD_PRODUCTS,
    payload: item
})

export const removeProducts = (productId) => ({
    type:REMOVE_PRODUCTS,
    payload:productId
})

export const editProducts = (Item,values) => ({
    type:EDIT_PRODUCTS,
    payload:{Item,values}
})
