import React from 'react'
import './Table.css'
import { usePopUp } from '../PopUp/PopUpContex'


/* <Table 
    nameTable={['Имя ПК', 'Статус', '', 'Дата']}
    content={this.props.historyList}
    keysObj={['computer_name', 'events_id', this.AddTagToTable.bind(this), 'date_time']} /> */
export const Table = props => {
    const { toogle } = usePopUp()

    return (
        <div>
            <table className='Table'>
                <tbody>
                    <TableName nameTable={props.nameTable}/>
                    <ContentTable content={props.content} keysObj={props.keysObj} toogle={toogle}/>
                </tbody>
            </table>
        </div>
    )
}


const TableName = ({nameTable}) => {
    return <tr>{nameTable.map((name, index) => <th key={index}>{name}</th>)}</tr>
}


const ContentTable = ({content, keysObj, toogle}) => {
    console.log('content', content);
    return content.map((el, i) => {
        return <tr key={i}>
        <RowTable keysObj={keysObj} elem={el} toogle={toogle} />
        </tr>
    })
}


const RowTable = ({keysObj, elem, toogle}) => {
    return keysObj.map((keys, i) => {
        if (typeof(keys) === 'function') {
             console.log(keys)
             const Component = keys()
             return <td key={i}><Component elem={elem} /></td>
        } else if (typeof(keys) !== 'string') {
             const Component = keys
             return <td key={i}><Component elem={elem} /></td>
        }
        return <td key={i}>{ elem[keys] }</td>
})
}


// const AddTagToTable = (toogle) => {

//     console.log('toogle into AddTagToTable', toogle)

//     return () => <span onClick={() => toogle(true)}>Посмотреть лог</span>
// }