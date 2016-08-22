/**
 * Created by Jason.liu on 2016-06-14.
 */
import { combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import {reducer as formReducer} from 'redux-form'

import reservation   from '../reducers/Reservation'
import pallet from '../reducers/Pallet'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducers = combineReducers(
    {
        reservation,
        pallet,
        //formReducer
    }
)
const store = createStoreWithMiddleware(reducers)//createStore(reducers)

export default store

