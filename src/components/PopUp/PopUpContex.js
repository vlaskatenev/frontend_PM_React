import React, { useContext, useState } from 'react'

const PopUpContext = React.createContext()

export const usePopUp = () => {
  return useContext(PopUpContext)
}


const RenderPopUpContex = ({ children }) => {
  const [modalActive, setModalActive] = useState(false)
  const toogle = (modalActive) => setModalActive(modalActive)


    return <PopUpContext.Provider value={{
            visible: modalActive,
            toogle
            }}>
            
            { children }
               
        </PopUpContext.Provider>
}


export default RenderPopUpContex
