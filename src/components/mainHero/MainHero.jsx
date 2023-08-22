import React from 'react'
import "./MainHero.scss"

function MainHero() {
  return (
    <div className='mainhero'>
        <div className="content">
            <div className="logo">
                <p>AlgoViz</p>
            </div>
            <div className="search">
                <input type='text'placeholder='search...'/>
            </div>
        </div>
    </div>
  )
}

export default MainHero