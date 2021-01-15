import {toListNamePc, toFindComputerInAd, toListProgramm, toAddedToGroupAD} from '../../axios/axiosMethods'

export const listNamePc = async (setModalActive, setobjFromAD, toogle) => {  
    const data = await toListNamePc()
    console.log('data list name pc:', data.data.data);
    setobjFromAD(data.data.data)
    setModalActive(1)
    toogle(true)
}


export const findComputerInAd = async (setObjForMainServer, computerName) => {  
    const data = await toFindComputerInAd(computerName)
    const objFromAd = data.data.data
    setObjForMainServer(objFromAd)
    return objFromAd.adMember
}


export const listProgramm = async (setModalActive, setobjFromAD) => { 
    const data = await toListProgramm()
    setobjFromAD(data.data.data)
    setModalActive(2)
}


export const addedToGroupAD = async (setModalActive, toogle, objectToInstallSoft) => {  
    const data = await toAddedToGroupAD(objectToInstallSoft)
    setModalActive(0)
    toogle(false)
}

