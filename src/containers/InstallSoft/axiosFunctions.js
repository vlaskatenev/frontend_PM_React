import {toListNamePc, toFindComputerInAd, toListProgramm, toAddedToGroupAD} from '../../axios/axiosMethods'

export const listNamePc = async (setModalActive, setobjFromAD) => {  
    const data = await toListNamePc()
    setobjFromAD(data.data.data)
    setModalActive(1)
}


export const findComputerInAd = async (setObjForMainServer, computerName) => {  
    const data = await toFindComputerInAd(computerName)
    const objFromAd = data.data.data
    // setobjFromAD(objFromAd)
    setObjForMainServer(objFromAd)
    return objFromAd.adMember
}


export const listProgramm = async (setModalActive, setobjFromAD) => { 
    const data = await toListProgramm()
    setobjFromAD(data.data.data)
    setModalActive(2)
}


export const addedToGroupAD = async (setModalActive, objectToInstallSoft) => {  
    const data = await toAddedToGroupAD(objectToInstallSoft)
    setModalActive(0)
}

