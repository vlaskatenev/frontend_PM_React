import React, {useState} from 'react'
import './History.css'
import {Table} from '../../components/Table/Table'
import InputForm from '../../components/InputForm/InputForm'
import RenderPopUp from '../../components/PopUp/PopUp'
import {historyDetailData, historyData} from './axiosFunction'
import HistoryDetail from '../HistoryDetail/HistoryDetail'

import { usePopUp } from '../../components/PopUp/PopUpContex'


const addTagToTable = (toogle, setDetailData) => {
    return ({elem}) => <span onClick={() => historyDetailData(
        toogle,
        setDetailData,
        elem.startnumber
    )}
    >Посмотреть лог</span>
}



const History = () =>  {
    const [loading, setLoading] = useState(false)
	const [data, setData] = useState([])
	const [detailData, setDetailData] = useState([])

    const { toogle }  = usePopUp()

    return (
            <div>
                <div className='History'>
                    <InputForm
                        type='date'
                        handleClickButton={textValue => historyData(setLoading, setData, textValue)}
                    />
                    {loading
                        && <Table
                        nameTable={['Имя ПК', 'Статус', '', 'Дата']}
                        content={data}
                        keysObj={['computer_name', 'events_id', addTagToTable.bind(this, toogle, setDetailData), 'date_time']} />}
                </div>
                <RenderPopUp>
                    <HistoryDetail historyDetailList={detailData} />
                </RenderPopUp>
            </div>
    )
}



export default History
