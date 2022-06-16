import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useAppSelector } from '../assets/hook'
import arrow from '../assets/images/arrow.png'
import cart from '../assets/images/cart.png'

export const Header: FC = React.memo(() => {
    
    const {totalPrice} = useAppSelector(({cart}) => cart)

    return  <div className="header">
    <div className="header__container">
        <div className="header__logo">
            <Link to='/'>
                <img className="header__logo-img" src="https://pngimg.com/uploads/sushi/sushi_PNG98865.png" alt="logo"/>
            </Link>
                <div className="header__logo-container">
                    <h2 className="header__logo-title">Russian Sushi</h2>
                    <span className="header__logo-text">Самые вкусные суши в России</span>
                </div>
            
        </div>

        <div className="header__number">
            <div className="header__number-phone">8 800 000-00-00</div>
            <div className="header__number-text">Звонок бесплатный</div>
        </div>

        <button className="header__plase">
            <img className="header__plase-img" src={arrow} alt="arrow"/>
            <span className="header__plase-text">Москва</span>
        </button>
    </div>

    <div className="header__container">
        <Link to='/cart'>
            <button className="header__cart" >
                <div className="header__cart-money">{totalPrice} ₽</div>
                <img className="header__cart-img" src={cart} alt="cart" />
            </button>
        </Link>
        {
            //<button className="header__signin">Войдти</button>
        }

    </div>
</div>
})