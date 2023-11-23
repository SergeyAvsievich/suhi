import { BoxProps } from './Box.props'
import styles from './Box.module.css'
import cn from 'classnames'

export const Box = ({ children, className}: BoxProps): JSX.Element => {
    return (
        <div className={cn(styles.box, className)}>
            {children}
        </div>
    )
}