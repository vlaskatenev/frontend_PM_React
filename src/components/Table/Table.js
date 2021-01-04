import React from 'react'
import './Table.css'



export const Table = props => {
    return (
        <div>
            <table className='Table'><tbody>
            {/* Формируем загловок таблицы: */}
            <tr>
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
