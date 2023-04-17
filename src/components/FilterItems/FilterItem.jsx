import React from 'react'
import "./FilterItem.css"
const FilterItem = (props) => {
    const {filter}=props
  return (
    <>
    <div className='filterItems'>
     
    <div className='items'>
    <div><span>Filter</span></div>
    <div>
    <button onClick={()=>filter("low")} className='low'>Low</button>
    </div>
    <div>
    <button onClick={()=>filter("medium")} className='medium'>Medium</button>
    </div>
    <div>
    <button onClick={()=>filter("high")} className='high'>High</button>
    </div>
    <div className="clear">
    <button onClick={()=>filter("clear")} className='clear'>Clear</button>
    </div>
    </div>

    
    </div>
    </>
  )
}

export default FilterItem