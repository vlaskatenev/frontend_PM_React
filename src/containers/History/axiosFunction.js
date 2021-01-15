import { toHistoryData } from '../../axios/axiosMethods'


export const historyData = async (setData, data) => {  
    const response = await toHistoryData({
        data
    })
    setData(response.data.data)
}