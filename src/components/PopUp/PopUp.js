import React from 'react'
import './PopUp.css'

const RenderPopUp = props => {

    return (props.active[0]
        && <div  className='modal' onClick={() => props.active[1]()}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}


export default RenderPopUp


