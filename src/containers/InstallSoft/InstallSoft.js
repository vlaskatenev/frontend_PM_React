import React, {useState, useEffect} from 'react'
import './InstallSoft.css'
import {listNamePc, listProgramm, addedToGroupAD, findComputerInAd}  from './axiosFunctions'
import {changeStateForCompName}  from './pure.functions'
import InputForm from '../../components/InputForm/InputForm'
import RenderPopUp from '../../components/PopUp/PopUp'


const InstallSoft = () => {

	const [modalActive, setModalActive] = useState(null)
	const [objFromAD, setobjFromAD] = useState([])
	const [objForMainServer, setObjForMainServer] = useState({})


	const objChoiceComp = <RenderPopUp active={modalActive}
		setModalActive={setModalActive.bind(this, 0)} >
			<ChoiceComp 
				useObjFromAD={[objFromAD, setobjFromAD]}
				setModalActive={setModalActive}
				objForMainServer={setObjForMainServer}/>
		</RenderPopUp>

	const objChoiceProgramm = <RenderPopUp active={modalActive}
		setModalActive={setModalActive.bind(this, 0)} >
			<ChoiceProgramm
				allProgramName={objFromAD}
				objForMainServer={objForMainServer}/>
		</RenderPopUp>


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
					if (findComputerInAd(setobjFromAD, valueText)) {
						setObjForMainServer(objFromAD)
						listProgramm(setModalActive, setobjFromAD) 
					}}} />
			<div>
				<button onClick={() => {listNamePc(setModalActive, setobjFromAD)}}>Выбрать ПК</button>
			</div>
			<div className='popUpWindow'>
				<div className='popUpMainWindow'>
					{ modalActive === 1
						? objChoiceComp
						: modalActive === 2
							? objChoiceProgramm
							: null }
				</div>
		</div>
		</div>
	)
}

export default InstallSoft


const ChoiceComp = ({useObjFromAD, setModalActive, objForMainServer}) => {
	const [distinguishedName, setDistinguishedName] = useState([])
	const [computer_name, setComputerNameList] = useState([])

	const [objFromAD, setobjFromAD] = useObjFromAD

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


const ChoiceProgramm = ({allProgramName, objForMainServer}) => {
	const [program_name, setProgramName] = useState([])
	const [program_id, setProgrammIdList] = useState([])

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
		<button onClick={() => addedToGroupAD({...objForMainServer,
			program_id, 
			program_name, 
			'methodInputnamePc': false}
			)}>Установить</button>
	</div>
    )
}
