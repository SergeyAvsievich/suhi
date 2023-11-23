import { InputProps } from './Input.props'
import styles from './Input.module.css'
import cn from 'classnames'

export const Input = ({ className, ...props }: InputProps) => {
    return (
        <input
            className={cn(styles.input, className)}
            {...props}
        />
    )
}