import {axiosPost} from "../../axios/axiosMethods";


export const resultCelery = async taskId => {
    
    const data = async () => {
        const result = await axiosPost('/functional/get-status-process', {
            idProcess: taskId
        })
        
        if (result.data.task_status === "SUCCESS") {
            return result.data.task_result
        } else {
            return await new Promise((resolve) => {
                setTimeout(() => resolve(data()), 10000)
              })
        }
    }
    return await data()
}
