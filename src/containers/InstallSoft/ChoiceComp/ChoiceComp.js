import React, { useState, useEffect } from 'react'
import './ChoiceComp.css'
import { getListNamePc }  from './axiosChoiceComp'
import {changeStateForCompName}  from '../pure.functions'
import { LoadingProcess } from '../../../components/LoadingProcess/LoadingProcess'


export const ChoiceComp = ({modalActive, setModalActive, setChoiceData}) => {
  const [dataFromAD, setDataFronAD] = useState(false)

	const [distinguishedName, setDistinguishedName] = useState([])
	const [computer_name, setComputerNameList] = useState([])
    

	useEffect(() => {
			getListNamePc().then(listNames => {
				setDataFronAD(listNames)
			})
	}, [])


	if (modalActive !== 1) return null

	return (
			<div>
				<h3>Выбери ПК</h3>
					<LoadingProcess loading={dataFromAD}>
					{!!dataFromAD && dataFromAD.computerName.map((compName, index) => <p key={index}>
									<input onClick={e => changeStateForCompName(
											e.target.dataset,
											[distinguishedName, computer_name],
											[setDistinguishedName, setComputerNameList]
											)}
											type='checkbox'
											data-distinguishedname={dataFromAD.DistinguishedName[index]}
											data-compname={dataFromAD.computerName[index]}
									/>{compName}</p>
							)}
					</LoadingProcess>
				<button onClick={() => {
						setChoiceData({distinguishedName, computer_name})
						setModalActive(2)
					}}>К выбору софта</button>
		</div>
	)
}
