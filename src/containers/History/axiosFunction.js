import { toHistoryDetailData, toHistoryData } from '../../axios/axiosMethods'

export const historyDetailData = async (setModalActive, setData, id) => {  
    console.log('setData', setData);
    console.log('id', id);
    const data = await toHistoryDetailData(id)
    setData(data.data.data)
    setModalActive(true)
}

export const historyData = async (setLoading, setData, data) => {  
    const rewsponse = await toHistoryData({
        data
    })
    setData(rewsponse.data.data)
    setLoading(true)
}