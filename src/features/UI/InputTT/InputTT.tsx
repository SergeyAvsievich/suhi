import { Input, useDebounce } from "../../../shared"
import styles from "./InputTT.module.css"
import { ChangeEvent, useState } from "react"
import { InputTTProps } from "./InputFilial.props"

export const InputTT = ({setSearchQuery}: InputTTProps) => {
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
            placeholder='Торговая точка' 
            className={styles.pl} 
            onChange={onChange}
            value={query}
        />
    )
}