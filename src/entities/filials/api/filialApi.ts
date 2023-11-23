import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IFilial } from '../models/filial.interface'

export const filialApi = createApi({
    reducerPath: 'filialApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://testjob.checkport.ru/'}),
    endpoints: (build) => ({
        getFelials: build.query<IFilial[], string>({
            query: () => ({
                url: 'filial/'
            }) 
        })
    })
})

export const {useGetFelialsQuery} = filialApi