import { LayoutProps } from './Layout.props'
import styles from './Layout.module.css'
import { FunctionComponent } from 'react'
import cn from 'classnames'
import { Sidebar } from '../../widgets/UI/Sidebar/Sidebar'

const Layout = ({ children}: LayoutProps): JSX.Element => {    
    return (

        <div className={styles.wrapper}>
            <Sidebar />
            <div className={cn(styles.body)}>
                {children}
            </div>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayouteCoponent(props: T): JSX.Element {
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        )
    }
}