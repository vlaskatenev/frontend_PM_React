import React from "react";
import './PopUp.css'

const RenderPopUp = ({active, setActive, content, setCompList}) => {
    return (
        <div className={active ? 'modal active' : 'modal' } onClick={() => changeState(setActive, setCompList)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                {content}
            </div>
        </div>
    )
}

export default RenderPopUp


const changeState = (setActive, setCompList) => {
    setActive(false)
    setCompList([])
}
