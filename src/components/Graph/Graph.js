import React, {Component} from "react";
import {Line} from "react-chartjs-2";

export default class Graph extends Component {

    render() {
        return (
            <Line
                data={this.props.initialState}
            />
        );
    }
}
