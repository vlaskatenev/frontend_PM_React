import React from 'react'

export const LoadingProcess = props => {
    return (props.loading
                ? props.children
                : <div><h3>Загрузка</h3></div>)
}