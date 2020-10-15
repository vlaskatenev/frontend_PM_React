import React, {Component} from "react";
import './History.css'
import {connect} from "react-redux";
import {fetchHistoryList} from "../../store/actions/History"
import {renderTable} from "../../components/Table/Table";

class History extends Component {

    render() {
        return (
            <div className="History">
                <input
                    type="date"
                    className="input"
                    data-set="input"
                />
                <div
                    className="History__button"
                    onClick={this.props.fetchHistory}
                >
                    <i className="material-icons" data-set="toStart">
                        flip_camera_android</i>
                </div>

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
        fetchHistory: () => dispatch(fetchHistoryList())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(History)
