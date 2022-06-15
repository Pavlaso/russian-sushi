import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CartItem  from '../components/cartItem'
import { useDispatch } from 'react-redux'
import { clearCart } from '../redux/cart'

export const Cart = () => {
    const dispath = useDispatch()
    const {cartItems, totalCount, totalPrice} = useSelector(({cart}) => cart)
    const addItemToCart =  Object.keys(cartItems).map(key => cartItems[key].cartItems[0])
    //const weightSum =  addItemToCart[0] && addItemToCart.reduce((prevItem, item) => prevItem.weight * cartItems[prevItem.id].cartItems.length + item.weight * cartItems[item.id].cartItems.length)
    const deleteCart = () => window.confirm("Вы точно хотите очистьить корзину?") && dispath(clearCart())
    const setOrder = () => alert('Ваш заказ: ' + addItemToCart.map((obj) => '\n' + obj.name + "(" + cartItems[obj.id].cartItems.length + ' шт.' + ")"))
    return (
        <div>
            {!totalCount
            ?   <div className="empty-cart">
                    <h1 className="empty-cart__title">Корзина пуста</h1>
                    <p className="empty-cart__text">Что бы добавить товары вернитесь назад</p>
                    <img className="empty-cart__img" src="data:image/png;base64,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" alt="empty cart"/>
                    <Link to='/'> <button className="empty-cart__btn"> Вернуться назад </button> </Link>
                </div>

            :   <div className="cart">
                    <div className="cart__header">
                        <h2 className="cart__header-title">Корзина</h2>
                        <div className="cart__header-container" onClick={() => deleteCart()}>
                            <svg className="cart__header-cart" width="30" height="30" viewBox="0 0 20 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.5 5H4.16667H17.5" stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round"
                                    strokeLinejoin="round"/>
                                <path
                                    d="M6.66663 5.00001V3.33334C6.66663 2.89131 6.84222 2.46739 7.15478 2.15483C7.46734 1.84227 7.89127 1.66667 8.33329 1.66667H11.6666C12.1087 1.66667 12.5326 1.84227 12.8451 2.15483C13.1577 2.46739 13.3333 2.89131 13.3333 3.33334V5.00001M15.8333 5.00001V16.6667C15.8333 17.1087 15.6577 17.5326 15.3451 17.8452C15.0326 18.1577 14.6087 18.3333 14.1666 18.3333H5.83329C5.39127 18.3333 4.96734 18.1577 4.65478 17.8452C4.34222 17.5326 4.16663 17.1087 4.16663 16.6667V5.00001H15.8333Z"
                                    stroke="#B6B6B6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M8.33337 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11.6666 9.16667V14.1667" stroke="#B6B6B6" strokeWidth="1.2"
                                    strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                            <span className="cart__header-text" >Oчистить корзину</span> 
                        </div>
                    </div>
                    {
                        addItemToCart.map((obj, index) => <CartItem itemPrice={cartItems[obj.id].totalPrice} {...obj} 
                                                                    totalCount={cartItems[obj.id].cartItems.length} key={index}/>  )
                    }
                    
                    <div className="cart-bottom">
                        {/* <div className="cart_bottom__first-block">
                            <div className="cart_bottom__weight">{weightSum}</div>
                        </div> */}
                        
                        <div className="cart-bottom__sum">
                            Сумма заказа: <span className="cart-bottom__sum-text"> {totalPrice} ₽ </span>
                        </div>
                        <div className="cart-bottom__second-block">
                            <Link to="/"><button className="cart-bottom__go-back"> Вернуться в меню</button></Link>
                            <button className="cart-bottom__pay" onClick={setOrder}>Оформить заказ</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

//b6b6b6