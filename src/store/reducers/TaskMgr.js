import {dataFromPc} from "../../containers/TaskMgr/axiosDataFromPC";

const initialState = {
    firstLoading: false,
    detailProcessData: dataFromPc.detailProcessData,
    average: dataFromPc.average
}

export default function taskMgrReducer(state = initialState, action) {

    switch (action.type) {

        default:
            return state
    }
}
