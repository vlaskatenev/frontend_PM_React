import axios from './axios'
import {urlToListComputers, urlToFindComputerInAd, urlToShowProgrammList,
    urlToStartInstall, urlToGetStatusProcess, urlToStartCommandOnClient} from './variables'
import {adTreeAllComputers} from '../variables.global'

export const axiosPost = (url, arg) => axios.post(url, arg)
export const axiosGet = (url) => axios.get(url)


export const toListNamePc = () => {  
    return axiosPost(urlToListComputers, {ad_tree: adTreeAllComputers})
}


export const toFindComputerInAd = computerName => {  
    return axiosPost(urlToFindComputerInAd, {computerName})
}


export const toListProgramm = () => { 
    return axiosGet(urlToShowProgrammList)
}


export const toAddedToGroupAD = objectToInstallSoft => {  
	return axiosPost(urlToStartInstall, objectToInstallSoft)
}


export const toResultCelery = taskId => {
    return axiosPost(urlToGetStatusProcess, {
            idProcess: taskId
        })
}


export const followDataToClient = obj => {
    return axiosPost(urlToStartCommandOnClient, obj)
}