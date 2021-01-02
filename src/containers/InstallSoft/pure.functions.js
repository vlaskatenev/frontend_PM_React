import React from 'react'
import RenderPopUp from '../../components/PopUp/PopUp'


export const PopupInstallSoft = (props) => {
	return <RenderPopUp active={props.modalActive}
		arrayWithFunctions={props.objForClearState}>
			{props.children}
		  </RenderPopUp>
}


export const addedToList = (elemName, listElemName) => {
	const newList = [...listElemName]
	newList.indexOf( elemName ) === -1 
			? newList.push(elemName) 
			: newList.splice(newList.indexOf(elemName), 1)
	return newList
}


// изменяем сразу несколько состояний в одной функции
// при написании JSX кода data атрибуты должны быть выставлены в соотвествии с нахождением 
// в массивах функций и переменных distinguishedName, computer_name
export const changeStateForCompName = (datasetObj, stateList, funcList) => {
	const listDataSet = Object.keys(datasetObj)
	funcList.map((func, index) => {
		func(addedToList(datasetObj[listDataSet[index]], stateList[index]))
	})
}


export const readInputCompName = e => e.currentTarget.parentNode.querySelector('[data-setinput="input"]').value.trim()
