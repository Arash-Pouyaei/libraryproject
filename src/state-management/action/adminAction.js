import { ADD_ADMINS, REMOVE_ADMINS } from "./actionTypes"

export const addAdmin = (item) => ({
    type:ADD_ADMINS,
    payload: item
})
