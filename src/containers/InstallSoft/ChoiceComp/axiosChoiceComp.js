import { toListNamePc } from '../../../axios/axiosMethods'

export const getListNamePc = async () => {  
    const data = await toListNamePc()
    return data.data.data
}