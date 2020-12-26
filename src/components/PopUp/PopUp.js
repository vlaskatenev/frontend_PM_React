import React from "react";
import './PopUp.css'

const RenderPopUp = ({active, setActive, content}) => {
    return (
        <div className={active ? 'modal active' : 'modal' } onClick={() => setActive(false)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                {content()}
            </div>
        </div>
    )
}

export default RenderPopUp
