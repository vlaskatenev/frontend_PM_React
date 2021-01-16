import React, { useState, useEffect } from 'react'
import './InstallSoft.css'
import { findComputerInAd }  from './axiosFunctions'
import InputForm from '../../components/InputForm/InputForm'
import RenderPopUp from '../../components/PopUp/PopUp'
import { usePopUp } from '../../components/PopUp/PopUpContex'
import { ChoiceComp } from './ChoiceComp/ChoiceComp'
import { ChoiceProgramm } from './ChoiceProgramm/ChoiceProgramm'


const InstallSoft = () => {

	const [modalActive, setModalActive] = useState(0)
	const [choiceData, setChoiceData] = useState({})

	const { toogle }  = usePopUp()

	useEffect(() => {
		if (modalActive === 0) {
			setChoiceData({})	
		}}, [modalActive])


	return (
		<div className='InstallSoft'>
			<div><p>Введи имя ПК если нужна установка на один компьютер:</p></div>

			<InputForm type='text'
				handleClickButton={(valueText) => {
					if (findComputerInAd(setChoiceData, valueText)) {
						toogle(true)
						setModalActive(2)
					}}} />
			<div>
				<button onClick={() => {
					toogle(true) 
					setModalActive(1)
					}}>Выбрать ПК</button>
			</div>
			<RenderPopUp>
				<ChoiceComp
					modalActive={modalActive}
					setModalActive={setModalActive}
					setChoiceData={setChoiceData} />
				<ChoiceProgramm
					modalActive={modalActive}
					setModalActive={setModalActive}
					choiceData={choiceData}
					/>
			</RenderPopUp>
			</div>
	)
}

export default InstallSoft
