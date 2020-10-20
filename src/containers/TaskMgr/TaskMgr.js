import React, {Component} from 'react';
import './TaskMgr.css'
import Graph from "../../components/Graph/Graph";
import {initialState} from "../../components/Graph/initialState";
import {Processes} from "../../components/processes/processes";
import {dataFromPc} from "./axiosDataFromPC";


class TaskMgr extends Component {

    componentWillMount(){

        const data = dataFromPc()

        const state = {
            detailProcessData: [...data.detailProcessData],
            average: {...data.average},
            stateDataCpu: [],
            stateDataMemory: []
                }

        this.setState(state)
    }

    componentDidMount(){


        const _this = {...this}

        setInterval(() => {
            const stateDataCpu = _this.state.stateDataCpu
            const stateDataMemory = _this.state.stateDataMemory
            const newData = dataFromPc()
            stateDataCpu.push(newData.average.cpu)
            stateDataMemory.push(newData.average.memory)

            const newState = {
                detailProcessData: [...newData.detailProcessData],
                average: {...newData.average},
                stateDataCpu,
                stateDataMemory
            };

            this.setState(newState)

        }, 5000)
    }

    render() {
        return (
            <div className="page">
            <div className="iconGroup">
                <div className="icon">
                    <h3>CPU</h3>
                    <div>
                        <Graph
                            initialState={initialState('CPU', this.state.stateDataCpu)}
                        />
                    </div>
                </div>
                <div className="icon">
                    <h3>RAM</h3>
                    <div>
                        <Graph
                            initialState={initialState('RAM', this.state.stateDataMemory)}
                        />
                    </div>
                </div>
            </div>

                <Processes
                    average={this.state.average}
                    data={this.state.detailProcessData}
                />
            </div>
        );
    }
}

export default TaskMgr
