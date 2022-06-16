import React, { FC, useEffect, useRef, useState } from "react"
import cn from "classnames"


export const Filters: FC<FiltersType> = ({filters, filter, setFitFunc}) => {

    const sortRef = useRef<any>()
    const [visiblePopup, setVisiblePopup] = useState(false)

    const handleOutsideClick = (event: any) => {
        let path = event.path || (event.composedPath && event.composedPath())
        !path.includes(sortRef.current) && setVisiblePopup(false)
    }

    const toggleVisiblePopup = () => setVisiblePopup(!visiblePopup)

    const classN = (item: IFilter) => cn('open-filter-item', {open_actve: filter === item.type})


    useEffect(() => {document.body.addEventListener('click', handleOutsideClick)}, [] )

    return (
            <div className="title__filters" ref={sortRef}>
                <button className="title__filters-btn" onClick={toggleVisiblePopup}>Фильтры</button>
                {visiblePopup &&
                    <div className='open-filter'>
                    {
                        filters.map((item, index)=> <div className={classN(item)} key={item.name + index} onClick={() => setFitFunc(item.type)}>
                            {item.name}
                        </div>)
                    }
                    </div>
                }
                    
            </div>
    )
}

type FiltersType = {
    filters: IFilter[]
    filter: string
    setFitFunc: (filter: string) => void 
} 

export interface IFilter {
    type: string
    name: string
}