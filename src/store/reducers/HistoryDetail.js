import {
    FETCH_HISTORY_DETAIL_START,
    FETCH_HISTORY_DETAIL_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    loading: false,
    historyDetailList: []
}

export default function historyDetailReducer(state = initialState, action) {

    switch (action.type) {
        case FETCH_HISTORY_DETAIL_START:
            return {
                ...state
            }
        case FETCH_HISTORY_DETAIL_SUCCESS:
            return {
                loading: true, historyDetailList: action.historyDetailList
            }
        default:
            return state
    }
}
