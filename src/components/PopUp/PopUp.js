import React from "react";
import './PopUp.css'

const RenderPopUp = (props) => {
    return (
        <div  className={props.active ? 'modal active' : 'modal' } onClick={() => changeState(props.arrayWithFunctions)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                {props.children}
            </div>
        </div>
    )
}

export default RenderPopUp


// Изменяем состояния приложения
// arrayWithFunctions - массив из функций, которые изменяют состояния
// argumentsForFunctions - аргументы для этих функций
const changeState = (arrayWithFunctions) => {
    arrayWithFunctions.forEach((func) => {
      func()
    })
}
