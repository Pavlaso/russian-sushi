import cn from 'classnames'
import { FC } from 'react'

export const Categories: FC<CategoriesType> = ({category, setFilter, categories}) => {

    const classN = (item: string) => cn('menu__item', {menu__list_active: categories === item })

    return (
    <nav className="menu">
        <ul className="menu__list">
        {
            category.map((item, index) => <li className={classN(item)} key={item + index} onClick={() => {setFilter(item)}}>
                {item}
            </li>)
        }
        </ul>
    </nav>
    )
}

type CategoriesType = { 
    category: string[]
    setFilter: (filter: string) => void
    categories: string
}