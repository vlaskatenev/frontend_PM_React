import {toHistoryDetailData} from '../../axios/axiosMethods'

export const historyDetailData = async (setModalActive, setData, id) => {  
    const data = await toHistoryDetailData(id)
    setData(data.data.data)
    setModalActive(true)
}