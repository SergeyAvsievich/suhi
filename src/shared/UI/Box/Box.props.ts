import { HTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface BoxProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    children: ReactNode,
}