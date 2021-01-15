import React, {useState} from 'react'
import './History.css'
import {Table} from '../../components/Table/Table'
import InputForm from '../../components/InputForm/InputForm'
import RenderPopUp from '../../components/PopUp/PopUp'
import {historyData} from './axiosFunction'
import HistoryDetail from '../HistoryDetail/HistoryDetail'
import { usePopUp } from '../../components/PopUp/PopUpContex'
import { LoadingProcess } from '../../components/LoadingProcess/LoadingProcess'


const History = () =>  {
	const [data, setData] = useState(false)
	const [id, setId] = useState(false)

    const { toogle }  = usePopUp()

    return (
            <div>
                <div className='History'>
                    <InputForm
                        type='date'
                        handleClickButton={textValue => historyData(setData, textValue)}
                    />
                    <LoadingProcess loading={data}>
                        <Table
                            nameTable={['Имя ПК', 'Статус', '', 'Дата']}
                            content={data}
                            keysObj={['computer_name', 'events_id', addTagToTable.bind(this, toogle, setId), 'date_time']} />
                    </LoadingProcess>
                </div>
                <RenderPopUp>
                    <HistoryDetail id={id} />
                </RenderPopUp>
            </div>
    )
}

export default History


const addTagToTable = (toogle, setId) => {
    return ({elem}) => <span onClick={() => {
        setId(elem.startnumber)
        toogle(true)
    }}
    >Посмотреть лог</span>
}

