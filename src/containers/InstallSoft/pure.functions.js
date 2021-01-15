
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
	funcList.forEach((func, index) => {
		func(addedToList(datasetObj[listDataSet[index]], stateList[index]))
	})
}
