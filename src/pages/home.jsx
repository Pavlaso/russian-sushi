import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getSushi } from '../redux/sushi'
import { setCategories, setFilters } from '../redux/filters'
import { Sushi, Filters, Categories } from '../components'
import { addItem } from '../redux/cart'

export const Home = () => {
    const filt = [
    {name:'По умолчанию',     type: 'id'     }, {name: 'По популярности', type: 'popular'}, 
    {name: 'Сначала дешевле', type: 'price'  }, {name: 'Сначала дороже',  type: 'price&_order=desc'}]

    const category = ['Все', 'Суши', 'Ролы', 'Сеты', 'Напитки']
    
    const dispath    = useDispatch()
    const setFilter  = type => dispath(setCategories(type))
    const setFitFunc = type => dispath(setFilters(type))
    const addFunc = item => dispath(addItem(item))

    const { filters, categories } = useSelector(( { filter } ) => filter)
    const { sushiArr, isLoaded  } = useSelector(( { sushi  } ) => sushi )
    const { cartItems } = useSelector(( { cart  } ) => cart )

    useEffect(() => dispath(getSushi(categories, filters)), [categories, filters, dispath]) 

    return <div className="home">
        <div className="container">

           

            <Categories category={category} setFilter={setFilter} categories={categories} />

            <div className="title" >
                <h1 className="title__title">{categories}</h1>
                <Filters filters={filt} filter={filters} setFitFunc={setFitFunc} />
            </div>

            <div className="sushi-container">
               {isLoaded &&
                   sushiArr.map((obj) => <Sushi {...obj} key={obj.id} OBJ={obj} addFunc={addFunc} addCount={(cartItems[obj.id] && cartItems[obj.id].cartItems.length )|| ''}/>)
               }
            </div>
            
        </div>
    </div>
  }