import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import mainReducer from './reducers/mainReducer'

const persistConfig = {
	key: 'root',
	storage
}

const persistedReducer = persistReducer(persistConfig, mainReducer)

export default () => {
	let store = createStore(persistedReducer, applyMiddleware(thunk))
	return { store, persistor: persistStore(store) }
}
