import React, {Component} from 'react'
import './History.css'
import {connect} from 'react-redux'
import {fetchHistoryList} from '../../store/actions/History'
import {renderTable} from '../../components/Table/Table'
import InputForm from '../../components/InputForm/InputForm'

class History extends Component {

    render() {
        return (
            <div className='History'>

                <InputForm 
                    type='date'
                    handleClickButton={textValue => this.props.fetchHistory(textValue)}
                />

                {
                    this.props.loading
                        ? <ul>{ renderTable(this.props.historyList) }</ul>
                        : null
                }

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
