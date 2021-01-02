import React, {useState} from 'react'
import './InstallSoft.css'
import {listNamePc, listProgramm, addedToGroupAD, findComputerInAd}  from './axiosFunctions'
import {PopupInstallSoft, changeStateForCompName, readInputCompName}  from './pure.functions'
import InputForm from '../../components/InputForm/InputForm'


const InstallSoft = () => {

	const [modalActive, setModalActive] = useState(0)
	const [objFromAD, setobjFromAD] = useState([])
	const [distinguishedName, setDistinguishedName] = useState([])
	const [allProgramName, setAllProgramName] = useState([])
	const [program_name, setProgramName] = useState([])
	const [program_id, setProgrammIdList] = useState([])
	const [computer_name, setComputerNameList] = useState([])

	const objForClearState = [
		setModalActive.bind(this, 0),
		setobjFromAD.bind(this, []), 
		setDistinguishedName.bind(this, []), 
		setAllProgramName.bind(this, []), 
		setProgramName.bind(this, []), 
		setProgrammIdList.bind(this, []), 
		setComputerNameList.bind(this, [])
  ]

	return (
		<div className='InstallSoft'>
			<div><p>Введи имя ПК если нужна установка на один компьютер:</p></div>

			<InputForm 
                    type='text'
                    handleClickButton={event => {
						if (findComputerInAd(setDistinguishedName, setComputerNameList, setobjFromAD, readInputCompName(event))) {
							listProgramm(setModalActive, setAllProgramName) 
						}}}
                />
			

			<div>
				<button onClick={() => {listNamePc(setModalActive, setobjFromAD)}}>Выбрать ПК</button>
			</div>
			<div className='popUpWindow'>
				<div className='popUpMainWindow'>
					{ modalActive === 1
					? <PopupInstallSoft 
						modalActive={modalActive}
						objForClearState={objForClearState}>
							<ChoiceComp funcList={[setDistinguishedName, setComputerNameList]}
								objFromAD={objFromAD}
								stateList={[distinguishedName, computer_name]}
								setModalActive={setModalActive}
								setAllProgramName={setAllProgramName}/>
					   </PopupInstallSoft>		
					: modalActive === 2
						? <PopupInstallSoft 
                modalActive={modalActive}
                objForClearState={objForClearState}>
                  <ChoiceProgramm
                    funcList={[setProgrammIdList, setProgramName]}
                    objForClearState={objForClearState}
                    allProgramName={allProgramName}
                    objForMainServer={{program_name, program_id, distinguishedName, computer_name}}/>
							</PopupInstallSoft>
						: null }
				</div>
		</div>
		</div>
	)
}

export default InstallSoft


const ChoiceComp = ({funcList, objFromAD, stateList, setModalActive, setAllProgramName}) => {
    return (
        <div>
            <h3>Выбери ПК</h3>
		   <div>
				{objFromAD.computerName.map((compName, index) => <p key={index}>
					<input onClick={e => changeStateForCompName(e.target.dataset, stateList, funcList)}
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


const ChoiceProgramm = ({funcList, objForClearState, allProgramName, objForMainServer}) => {
  return (
    <div>
      <h3>Выбери программу</h3>
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
				<button onClick={() => addedToGroupAD(objForClearState, 
						{...objForMainServer, 'methodInputnamePc': false}
					)}>Установить</button>
			</div>
    )
}
