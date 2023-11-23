import { ChangeEvent } from "react"
import { Select } from "../../../shared"
import styles from "./SelectActive.module.css"
import { SelectActiveProps } from "./SelectActive.props"

export const SelectActive = ({setSearchQuery}: SelectActiveProps) => {
    const options = [
        {id: '', name: 'Не выбран'},
        {id: 'active', name: 'Активно'}, 
        {id: 'no_active', name: 'Не активно'},
    ]

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSearchQuery(e.target.value  as 'active' | 'no_active' | '')
    }

    return (
        <Select 
            onChange={onChange}
            className={styles.select} 
            options={options}
        />
    )
}