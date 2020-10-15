import {FETCH_HISTORY_START, FETCH_HISTORY_SUCCESS} from "../actions/actionTypes";

const initialState = {
    loading: false,
    historyList: []
}

export default function historyReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_HISTORY_START:
            return {
                ...state
            }
        case FETCH_HISTORY_SUCCESS:
            return {
                loading: true, historyList: action.historyList
            }
        default:
            return state
    }
}
