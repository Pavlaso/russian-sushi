import './sushi.scss'
export const Sushi = ({url, name, price, text, addFunc, OBJ, addCount}) => {
    return <div className="sushi"> 
        <img src={url} alt='sushi' className="sushi__image" />
        <div className="sushi__title">
            <span className="sushi__name">{name}</span>
            {/* <div className="sushi__num">{num} шт.</div> */}
        </div>
       
        <div className="sushi__description">
            <div className="sushi__description-text">{text}</div>
            {/* <div className="sushi__description-weight">{weight} г.</div> */}
        </div>

        <div className="sushi__bottom">
            <div className="sushi__bottom-price">{price} ₽</div>
            <button className="sushi__bottom-btn" onClick={() => addFunc(OBJ)}>Добавить {addCount}</button>
        </div>
    </div>
}