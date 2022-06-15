import cn from 'classnames'

export const Categories = ({category, setFilter, categories}) => {
    const classN = (item) => cn('menu__item', {menu__list_active: categories === item })
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