import { combineReducers, configureStore } from "@reduxjs/toolkit";
import Log from "./Log";
import storage  from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";


const PersistConfig ={
    key:"root",
    version:1,
    storage
}
const reducer = combineReducers({
    log:Log,
})
const persistedReducer1=persistReducer(PersistConfig,reducer)
export default configureStore(
 {
    reducer:persistedReducer1

    }
);