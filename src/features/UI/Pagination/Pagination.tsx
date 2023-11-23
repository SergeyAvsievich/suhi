import styles from "./Pagination.module.css"
import { PaginationProps } from "./Pagination.props"
import LeftArrowIcon from '../../assets/arrow-left.svg?react'
import RightArrowIcon from '../../assets/arrow-right.svg?react'
import cn from 'classnames'

export const Pagination = ({countPage, activePage, setActivePage}: PaginationProps): JSX.Element => {
    const onNextPage = () => {
        if (activePage + 1 <= countPage ) {
            setActivePage(activePage + 1)
        }
    }

    const onPrevPage = () => {
        if (activePage - 1 > 0) {
            setActivePage(activePage - 1)
        }
    }

    const onChangePage = (numberPage: number) => {
        setActivePage(numberPage)
    }

    const createPagination = (): JSX.Element => {
        if (countPage > 1) {
            return (
                <>
                    <LeftArrowIcon onClick={onPrevPage} />
                    {
                        [...Array(countPage)].map((_, index) => (
                            <div 
                                className={cn(styles['number-page'], {
                                    [styles.active]: index + 1 === activePage
                                })}
                                onClick={() => onChangePage(index + 1)}
                            >{index + 1}</div>
                        ))
                    }
                    <RightArrowIcon onClick={onNextPage} />
                </>
            )
        }

        return <></>
    }
    
    return (
        <div className={styles.pagination}>
            {createPagination()}
        </div>
    )
}