import React, {Component} from 'react'
import './HistoryDetail.css'
import {Table} from '../../components/Table/Table'
import {LoadingProcess} from '../../components/LoadingProcess/LoadingProcess'



const HistoryDetail = (props) => {
    
    return (
        <div className="HistoryDetail">
            <LoadingProcess loading={props.historyDetailList}>
                <Table
                    nameTable={['date_time', 'computer_name', 'program_id_id', 'events_id', 'result_work']}
                    content={props.historyDetailList}
                    keysObj={['date_time', 'computer_name', 'program_id_id', 'events_id','result_work']}
                    />
            </LoadingProcess>
        </div>
    )
}

export default HistoryDetail
