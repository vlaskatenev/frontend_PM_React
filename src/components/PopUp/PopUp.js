import React from "react";
import './PopUp.css'

const RenderPopUp = ({active, content, arrayWithFunctions, argumentsForFunctions}) => {
    return (
        <div className={active ? 'modal active' : 'modal' } onClick={() => changeState(arrayWithFunctions, argumentsForFunctions)}>
            <div className='modal__content' onClick={e => e.stopPropagation()}>
                {content}
            </div>
        </div>
    )
}

export default RenderPopUp

// Изменяем состояния приложения
// arrayWithFunctions - массив из функций, которые изменяют состояния
// argumentsForFunctions - аргументы для этих функций
const changeState = (arrayWithFunctions, argumentsForFunctions) => {
    console.log('arrayWithFunctions', arrayWithFunctions);
    console.log('argumentsForFunctions', argumentsForFunctions);
    arrayWithFunctions.forEach((func, index) => {
      func(argumentsForFunctions[index])
    })
}
