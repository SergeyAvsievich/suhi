import { ReactNode } from "react";

export interface IDataSource {
    key: number | string,
    name: ReactNode,
    filial?: string,
    tt?: string,
    active?: 'Активно' | 'Не активен',
    export?: string,
    empty?: ReactNode
}