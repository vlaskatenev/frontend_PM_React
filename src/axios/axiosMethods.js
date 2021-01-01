import axios from "./axios";

export const axiosPost = (url, arg) => axios.post(url, arg)
export const axiosGet = (url) => axios.get(url)


export const toListNamePc = () => {  
    return axiosPost('/list-computers', {ad_tree: "OU=comps,DC=npr,DC=nornick,DC=ru"})
}


export const toFindComputerInAd = computerName => {  
    return axiosPost('/find-computer-in-ad', {computerName})
}


export const toListProgramm = () => { 
    return axiosGet('/show-programm-list')
}


export const toAddedToGroupAD = objectToInstallSoft => {  
	return axiosPost('/start-install', objectToInstallSoft)
}


export const toResultCelery = taskId => {
    return axiosPost('/functional/get-status-process', {
            idProcess: taskId
        })
}


export const followDataToClient = obj => {

    return axiosPost('/functional/start-command-tm', obj)
}