import React, {Component} from "react";
import {connect} from "react-redux";
import './Layout.scss'
import {NavLink} from "react-router-dom";

class Layout extends Component {

    render() {
        return (
            <>
            <div className="Layout">
                <nav>
                    <div className="menu">
                        <div><NavLink  to="/">Главная</NavLink ></div>
                        <div><NavLink  to="/history">Просмотр логов</NavLink ></div>
                    </div>
                </nav>
            </div>
        <main>
            {this.props.children}
        </main>
        </>
        )
    }
}

export default Layout
