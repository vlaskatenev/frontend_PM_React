import React, {Component} from "react";
import './HistoryDetail.css'
import {fetchHistoryDetailList} from "../../store/actions/HistoryDetail"
import {connect} from "react-redux";
import {toInstallStatus} from "./historyDetail.pure.function";



class HistoryDetail extends Component {

    renderDetail() {
        const dataArray = this.props.historyDetailList
        const compName = dataArray[0].computername
        const logArray = dataArray[1].events_array
        const dateStart = dataArray[0].date_start
        const installTime = dataArray[0].install_time
        const installStatus = dataArray[0].status
        const progNameObject = dataArray[2].prog_name_dict

        // const log = logArray.map(toLog)
        // log.unshift(toInstallStatus(progNameObject, installStatus))
        // log.unshift(`<p class="nameLogBlock">История установки</p>
        //                   <p>Время установки: ${installTime}</p>
        //                   <p>Старт установки: ${dateStart}</p>
        //                   <p>Имя компьютера: ${compName}</p>
        //                 `)
        // return log.join('')


        const log = logArray.map((data, index) => {
            return (
                <p key={index}>{data}</p>
            )
        })

        log.unshift(toInstallStatus(progNameObject, installStatus))

        log.unshift((
            <div key={log.length + 1}>
            <p className="nameLogBlock">История установки</p>
                          <p>Время установки: {installTime}</p>
                          <p>Старт установки: {dateStart}</p>
                          <p>Имя компьютера: {compName}</p>
            </div>
                        ))
        return log
    }

    componentDidMount() {
        this.props.fetchHistoryDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div className="HistoryDetail">
                    {
                        this.props.loading
                            ? this.renderDetail()
                            : <div><h3>Загрузка</h3></div>
                    }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        loading: state.historyDetail.loading,
        historyDetailList: state.historyDetail.historyDetailList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHistoryDetail: id => dispatch(fetchHistoryDetailList(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryDetail)
