import {combineReducers} from 'redux'
import historyReducer from "./History";
import historyDetailReducer from "./HistoryDetail";
import taskMgrReducer from "./TaskMgr";

export default combineReducers({
    history: historyReducer,
    historyDetail: historyDetailReducer,
    taskMgr: taskMgrReducer
})
