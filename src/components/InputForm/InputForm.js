import React from 'react'
import './InputForm.css'
import ButtonForInput from '../ButtonInput/ButtonInput'


const InputForm = (props) => {

	return (
		<div className='inputForm'>
			<div className='block__input'>
			<input
				type={props.type}
				className='input'
				data-setinput='input'
                />
			</div>
			<ButtonForInput handleClickButton={props.handleClickButton}/>
		</div>
	)
}

export default InputForm
