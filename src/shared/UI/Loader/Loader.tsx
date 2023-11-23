import { LoaderProps } from './Loader.props'
import styles from './Loader.module.css'
import cn from 'classnames'

export const Loader = ({ className }: LoaderProps): JSX.Element => (
    <div data-testid={'loader'} className={cn(styles.loader, className)}>
        <div></div><div></div><div></div><div></div>
    </div>
)