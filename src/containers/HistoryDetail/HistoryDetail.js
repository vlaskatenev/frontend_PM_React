import React, {useState} from 'react'
import './HistoryDetail.css'
import {Table} from '../../components/Table/Table'
import {LoadingProcess} from '../../components/LoadingProcess/LoadingProcess'
import { useEffect } from 'react'
import { historyDetailData } from './axiosFunction'



const HistoryDetail = (props) => {
    const [detailData, setDetailData] = useState(false)

    useEffect(() => {
        historyDetailData(props.id).then(data => {
            setDetailData(data)
        })
    }, [])
    
    return (
        <div className="HistoryDetail">
            <LoadingProcess loading={detailData}>
                <Table
                    nameTable={['date_time', 'computer_name', 'program_id_id', 'events_id', 'result_work']}
                    content={detailData}
                    keysObj={['date_time', 'computer_name', 'program_id_id', 'events_id','result_work']}
                    /> 
            </LoadingProcess>
        </div>
    )
}

export default HistoryDetail
