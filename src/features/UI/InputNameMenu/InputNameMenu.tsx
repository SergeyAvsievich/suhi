import { Input, useDebounce } from "../../../shared"
import { ChangeEvent, useState } from "react"
import { InputNameMenuProps } from "./InputNameMenu.props"

export const InputNameMenu = ({setSearchQuery}: InputNameMenuProps) => {
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
            placeholder='Название меню'
            value={query}
            onChange={onChange} 
        />
    )
}