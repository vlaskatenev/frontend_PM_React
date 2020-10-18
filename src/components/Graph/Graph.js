import React, {Component} from "react";
import {Line} from "react-chartjs-2";

export default class Graph extends Component {

    componentWillMount(){
        this.setState(this.props.initialState)
    }

    componentDidMount(){

        const _this = this

        setInterval(() => {
            const oldLabels = _this.state.labels
            const newLabels = oldLabels
            const oldDataSet = _this.state.datasets[0]
            const newData = [...oldDataSet.data]

            newLabels.push('')
            newData.push(Math.floor(Math.random() * 100))

            const newDataSet = {
                ...oldDataSet
            };

            newDataSet.data = newData

            const newState = {
                ...this.props.initialState,
                datasets: [newDataSet],
                labels: [...newLabels]
            };

            _this.setState(newState)
        }, 5000)
    }

    render() {
        console.log('Новое состояние: ', this.state.datasets[0].data)
        return (
            <Line
                data={this.state}
            />
        );
    }
}
