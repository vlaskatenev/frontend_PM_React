import React from 'react'
import RenderPopUp from '../../components/PopUp/PopUp'


export const createPopupWindow = (modalActive, setModalActive, funcContentCreate, argumentsForContent, objForClearState) => {
	return <RenderPopUp active={modalActive} 
		content={funcContentCreate(...argumentsForContent)}
		arrayWithFunctions={[setModalActive, ...objForClearState]}
		argumentsForFunctions={[0, ...(new Array(objForClearState.length)).fill([])]} />
}


export const addedToList = (elemName, listElemName) => {
	listElemName.indexOf( elemName ) === -1 
			? listElemName.push(elemName) 
            : listElemName.splice(listElemName.indexOf(elemName), 1)
}