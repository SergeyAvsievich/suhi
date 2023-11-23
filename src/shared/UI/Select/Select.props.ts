import { SelectHTMLAttributes, DetailedHTMLProps } from 'react';

export interface SelectProps extends DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
    options: {id: string, name: string}[]
}