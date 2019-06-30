import { combineReducers } from 'redux'
import usersReducer from './users'
import animesReducer from './animes'

const rootReducer = combineReducers({
  users: usersReducer,
  animes: animesReducer
})

export default rootReducer