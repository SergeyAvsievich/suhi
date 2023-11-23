import { Box, Htag } from "../../../shared"
import styles from "./CompanyData.module.css"
import DocIcon from "./assets/doc.svg?react";

export const CompanyData = (
    {}): JSX.Element => {
    return (
       <Box className={styles.box}>
            <div className={styles['company-name']}>
                <div className={styles.logo}>
                    Ф
                </div>
                <div>
                    <Htag tag="h2">Название фирмы</Htag>
                    <span className={styles.name}>Лоскутникова В.П.</span>
                </div>
            </div>
            <hr/>
            <div className={styles['warehouse-accounting']} >
                <div>
                    <DocIcon/>
                </div>
                <div>
                    <Htag tag="h2">Складской учет</Htag>
                </div>
            </div>
       </Box>
    )
}