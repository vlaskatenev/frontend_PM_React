import React, {Component} from 'react'
import './HistoryDetail.css'
import {fetchHistoryDetailList} from '../../store/actions/HistoryDetail'
import {connect} from 'react-redux'
import {Table} from '../../components/Table/Table'


class HistoryDetail extends Component {

    componentDidMount() {
        this.props.fetchHistoryDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div className="HistoryDetail">
                {this.props.loading
                    ? <Table
                        nameTable={['date_time', 'computer_name', 'program_id_id', 'events_id', 'result_work']}
                        content={this.props.historyDetailList}
                        keysObj={['date_time', 'computer_name', 'program_id_id', 'events_id','result_work']}
                        />
                    : <div><h3>Загрузка</h3></div>}
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
