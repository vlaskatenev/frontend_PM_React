import React, {Component} from 'react';
import './TaskMgr.css'
import Graph from "../../components/Graph/Graph";
import {initialState} from "../../components/Graph/initialState";


class TaskMgr extends Component {

    render() {
        return (
            <div style={{
                height: "250px",
                width: "400px"
            }}>
                <h2>Random Animated Line Example</h2>
                <Graph
                    initialState={initialState('CPU')}
                />
            </div>
        );
    }
}


export default TaskMgr
