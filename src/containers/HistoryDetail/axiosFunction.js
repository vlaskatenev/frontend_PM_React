import { toHistoryDetailData } from '../../axios/axiosMethods'


export const historyDetailData = async (id) => {
    const data = await toHistoryDetailData(id)
    return data.data.data
}