import {toListNamePc, toFindComputerInAd, toListProgramm, toAddedToGroupAD} from '../../axios/axiosMethods'

export const listNamePc = async (setModalActive, setobjFromAD) => {  
    const data = await toListNamePc()
    setobjFromAD(data.data.data)
    setModalActive(1)
}


export const findComputerInAd = async (setDistinguishedName, setComputerNameList, setobjFromAD, computerName) => {  
    const data = await toFindComputerInAd(computerName)
    const objFromAd = data.data.data
    setobjFromAD(objFromAd)
    setDistinguishedName(objFromAd.DistinguishedName)
	setComputerNameList(objFromAd.computerName)
    return objFromAd.adMember
}


export const listProgramm = async (setModalActive, setAllProgramName) => { 
    const data = await toListProgramm()
    setAllProgramName(data.data.data)
    setModalActive(2)
}


export const addedToGroupAD = async (objForClearState, objectToInstallSoft) => {  
	const data = await toAddedToGroupAD(objectToInstallSoft)
	objForClearState.forEach(func => {
		func()
	  })
}

