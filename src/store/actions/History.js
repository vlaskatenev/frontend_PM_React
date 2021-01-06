import {toHistoryData} from '../../axios/axiosMethods'
import {FETCH_HISTORY_START, FETCH_HISTORY_SUCCESS} from './actionTypes'


export function fetchHistoryList(textValue) {
    return async dispatch => {
        dispatch(fetchHistoryStart())
        try {
            const response = await toHistoryData({
                data: textValue
            })
            dispatch(fetchHistorySuccess(response.data.data))
        } catch (e) {
            // dispatch(fetchQuizesError(e))
        }
    }
}

export function fetchHistorySuccess(historyList) {
    return {
        type: FETCH_HISTORY_SUCCESS,
        historyList
    }
}

export function fetchHistoryStart() {
    return {
        type: FETCH_HISTORY_START
    }
}
