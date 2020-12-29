import React, {useState} from 'react'
import RenderPopUp from '../../components/PopUp/PopUp'
import './InstallSoft.css'
import {axiosPost, axiosGet} from "../../axios/axiosMethods"


const InstallSoft = () => {

	const [modalActive, setModalActive] = useState(0)
	const [objFromAD, setobjFromAD] = useState(false)
	const [compList, setCompList] = useState([])
	const [programmList, setProgrammList] = useState([])

	return (
		<div className="InstallSoft">
			<div><p>Введи имя ПК если нужна установка на один компьютер:</p></div>
			<div className="inputForm">
			<div className="input"
						contentEditable="true"
						spellCheck="false"
						data-set="input"
			>
			</div>
			<div className="button">
					<i className="material-icons" data-set="toStart">
							flip_camera_android</i>
			</div>
			</div>
			<div>
				<button onClick={() => {listNamePc(setModalActive, setobjFromAD)}}>Выбрать ПК</button>
			</div>
			<div className="popUpWindow">
				<div className="popUpMainWindow">
			{ (modalActive === 1)
				? <RenderPopUp active={modalActive} 
							   content={contentForPopUp(objFromAD, compList, setModalActive, setProgrammList)}
							   arrayWithFunctions={[setModalActive, setCompList, setProgrammList]}
							   argumentsForFunctions={[0, [], []]}
							/> :
				 (modalActive === 2) ? <div className="popUpChoiseProgramm"> <RenderPopUp active={modalActive} 
				content={contentForChoiceProgramm(programmList, setModalActive, setProgrammList)}	
				arrayWithFunctions={[setModalActive, setCompList, setProgrammList]}
				argumentsForFunctions={[0, [], []]} /> </div>  : null
				}
				</div>
		</div>
		</div>
	)
}
		
export default InstallSoft

const addedCompToList = (compName, compList) => {
		compList.indexOf( compName ) === -1 
			? compList.push(compName) 
			: compList.splice(compList.indexOf(compName), 1)
}


const listNamePc = async (setModalActive, setobjFromAD) => {  
    const data = await axiosPost('/list-computers', {ad_tree: "OU=comps,DC=npr,DC=nornick,DC=ru"})
    setobjFromAD(data.data.data)
    setModalActive(1)
}


const listProgramm = async (setModalActive, setProgrammList) => {  
    const data = await axiosGet('/show-programm-list')
    setProgrammList(data.data.data)
    setModalActive(2)
}

    

const contentForPopUp = (objFromAD, compList, setModalActive, setProgrammList) => {
    return (
        <div>
            <h3>Выбери ПК</h3>
		   <div>
				{  objFromAD.computerName.map((compName, index) => <p key={index}>
					<input onClick={(e) => addedCompToList(e.target.dataset.set, compList)} 
					type="checkbox" 
					data-set={objFromAD.DistinguishedName[index]} />{compName}</p>
				)
			       
			}   
			</div>
			<button onClick={() => listProgramm(setModalActive, setProgrammList)}>К выбору софта</button>
        </div>
    )
}


const contentForChoiceProgramm = (programmList, setModalActive, setProgrammList) => {
	console.log(programmList);
    return (
        <div>
            <h3>Выбери программу</h3>
		   <div>
				{  programmList[1].map((progName, index) => <p key={index}>
					<input 
					type="checkbox" 
					 />{programmList[0][progName]}</p>
				)
			       
			}   
			</div>
			<button onClick={() => listProgramm(setModalActive, setProgrammList)}>Установить</button>
        </div>
    )
}


// {
//     "data": [
//         {
//             "1": "Google Chrome",
//             "2": "Google Earth Pro",
//             "3": "Notepad",
//             "4": "PDF24 Creator 9.0.0",
//             "5": "Acrobat Reader DC",
//             "6": "Microsoft Visual C++ 2010  x86 Redistributable - 10.0.40219",
//             "8": "Google Chrome",
//             "9": "Google Chrome"
//         },
//         [
//             1,
//             2,
//             3,
//             4,
//             5,
//             6,
//             8,
//             9
//         ]
//     ]
// }
