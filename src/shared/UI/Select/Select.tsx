import { SelectProps } from './Select.props'
import styles from './Select.module.css'
import cn from 'classnames'
import { useRef } from 'react'

export const Select = ({options, className, ...props}: SelectProps) => {
    const selectRef = useRef<HTMLSelectElement>(null)
    return (
        <label className={styles.wrapper}>
            <select ref={selectRef} className={cn(styles.select, className)} {...props}>
                {
                    options.map(({id, name}) => <option value={id}>{name}</option>)
                }
            </select>
            <div className={styles.arrow}>v</div>
        </label>
    )
}