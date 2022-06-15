import { useEffect, useRef, useState } from "react"
import cn from "classnames"


export const Filters = ({filters, filter, setFitFunc}) => {

    const sortRef = useRef()
    const [visiblePopup, setVisiblePopup] = useState(false)

    const handleOutsideClick = (event) => {
        let path = event.path || (event.composedPath && event.composedPath())
        !path.includes(sortRef.current) && setVisiblePopup(false)
    }

    const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup)

    const classN = (item) => cn('open-filter-item', {open_actve: filter === item.type})


    useEffect(() => {document.body.addEventListener('click', handleOutsideClick)}, [] )

    return (
            <div className="title__filters" ref={sortRef}>
                <button className="title__filters-btn" onClick={toggleVisiblePopup}>Фильтры</button>
                {visiblePopup &&
                    <div className='open-filter'>
                    {//что-то с classnamss
                        filters.map((item, index)=> <div className={classN(item)} key={item + index} onClick={() => setFitFunc(item.type)}>
                            {item.name}
                        </div>)
                    }
                    </div>
                }
                    
            </div>
    )
}