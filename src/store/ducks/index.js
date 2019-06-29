import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  users: (state = []) => state,
  animes: (state = []) => state
})

export default rootReducer