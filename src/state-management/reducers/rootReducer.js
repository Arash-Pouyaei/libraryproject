import {combineReducers} from 'redux'
import {ProuductReducer} from './ProuductReducer'
import { UserReducer } from './UserReduser'
import { AdminReducer } from './AdminReducer'


export default combineReducers({
    ProuductState:ProuductReducer,
    userState:UserReducer,
    AdminState:AdminReducer,
})