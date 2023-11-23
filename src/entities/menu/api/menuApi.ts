import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { IMenu, IMenuQuery } from '../models/menu.interface'

export const menuApi = createApi({
    reducerPath: 'menuApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://testjob.checkport.ru/'}),
    endpoints: (build) => ({
        getMenu: build.query<IMenu, IMenuQuery>({
            query: ({filialId, page = 1, name = '', filial = '', tt = '', active = ''}) => ({
                url: `filial/${filialId}/menu/`,
                params: {limit: 7, page, name, filial, tt, active}
            }) 
        })
    })
})

export const {useGetMenuQuery} = menuApi