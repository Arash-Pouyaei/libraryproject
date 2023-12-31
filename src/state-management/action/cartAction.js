import { ADD_CART, REMOVE_CART, EDIT_CART } from "./actionTypes"

export const addCart = (item) => ({
    type:ADD_CART,
    payload: item,
    purchaseDate: new Date()
})

export const removeCart = (productId) => ({
    type:REMOVE_CART,
    payload:productId
})

export const editCart= (Item,values) => ({
    type:EDIT_CART,
    payload:{Item,values}
})