import React, {useState} from 'react'
import RenderPopUp from '../../components/PopUp/PopUp'
import './InstallSoft.css'

const InstallSoft = () => {

        const [modalActive, setModalActive] = useState(false)

        return (
            <div className="InstallSoft">
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
                <button onClick={() => {setModalActive(true)}}>Показать попап окно</button>

                <RenderPopUp active={modalActive} setActive={setModalActive} content={contentForPopUp}/>
            </div>
        )
    }

const contentForPopUp = () => {
    return (
        <div>
            <p>
                lorem23
            </p>
        </div>
    )
}

export default InstallSoft