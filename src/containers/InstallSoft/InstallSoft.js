import React, {Component} from 'react'
import './InstallSoft.css'

export default class InstallSoft extends Component {
    render() {
        return (
            <div className="InstallSoft">
                <div className="input"
                     contentEditable="true"
                     spellCheck="false"
                     data-set="input"
                >
                </div>
                <div className="button">
                    <i className="material-icons" data-set="toStart">
                        flip_camera_android</i>
                </div>
            </div>
        )
    }
}
