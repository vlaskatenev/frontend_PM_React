import React from 'react'
import './ButtonInput.css'


const ButtonForInput = (props) => {

	return (
			<div className='button' onClick={props.handleClickButton}>
					<i className='material-icons' data-computername='toStart'>
							flip_camera_android</i>
			</div>
	)
}

export default ButtonForInput
