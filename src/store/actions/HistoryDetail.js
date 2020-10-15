import axios from "../../axios/axios";
import {FETCH_HISTORY_DETAIL_START, FETCH_HISTORY_DETAIL_SUCCESS} from "./actionTypes";


export function fetchHistoryDetailList(data) {
    return async dispatch => {
        dispatch(fetchHistoryDetailStart())
        try {
            const response = await axios.post('/history-detail', {
                data
            })
            dispatch(fetchHistoryDetailSuccess(response.data.data))
        } catch (e) {
            console.log('Ошибка: ', e)
        }
    }
}

export function fetchHistoryDetailSuccess(historyDetailList) {
    return {
        type: FETCH_HISTORY_DETAIL_SUCCESS,
        historyDetailList
    }
}

export function fetchHistoryDetailStart() {
    return {
        type: FETCH_HISTORY_DETAIL_START
    }
}
