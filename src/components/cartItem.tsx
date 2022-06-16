import React from "react"
import { useAppDispatch } from "../assets/hook"
import { minusItem, plusItem, removeCartItem } from "../redux/cart"

export const CartItem: React.FC<CartItemType> = React.memo( ({url, name, weight, num, totalCount, itemPrice, id}) => {
    
        const dispath = useAppDispatch()

        const plusItemFunc = (id: number) => dispath(plusItem(id))
        const minusItemFunc = (id: number) => dispath(minusItem(id))
        const removeCartItemFunc = (id: number) => dispath(removeCartItem(id))
        
        return (
            <div className="cart-item">
                <div className="cart-item__block-first">
                    <img src={url} alt="sushi" className="cart-item__image" />
                    <div className="cart-item__block">
                        <div className="cart-item__name">{name}</div>
                        <div className="cart-item__block-weight">{weight} гр.</div>
                        <div className="cart-item__block-number">{num} шт.</div>
                    </div>
                </div>
                <div className="cart-item__block-second">
                    <button className='cart-item__minus' onClick={() => minusItemFunc(id)}>-</button>
                    <div className="cart-item__count">{totalCount}</div>
                    <button className='cart-item__plus' onClick={() => plusItemFunc(id)}>+</button>
    
                    <div className="cart-item__price">{itemPrice} ₽</div>
    
                    <div className="cart-item__cross" onClick={() => removeCartItemFunc(id)}>+</div>
                </div>
            </div>
        )
    }
) 

type CartItemType =  {
    id: number
    url: string
    name: string
    num: number
    weight: number
    totalCount: number
    itemPrice: number
}
