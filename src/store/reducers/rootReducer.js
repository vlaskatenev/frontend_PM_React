import {combineReducers} from 'redux'
import historyReducer from "./History";
import historyDetailReducer from "./HistoryDetail";

export default combineReducers({
    history: historyReducer,
    historyDetail: historyDetailReducer,
})
