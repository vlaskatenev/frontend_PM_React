import { toHistoryDetailData, toHistoryData } from '../../axios/axiosMethods'

export const historyDetailData = async (toogle, setData, id) => {  
    console.log('setData', setData);
    console.log('id', id);
    const data = await toHistoryDetailData(id)
    setData(data.data.data)
    toogle(true)
}

export const historyData = async (setData, data) => {  
    const response = await toHistoryData({
        data
    })
    setData(response.data.data)
}