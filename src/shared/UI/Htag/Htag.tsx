import { HtagProps } from './Htag.props'
import styles from './Htag.module.css'
import cn from 'classnames'

export const Htag = ({  tag = 'h1', children, className}: HtagProps) => {
    switch(tag) {
        case 'h1':
            return <h1 className={cn(styles.h1, className)}>{children}</h1>
        case 'h2':
            return <h2 className={cn(styles.h2, className)}>{children}</h2>
        default: 
            return <></>
    }
}