import React, { useState, useEffect } from 'react'
import './ChoiceProgramm.css'
import { getListProgramm, addedToGroupAD }  from './axiosChoiceProgramm'
import { changeStateForCompName }  from '../pure.functions'
import { LoadingProcess } from '../../../components/LoadingProcess/LoadingProcess'
import { usePopUp } from '../../../components/PopUp/PopUpContex'


export const ChoiceProgramm = ({modalActive, setModalActive, choiceData}) => {
	const [allProgramm, setAllProgramm] = useState(false)
	const [program_name, setProgramName] = useState([])
	const [program_id, setProgrammIdList] = useState([])

	const { toogle }  = usePopUp()

	useEffect(() => {
			getListProgramm().then(programms => {
					setAllProgramm(programms)
			})
	}, [])

	if (modalActive !== 2) return null

  return (
    <div>
      	<h3>Выбери программу</h3>
          <LoadingProcess loading={allProgramm}>
						{!!allProgramm && allProgramm.map(progObj => <p key={progObj.id}>
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
        
						<button onClick={() => { 
								toogle(false)
								addedToGroupAD({
								...choiceData,
								program_id, 
								program_name, 
								'methodInputnamePc': false
							})
							setModalActive(0)
						}}>Установить</button>
					</LoadingProcess>
	</div>
    )
}
