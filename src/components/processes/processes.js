import React, {Component} from "react"
// import {dataFromPc} from "../../containers/TaskMgr/axiosDataFromPC";

export class Processes extends Component {

    process = (data) => {
        return data.map((values, index) => {
            return (
            <tr key={index}>
                <td>{values.processName}</td>
                <td>{values.cpu}%</td>
                <td>{values.memory}MB</td>
                <td>{values.disk}MB/sec</td>
                <td>{values.network}MB/sec</td>
            </tr>
            )
        })
    }

    render() {
        return (
            <div className="process">
                <table>
                    <tr>
                        <th className="caption">Name</th>
                        <th className="caption">CPU</th>
                        <th className="caption">Memory</th>
                        <th className="caption">Disk</th>
                        <th className="caption">Network</th>
                    </tr>
                    <tr className="descriptionPercent">
                        <th className="description"></th>
                        <th className="description">{this.props.average.cpu}%</th>
                        <th className="description">{this.props.average.memory}%</th>
                        <th className="description">{this.props.average.disk}%</th>
                        <th className="description">{this.props.average.network}%</th>
                    </tr>

                    {this.process(this.props.data)}

                </table>
            </div>
        )
    }
}
