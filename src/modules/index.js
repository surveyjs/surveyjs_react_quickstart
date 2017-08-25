import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import survey from './survey'

export default combineReducers({
  router: routerReducer,
  counter,
  survey
})
