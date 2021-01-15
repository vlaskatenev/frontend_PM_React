import React, { useState, useEffect } from 'react'
import './InstallSoft.css'
import {listNamePc, listProgramm, addedToGroupAD, findComputerInAd}  from './axiosFunctions'
import {changeStateForCompName}  from './pure.functions'
import InputForm from '../../components/InputForm/InputForm'
import RenderPopUp from '../../components/PopUp/PopUp'
import { usePopUp } from '../../components/PopUp/PopUpContex'


const InstallSoft = () => {

	const [modalActive, setModalActive] = useState(null)
	const [objFromAD, setobjFromAD] = useState([])
	const [objForMainServer, setObjForMainServer] = useState({})

	const { toogle }  = usePopUp()

	useEffect(() => {
		if (modalActive === 0) {
			setobjFromAD([])
			setObjForMainServer({})	
		}}, [modalActive])

	return (
		<div className='InstallSoft'>
			<div><p>Введи имя ПК если нужна установка на один компьютер:</p></div>

			<InputForm type='text'
				handleClickButton={(valueText) => {
					if (findComputerInAd(setObjForMainServer, valueText)) {
						listProgramm(setModalActive, setobjFromAD)
					}}} />
			<div>
				<button onClick={() => listNamePc(setModalActive, setobjFromAD, toogle)}>Выбрать ПК</button>
			</div>
			<RenderPopUp>
				<ChoiceComp
					modalActive={modalActive}
					useObjFromAD={[objFromAD, setobjFromAD]}
					setModalActive={setModalActive}
					objForMainServer={setObjForMainServer}/>
				<ChoiceProgramm
					modalActive={modalActive}
					allProgramName={objFromAD}
					setModalActive={setModalActive}
					objForMainServer={objForMainServer}
					toogle={toogle}/>
			</RenderPopUp>
			</div>
	)
}

export default InstallSoft


const ChoiceComp = ({modalActive, useObjFromAD, setModalActive, objForMainServer}) => {

	const [distinguishedName, setDistinguishedName] = useState([])
	const [computer_name, setComputerNameList] = useState([])
	// выполняется перерендер компонента когда в объекте уже данные для другого компонента
	// чтобы обновления не было установил это состояние. 
	const [objFromAD2, _] = useState(useObjFromAD)
	
	const [objFromAD, setobjFromAD] = objFromAD2
	
	if (modalActive !== 1) return null

    return (
        <div>
            <h3>Выбери ПК</h3>
		   <div>
				{objFromAD.computerName.map((compName, index) => <p key={index}>
					<input onClick={e => changeStateForCompName(e.target.dataset,
					 [distinguishedName, computer_name],
					 [setDistinguishedName, setComputerNameList])}
					type='checkbox'
					data-distinguishedname={objFromAD.DistinguishedName[index]}
					data-compname={objFromAD.computerName[index]} 
					/>{compName}</p>
				)}
			</div>
			<button onClick={() => {
				objForMainServer({distinguishedName, computer_name})
				listProgramm(setModalActive, setobjFromAD)}}>К выбору софта</button>
        </div>
    )
}


const ChoiceProgramm = ({modalActive, allProgramName, setModalActive, objForMainServer, toogle}) => {
	const [program_name, setProgramName] = useState([])
	const [program_id, setProgrammIdList] = useState([])
	
	if (modalActive !== 2) return null

  return (
    <div>
      	<h3>Выбери программу</h3>
		<div>
			{allProgramName.map(progObj => <p key={progObj.id}>
				<input onClick={(e) => {
					changeStateForCompName(e.target.dataset,
						[program_id, program_name], 
						[setProgrammIdList, setProgramName])
				}}
				type='checkbox'
				data-progid={progObj.id}
				data-progname={progObj.short_program_name}
				 />{progObj.soft_display_name}</p>
			)}  
		</div>
		<button onClick={() => addedToGroupAD(setModalActive, toogle,
		{...objForMainServer,
			program_id, 
			program_name, 
			'methodInputnamePc': false}
			)}>Установить</button>
	</div>
    )
}
