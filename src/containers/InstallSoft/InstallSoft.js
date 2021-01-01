import React, {useState} from 'react'
import './InstallSoft.css'
import {listNamePc, listProgramm, addedToGroupAD, findComputerInAd}  from './axiosFunctions'
import {createPopupWindow, addedToList, changeStateForCompName}  from './pure.functions'


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
		<div className='InstallSoft'>
			<div><p>Введи имя ПК если нужна установка на один компьютер:</p></div>
			<div className='inputForm'>
				<div className='input'
					 contentEditable='true'
					 spellCheck='false'
					 data-inputcompname='input'
				>
				</div>
				<div className='button' onClick={() => {
						const textFromInput = document.querySelector('[data-inputcompname="input"]').textContent.trim()
						if (findComputerInAd(setDistinguishedName, setComputerNameList, setobjFromAD, textFromInput)) {
							listProgramm(setModalActive, setAllProgramName) 
						}}}>
						<i className='material-icons' data-computername='toStart'>
								flip_camera_android</i>
				</div>
			</div>
			<div>
				<button onClick={() => {listNamePc(setModalActive, setobjFromAD)}}>Выбрать ПК</button>
			</div>
			<div className='popUpWindow'>
				<div className='popUpMainWindow'>
					{ modalActive === 1
					? createPopupWindow(modalActive, setModalActive, createChoiceComp,
						[[setDistinguishedName, setComputerNameList], objFromAD, [distinguishedName, computer_name], setModalActive, setAllProgramName],
						objForClearState)
					: modalActive === 2
						? createPopupWindow(modalActive, setModalActive, createChoiceProgramm,
							[[setProgrammIdList, setProgramName], objForClearState, allProgramName, setModalActive, 
								{program_name, program_id, distinguishedName, computer_name}], 
							objForClearState)
						: null }
				</div>
		</div>
		</div>
	)
}

		
export default InstallSoft


const createChoiceComp = (funcList, objFromAD, stateList, setModalActive, setAllProgramName) => {
    return (
        <div>
            <h3>Выбери ПК</h3>
		   <div>
				{objFromAD.computerName.map((compName, index) => <p key={index}>
					<input onClick={(e) => {
						changeStateForCompName(e.target.dataset, stateList, funcList)
					}}
					type='checkbox'
					data-distinguishedname={objFromAD.DistinguishedName[index]}
					data-compname={objFromAD.computerName[index]} 
					/>{compName}</p>
				)}
			</div>
			<button onClick={() => listProgramm(setModalActive, setAllProgramName)}>К выбору софта</button>
        </div>
    )
}


const createChoiceProgramm = (funcList, objForClearState, allProgramName, setModalActive, objForMainServer) => {
  return (
    <div>
      <h3>Выбери программу</h3>
		  <div>
				<div>
					{allProgramName.map(progObj => <p key={progObj.id}>
						<input onClick={(e) => {
							changeStateForCompName(e.target.dataset,
								[objForMainServer.program_id, objForMainServer.program_name], 
								funcList)
						}}
						type='checkbox' 				
						data-progid={progObj.id}
						data-progname={progObj.short_program_name}
						 />{progObj.soft_display_name}</p>
					)}  
				</div>
				<button onClick={() => addedToGroupAD(
						setModalActive, objForClearState, 
						{...objForMainServer, 'methodInputnamePc': false}
					)}>Установить</button>
			</div>
		</div>
    )
}
