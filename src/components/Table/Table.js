import React from "react";
import {caption} from "./variables";
import './Table.css'



export const Table = props => {
    return (
        <div>
            <table className='Table'><tbody>
            {/* Формируем загловок таблицы: */}
            <tr key={56}>
                {props.nameTable.map(name => <th>{name}</th>)}
            </tr>

            {/* Формируем строки таблицы */}
            {props.content.map(el => {
                return <tr>
                {props.keysObj.map(keys => {
                
                return <td>{ typeof(keys) === 'string' ? el[keys] : keys(el) }</td>
            })}
                </tr>
            })}        
            </tbody></table>
        </div>
    )
}


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

            <td>{data.computer_name}</td>
            <td>{data.events_id}</td>
            <td><a href={'history/' + data.startnumber}>Посмотреть лог</a></td>
            <td>{data.date_time}</td>
        </tr>
    )
}
