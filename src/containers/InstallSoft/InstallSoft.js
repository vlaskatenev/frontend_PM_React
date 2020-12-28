import React, {useState} from 'react'
import RenderPopUp from '../../components/PopUp/PopUp'
import './InstallSoft.css'
import {axiosPost} from "../../axios/axiosMethods"


const InstallSoft = () => {

const [modalActive, setModalActive] = useState(false)
const [objFromAD, setobjFromAD] = useState(false)
const [compList, setCompList] = useState([])


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

						{ modalActive 
							? <RenderPopUp active={modalActive} 
															setActive={setModalActive} 
															content={contentForPopUp(objFromAD, addedCompToList)}
															setCompList={setCompList}/> 
							: '' }
				</div>
		)
}
		
export default InstallSoft

const addedCompToList = compName => {
		compList.indexOf( compName ) === -1 
			? compList.push(compName) 
			: compList.splice(compList.indexOf(compName), 1)
		console.log(compList);
}


const listNamePc = async (setModalActive, setobjFromAD) => {  
    const data = await axiosPost('/list-computers', {ad_tree: "OU=comps,DC=npr,DC=nornick,DC=ru"})
    console.log(data.data.data.computerName[0])
    setobjFromAD(data.data.data)
    setModalActive(true)
}


const handleChange = (e) => {
    console.log(e.target.checked);
}
    

const contentForPopUp = (compList, addedCompToList) => {
    {console.log('Здесь проблема ', compList);}
    return (
        <div>
            <h3>Выбери ПК</h3>
                   <div>
                    {  compList.computerName.map((compName, index) => <p key={index}>
                        <input onClick={(e) => addedCompToList(e.target.dataset.set)} 
                        type="checkbox" 
                        data-set={compList.DistinguishedName[index]} />{compName}</p>
                    )
                       
                }   
                </div>
                    <button onClick={handleChange}>К выбору софта</button>
        </div>
    )
}
