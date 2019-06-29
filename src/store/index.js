import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import rootReducer from './ducks'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['users']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

let store = createStore(persistedReducer, applyMiddleware(thunk))
let persistor = persistStore(store)
export { store, persistor }
