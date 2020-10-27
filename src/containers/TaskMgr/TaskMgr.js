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
            detailProcessData: [...data.data],
            average: {
                "averageCpu": data.averageCpu,
                "averageRam": data.averageRam,
                "averageDisc": data.averageDisc,
                "fullyNetworkSpeed": data.fullyNetworkSpeed,
            },
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
            stateDataCpu.push(newData.averageCpu)
            stateDataMemory.push(newData.averageRam)

            const newState = {
                detailProcessData: [...newData.data],
                average: {
                    "averageCpu": newData.averageCpu,
                    "averageRam": newData.averageRam,
                    "averageDisc": newData.averageDisc,
                    "fullyNetworkSpeed": newData.fullyNetworkSpeed,
                },
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
