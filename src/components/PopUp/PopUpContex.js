import React, {useContext, useState, useEffect} from 'react'

const PopUpContext = React.createContext()

export const usePopUp = () => {
  return useContext(PopUpContext)
}



const RenderPopUpContex = ({ children }) => {
  const [modalActive, setModalActive] = useState(false)
  const toogle = (modalActive) => {
    console.log('RenderPopUp toogle работает')
    setModalActive(modalActive)}


    return <PopUpContext.Provider value={{
            visible: modalActive,
            toogle
            }}>
            
            { children }
               
        </PopUpContext.Provider>
}


export default RenderPopUpContex
