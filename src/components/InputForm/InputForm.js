import React, { useState } from 'react'
import './InputForm.css'
import ButtonForInput from '../ButtonInput/ButtonInput'


const InputForm = (props) => {
	const [value, setValue] = useState('')

	return (
		<div className='inputForm'>
			<div className='block__input'>
			<input
				type={props.type}
				className='input'
				data-setinput='input'
                />
			</div>
			<ButtonForInput handleClickButton={e => props.handleClickButton(readInput(e))}/>
		</div>
	)
}

export default InputForm

const readInput = e => e.currentTarget.parentNode.querySelector('[data-setinput="input"]').value.trim()

