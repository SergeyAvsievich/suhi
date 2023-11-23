import { Loader, Table } from '../../../shared'
import styles from './MenuTable.module.css'
import { useGetMenuQuery } from '../../../entities'
import { InputNameMenu, InputFilial, InputTT, SelectActive, Pagination} from '../../../features'
import {useState} from 'react'
import DeleteIcon from '../../assets/delete.svg?react'
import PencilIcon from '../../assets/pencil.svg?react'
import ChartIcon from '../../assets/chart.svg?react'
import { IDataSource } from '../../models/data-source.interface'

export const MenuTable = ({}) => {
    const [activePage, setActivePage] = useState<number>(1)
    const [nameMqnuQuery, setNameMenuQuery] = useState<string>('')
    const [filialQuery, setFilialQuery] = useState<string>('')
    const [ttQuery, setTTQuery] = useState<string>('')
    const [activeQuery, setActiveQuery] = useState<'active' | 'no_active' | ''>('')

    const {data, isLoading} = useGetMenuQuery({
      filialId: 1, 
      page: activePage,
      name: nameMqnuQuery,
      filial: filialQuery,
      tt: ttQuery,
      active: activeQuery
    })

    const dataSource: IDataSource[] = []

    if(isLoading) {
        return <div className={styles['loader-wrapper']}><Loader /></div>
    } else if(!data?.max_pages) {
      dataSource.push({
        key: 'error',
        name: (
          <h4 className={styles.error}>
            Упс... ничего не найдено
          </h4>
        )}
      )
    } else {
        data?.data.forEach(el => {
          const {id: key, name, filial, tt, active, export: ex} = el
            dataSource.push({
                key,
                name: <span>{name}</span>,
                filial: filial.name,
                tt: tt.name,
                active: active ? 'Активно' : 'Не активен',
                export: ex.join(', '),
                empty: (
                    <div className={styles['icons-wrapper']}>
                        <ChartIcon />
                        <PencilIcon />
                        <DeleteIcon />
                    </div>
                )
            })
        })
    }
      
    const columns = [
        {
          title: <InputNameMenu setSearchQuery={(val: string) => setNameMenuQuery(val)} />,
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: <InputFilial setSearchQuery={(val: string) => setFilialQuery(val)} />,
          dataIndex: 'filial',
          key: 'filial',
        },
        {
          title: <InputTT setSearchQuery={(val: string) => setTTQuery(val)} />,
          dataIndex: 'tt',
          key: 'tt',
        },
        {
          title: <SelectActive setSearchQuery={(val: 'active' | 'no_active' | '') => {setActiveQuery(val)}} />,
          dataIndex: 'active',
          key: 'active',
        },
        {
          title: <span>Экспорт</span>,
          dataIndex: 'export',
          key: 'export',
        },
        {
          title: '',
          dataIndex: 'empty',
          key: 'empty',
        },
    ]
    return (
        <div className={styles.wrapper}>
            <Table dataSource={dataSource} columns={columns} />
            <Pagination 
              countPage={data?.max_pages || 0} 
              activePage={activePage} 
              setActivePage={setActivePage} 
            />            
        </div>
    )
}