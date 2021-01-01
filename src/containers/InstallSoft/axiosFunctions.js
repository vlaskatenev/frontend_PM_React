import {axiosPost, axiosGet} from "../../axios/axiosMethods"

export const listNamePc = async (setModalActive, setobjFromAD) => {  
    const data = await axiosPost('/list-computers', {ad_tree: "OU=comps,DC=npr,DC=nornick,DC=ru"})
    setobjFromAD(data.data.data)
    setModalActive(1)
}


export const findComputerInAd = async (setDistinguishedName, setComputerNameList, setobjFromAD, computerName) => {  
    const data = await axiosPost('/find-computer-in-ad', {computerName})
    const objFromAd = data.data.data
    setobjFromAD(objFromAd)
    setDistinguishedName(objFromAd.DistinguishedName)
	setComputerNameList(objFromAd.computerName)
    return objFromAd.adMember
}


export const listProgramm = async (setModalActive, setAllProgramName) => { 
    const data = await axiosGet('/show-programm-list')
    setAllProgramName(data.data.data)
    setModalActive(2)
}


export const addedToGroupAD = async (setModalActive, objForClearState, objectToInstallSoft) => {  
	const data = await axiosPost('/start-install', objectToInstallSoft)
	objForClearState.forEach(func => {
		func([])
	  })
    setModalActive(0)
}

