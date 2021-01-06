import React from 'react'
import './InputForm.css'


const InputForm = props => {
	const refInputForm = React.createRef()

	return (<div className='inputForm'>
			<form onSubmit={event => {event.preventDefault()
				return props.handleClickButton(refInputForm.current.value.trim())}}>
				<div className='block__input'>
					<Input {...props} ref={refInputForm} />
				</div>
				{button}
			</form>
		</div>)
}

export default InputForm

const Input = React.forwardRef((props, ref) => {
	return <input
		type={props.type}
		className='input'
		ref={ref}
	/>

})

const button = <div><button type="submit" className='button'>
						<i className='material-icons'>
								flip_camera_android</i>
					</button></div>