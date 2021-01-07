import React, {Component} from 'react'
import './History.css'
import {connect} from 'react-redux'
import {fetchHistoryList} from '../../store/actions/History'
import {Table} from '../../components/Table/Table'
import InputForm from '../../components/InputForm/InputForm'
import RenderPopUp from '../../components/PopUp/PopUp'
import {historyDetailData} from './axiosFunction'
import HistoryDetail from '../HistoryDetail/HistoryDetail'


class History extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalActive: false,
            historyDetailActive: false,
            data: []
                }
    }

    AddTagToTable() {
        return ({elem}) => <span onClick={() => historyDetailData(
                modalActive => this.setState({...this.state, modalActive}),
                data => this.setState({...this.state, data}), elem.startnumber
            )}>Посмотреть лог</span>
    }


    render() {
        return (
            <div>
                <div className='History'>
                    <InputForm
                        type='date'
                        handleClickButton={textValue => this.props.fetchHistory(textValue)}
                    />
                    {this.props.loading
                        && <Table 
                            nameTable={['Имя ПК', 'Статус', '', 'Дата']}
                            content={this.props.historyList}
                            keysObj={['computer_name', 'events_id', this.AddTagToTable.bind(this), 'date_time']} />}
                </div>
                <RenderPopUp active={this.state.modalActive}
                    setModalActive={() => this.setState({...this.state, modalActive: false})}>
                    <HistoryDetail HistoryDetail={this.state.modalActive} historyDetailList={this.state.data} />
                </RenderPopUp>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        loading: state.history.loading,
        historyList: state.history.historyList
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchHistory: textValue => dispatch(fetchHistoryList(textValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
