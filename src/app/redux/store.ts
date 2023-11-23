import {configureStore} from '@reduxjs/toolkit'
import { menuApi, filialApi } from '../../entities'

export const store = configureStore({
    reducer: {
        [filialApi.reducerPath]: filialApi.reducer,
        [menuApi.reducerPath]: menuApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
            .concat(
                filialApi.middleware,
                menuApi.middleware,
            ) 
    }
})