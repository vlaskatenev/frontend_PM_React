// import axios from "../../axios/axios";
// import {FETCH_HISTORY_START, FETCH_HISTORY_SUCCESS} from "./actionTypes";


// export function fetchProcessList() {
//     return async dispatch => {
//         dispatch(fetchHistoryStart())
//         try {
//             const text = document.querySelector('[data-set="input"]').value
//             const response = await axios.post('/history', {
//                 data: text
//             })
//             dispatch(fetchHistorySuccess(response.data.data))
//         } catch (e) {
//             // dispatch(fetchQuizesError(e))
//         }
//     }
// }

// export function fetchHistorySuccess(historyList) {
//     return {
//         type: FETCH_HISTORY_SUCCESS,
//         historyList
//     }
// }

// export function fetchHistoryStart() {
//     return {
//         type: FETCH_HISTORY_START
//     }
// }
