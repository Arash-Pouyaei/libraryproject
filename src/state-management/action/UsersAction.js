import { ADD_USERS, EDIT_USERS, REMOVE_USERS } from "./actionTypes"

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