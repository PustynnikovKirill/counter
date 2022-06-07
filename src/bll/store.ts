import React, {combineReducers, createStore} from 'redux';
import {counterReducer} from "./counter-reduser";

export type AppStateType = ReturnType<typeof RootReducer>

const RootReducer = combineReducers({
    counter:counterReducer
})

export  type AppStoreType = typeof store

export const store = createStore(RootReducer)



// @ts-ignore
window.store = store