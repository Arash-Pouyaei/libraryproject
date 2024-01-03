import { ADD_USERS, EDIT_USERS, REMOVE_USERS , ADD_CART , REMOVE_CART } from "./actionTypes"

export const addUser = (item) => ({
    type:ADD_USERS,
    payload: item
})

export const removeUser = (id) => ({
    type:REMOVE_USERS,
    payload:id
})

export const editUser = (userId,values) => ({
    type:EDIT_USERS,
    payload:{userId,values}
})

export const add_cart = (item,userId,quantities,newDate,lastdate) => ({
    type:ADD_CART,
    payload:{item,userId,quantities,newDate,lastdate}
})

export const remove_cart = (userId,productId) => ({
    type:REMOVE_CART,
    payload:{userId,productId}
})