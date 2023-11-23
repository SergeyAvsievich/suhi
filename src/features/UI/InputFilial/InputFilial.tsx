import { Input, useDebounce } from "../../../shared"
import styles from "./InputFilial.module.css"
import { ChangeEvent, useState } from "react"
import { InputFilialProps } from "./InputFilial.props"

export const InputFilial = ({setSearchQuery}: InputFilialProps) => {
    const [query, setQuery] = useState<string>('')

    const makeRequest = useDebounce(() => {
        setSearchQuery(query)
      }, 500)
  
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value
        makeRequest(val)
        setQuery(val)
    }

    return (
        <Input 
            placeholder='Филиал' 
            className={styles.pl} 
            value={query}
            onChange={onChange}
        />
    )
}