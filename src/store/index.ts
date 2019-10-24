import { createStore, combineReducers } from 'redux'
import chatReducers from './chat/reducers'

const rootReducer = combineReducers({
  chat: chatReducers
})

export type AppState = ReturnType<typeof rootReducer>

export default createStore(rootReducer)
