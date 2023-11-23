import { useGetFelialsQuery, IFilial} from "../../../entities"
import { Select } from "../../../shared"
import styles from "./Filials.module.css"

export const Filials = ({}) => {
    const {data, isLoading} = useGetFelialsQuery('')
    const options: IFilial[] = []
    if (!isLoading) {
        data && options.push(...data)
    }
    return (
       <div className={styles.wrapper}>
            <p className={styles.title}>Филиалы</p>
            <Select className={styles.filials} options={options} />
            <hr/>
       </div>
    )
}