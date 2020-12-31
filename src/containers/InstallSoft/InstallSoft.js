import React, {useState} from 'react'
import RenderPopUp from '../../components/PopUp/PopUp'
import './InstallSoft.css'
import {axiosPost, axiosGet} from "../../axios/axiosMethods"


const InstallSoft = () => {

	const [modalActive, setModalActive] = useState(0)
	const [objFromAD, setobjFromAD] = useState([])
	const [distinguishedName, setDistinguishedName] = useState([])
	const [allProgramName, setAllProgramName] = useState([])
	const [program_name, setProgramName] = useState([])
	const [program_id, setProgrammIdList] = useState([])
	const [computer_name, setComputerNameList] = useState([])

	const objForClearState = [setobjFromAD, setDistinguishedName, setAllProgramName, setProgramName, setProgrammIdList, setComputerNameList]


	return (
		<div className="InstallSoft">
			<div><p>Введи имя ПК если нужна установка на один компьютер:</p></div>
			<div className="inputForm">
			<div className="input"
						contentEditable="true"
						spellCheck="false"
						data-set="input"
			>
			</div>
			<div className="button">
					<i className="material-icons" data-set="toStart">
							flip_camera_android</i>
			</div>
			</div>
			<div>
				<button onClick={() => {listNamePc(setModalActive, setobjFromAD)}}>Выбрать ПК</button>
			</div>
			<div className="popUpWindow">
				<div className="popUpMainWindow">
				{ (modalActive === 1) ? <RenderPopUp active={modalActive} 
					content={contentForPopUp(objFromAD, computer_name, distinguishedName, setModalActive, setAllProgramName)}
					arrayWithFunctions={[setModalActive, ...objForClearState]}
					argumentsForFunctions={[0, ...(new Array(objForClearState.length)).fill([])]} /> :
				(modalActive === 2) ? <div className="popUpChoiseProgramm"> <RenderPopUp active={modalActive} 
					content={contentForChoiceProgramm(objForClearState, program_name, allProgramName, program_id, setModalActive, distinguishedName, computer_name)}	
					arrayWithFunctions={[setModalActive, ...objForClearState]}
					argumentsForFunctions={[0, ...(new Array(objForClearState.length)).fill([])]} /> </div>  : null }
				</div>
		</div>
		</div>
	)
}
		
export default InstallSoft

function addedToList(elemName, listElemName) {
 console.log("до изменения: ", listElemName);	
	listElemName.indexOf( elemName ) === -1 
			? listElemName.push(elemName) 
			: listElemName.splice(listElemName.indexOf(elemName), 1)

console.log("после изменения: ", listElemName);
}


const listNamePc = async (setModalActive, setobjFromAD) => {  
    const data = await axiosPost('/list-computers', {ad_tree: "OU=comps,DC=npr,DC=nornick,DC=ru"})
    setobjFromAD(data.data.data)
    setModalActive(1)
}


const listProgramm = async (setModalActive, setAllProgramName) => {  
    const data = await axiosGet('/show-programm-list')
    setAllProgramName(data.data.data)
    setModalActive(2)
}


const addedToGroupAD = async (setModalActive, objForClearState, objectToInstallSoft) => {  
	const data = await axiosPost('/start-install', objectToInstallSoft)
	objForClearState.forEach(func => {
		func([])
	  })
    setModalActive(0)
}


    

const contentForPopUp = (objFromAD, computer_name, distinguishedName, setModalActive, setAllProgramName) => {
    return (
        <div>
            <h3>Выбери ПК</h3>
		   <div>
				{  objFromAD.computerName.map((compName, index) => <p key={index}>
					<input onClick={(e) => {
						addedToList(e.target.dataset.set, distinguishedName)
						addedToList(e.target.dataset.compname, computer_name)
					}}
					type="checkbox" 
					data-set={objFromAD.DistinguishedName[index]} 
					data-compname={objFromAD.computerName[index]} 
					/>{compName}</p>
				)
			       
			}   
			</div>
			<button onClick={() => listProgramm(setModalActive, setAllProgramName)}>К выбору софта</button>
        </div>
    )
}


const contentForChoiceProgramm = (objForClearState, program_name, allProgramName, program_id, setModalActive, DistinguishedName, computer_name) => {
    return (
        <div>
            <h3>Выбери программу</h3>
		   <div>
				{  allProgramName.map(progObj => <p key={progObj.id}>
					<input onClick={(e) => {
						addedToList(e.target.dataset.progid, program_id)
						addedToList(e.target.dataset.progname, program_name)
					}}
					type="checkbox" 					
					data-progid={progObj.id}
					data-progname={progObj.short_program_name}
					 />{progObj.soft_display_name}</p>
				)
			       
			}   
			</div>
			<button onClick={() => addedToGroupAD(setModalActive, objForClearState, {program_name, program_id, DistinguishedName, computer_name,
																				"methodInputnamePc": false,
																				})}>Установить</button>
																						</div>
    )
}


// {
//     "data": [
//         {
//             "id": 1,
//             "short_program_name": "notepad",
//             "soft_display_name": "Notepad++ (64-bit x64)"
//         }
//     ]
// }

// {
// 	"program_name": programmList,
// 	"program_id": [1],
// 	"DistinguishedName": [
// 		"CN=COMP3,OU=comps,DC=npr,DC=nornick,DC=ru", "CN=COMP2,OU=comps,DC=npr,DC=nornick,DC=ru"
// 	],
//    "methodInputnamePc": false,
//    "computer_name": ["COMP3", "COMP2"]
// }


// const h = {
// 	"program_name": programmList,
// 	"program_id": programmIdList,
// 	"DistinguishedName": compList,
//    "methodInputnamePc": false,
//    "computer_name": computerNameList
// }
