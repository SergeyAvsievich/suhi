import { TableProps } from './Table.props'
import styles from './Table.module.css'
import { ReactNode } from 'react'

export const Table = ({columns, dataSource}: TableProps) => {
    const createTableHeader = () => {
        return columns.map(col => (
            <th>{col.title}</th>
        ))
    }

    const createRows = () => {
        return dataSource.map(row => {
            return <tr>
                {
                    Object.entries(row).map(([key, val]) => {
                        if (key !== 'key') {
                            return (
                                <td>{val as ReactNode}</td>
                            )
                        }
                    })
                }
            </tr>
        })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.table}>
                <table cellSpacing={0} cellPadding={0} >
                    <thead>
                        <tr>
                            { createTableHeader() }
                        </tr>
                    </thead>
                    <tbody>
                        {createRows()}
                    </tbody>
                </table>
            </div>
        </div>
    )
    
}