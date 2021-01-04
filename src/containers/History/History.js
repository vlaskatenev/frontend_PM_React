import React, {Component} from 'react'
import './History.css'
import {connect} from 'react-redux'
import {fetchHistoryList} from '../../store/actions/History'
import {Table} from '../../components/Table/Table'
import InputForm from '../../components/InputForm/InputForm'

class History extends Component {

    render() {
        return (
            <div className='History'>

                <InputForm 
                    type='date'
                    handleClickButton={textValue => this.props.fetchHistory(textValue)}
                />
                {this.props.loading
                        ? <Table 
                            nameTable={['Имя ПК', 'Статус', '', 'Дата']}
                            content={this.props.historyList}
                            keysObj={['computer_name', 'events_id', addTag, 'date_time']} />
                        : null}
            </div>
        )
    }
}


const addTag = elem => {
    return <a href={'history/' + elem.startnumber}>Посмотреть лог</a>
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
