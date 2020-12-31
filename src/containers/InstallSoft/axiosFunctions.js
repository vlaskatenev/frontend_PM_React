import {axiosPost, axiosGet} from "../../axios/axiosMethods"

export const listNamePc = async (setModalActive, setobjFromAD) => {  
    const data = await axiosPost('/list-computers', {ad_tree: "OU=comps,DC=npr,DC=nornick,DC=ru"})
    setobjFromAD(data.data.data)
    setModalActive(1)
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

