import React, {Component} from "react"

export class Processes extends Component {

    process = (data) => {
        return data.map((values, index) => {
            return (
            <tr key={index}>
                <td>{values.name}</td>
                <td>{values.processorTimeUsage}%</td>
                <td>{values.ramUsage}MB</td>
                <td>-</td>
                <td>-</td>
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
                        <th className="description">{this.props.average.averageCpu}%</th>
                        <th className="description">{this.props.average.averageRam}%</th>
                        <th className="description">{this.props.average.averageDisc}%</th>
                        <th className="description">{this.props.average.fullyNetworkSpeed}%</th>
                    </tr>

                    {this.process(this.props.data)}

                </table>
            </div>
        )
    }
}
