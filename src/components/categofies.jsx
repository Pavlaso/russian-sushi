import cn from 'classnames'

export const Categories = ({category, setFilter, categories}) => {
    return (
    <nav className="menu">
        <ul className="menu__list">
        {
            category.map((item, index) => <li className={cn('menu__item', {menu__list_active: categories === item })} key={index}
            onClick={() => { setFilter(item) }} >{item}</li>)
        }
        </ul>
    </nav>
    )
}