import React, {useContext, useState, useEffect} from 'react'
import './PopUp.css'
import { usePopUp } from './PopUpContex'


const RenderPopUp = (props) => {
    const { visible, toogle } = usePopUp()

    if (!visible) return null


    return  <div  className='modal' onClick={() => toogle(false)}>
                <div className='modal__content' onClick={e => e.stopPropagation()}>
                    { props.children }
                </div>
            </div>
}


export default RenderPopUp





