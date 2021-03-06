import React, {Component} from 'react'
import './TaskMgr.css'
import Graph from '../../components/Graph/Graph'
import {initialState} from '../../components/Graph/initialState'
import {Processes} from '../../components/processes/processes'
import {resultCelery} from './axiosDataFromPC'
import {followDataToClient} from '../../axios/axiosMethods'
import {scriptAvarageAllProcessData} from './variables'
import {LoadingProcess} from '../../components/LoadingProcess/LoadingProcess'


class TaskMgr extends Component {
    constructor(props) {
        super(props)
        this.state = {
            detailProcessData: [],
            averageCpu: null,
            averageRam: null,
            averageDisc: null,
            fullyNetworkSpeed: null,
            loading: true,
            stateDataCpu: [],
            stateDataMemory: []
                }
    }

    componentDidMount(){

        const _this = {...this}

        const followData = async () => {

            const taskId = followDataToClient({
                hostIp: '192.168.10.3',
                scriptName: scriptAvarageAllProcessData
            })

            const response = await resultCelery(taskId.data.task_id)

            const stateDataCpu = _this.state.stateDataCpu
            const stateDataMemory = _this.state.stateDataMemory
            stateDataCpu.push(response.averageCpu)
            stateDataMemory.push(response.averageRam)

            const newState = {
                ...response,
                stateDataCpu,
                stateDataMemory,
                loading: false
            }

            this.setState(newState)

            timerId = setTimeout(followData, 60000)
        }
        let timerId = setTimeout(followData, 500)
    }

    render() {
        return (
            <div>
                <LoadingProcess loading={this.props.loading}>
                    <div className='page'>
                        <div className='iconGroup'>
                            <div className='icon'>
                                <h3>CPU</h3>
                                <div>
                                    <Graph
                                        initialState={initialState('CPU', this.state.stateDataCpu)}
                                    />
                                </div>
                            </div>
                            <div className='icon'>
                                <h3>RAM</h3>
                                <div>
                                    <Graph
                                        initialState={initialState('RAM', this.state.stateDataMemory)}
                                    />
                                </div>
                            </div>
                        </div>

                        <Processes
                            average={this.state}
                            data={this.state.detailProcessData}
                        />
                    </div>
                </LoadingProcess>

            </div>
        )
    }
}

export default TaskMgr
