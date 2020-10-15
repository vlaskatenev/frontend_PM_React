import React from "react";
import {caption} from "./variables";
import './Table.css'

export function renderTable(list) {
    const historyList = list.map((data, index) => {
        return (
            <React.Fragment key={index}>
                {createTable(data)}
            </React.Fragment>
        )
    })
    historyList.unshift(caption())
    return (<table className={'Table'}><tbody>
                { historyList }
            </tbody></table>)
}

function createTable(data) {
    return (
        <tr>
            <td>{data.computerName}</td>
            <td>{data.status}</td>
            <td><a href={'history/' + data.id}>Посмотреть лог</a></td>
            <td>{data.date}</td>
        </tr>
    )
}
