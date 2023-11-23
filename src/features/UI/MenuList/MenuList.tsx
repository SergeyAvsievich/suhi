import { NavLink } from "react-router-dom"
import styles from "./MenuList.module.css"
import cn from 'classnames'
import { MENU_LIST } from "../../constants/menu-list"

export const MenuList = () => {
    return (
        <ul className={styles['menu-list']}>
            {
                MENU_LIST.map(item => (
                    <li key={item.link}>
                        <NavLink 
                            to={item.link}
                            className={({isActive}) => cn(styles.link, {
                                [styles.active]: isActive
                            })}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    )
}