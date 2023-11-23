import { CompanyData, Filials, MenuList } from '../../../features'
import styles from './Sidebar.module.css'

export const Sidebar = ({}) => {
    return (
        <div className={styles.sidebar}>
            <CompanyData />
            <Filials />
            <MenuList />
        </div>
    )
}