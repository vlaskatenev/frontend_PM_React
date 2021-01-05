import axios from "../../axios/axios";
import {FETCH_HISTORY_START, FETCH_HISTORY_SUCCESS} from "./actionTypes";


export function fetchHistoryList(textValue) {
    return async dispatch => {
        dispatch(fetchHistoryStart())
        try {
            console.log('textValue', textValue);
            const response = await axios.post('/history', {
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
